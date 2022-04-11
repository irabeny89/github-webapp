import { initialState } from "@/contexts/SearchContext";
import Home from "@/pages/index";
import { generateUri } from "@/utils/index";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import type { SearchDataItemType } from "types";

const searchTerm = "jest",
  response: SearchDataItemType = {
    ...initialState.searchData,
    id: 1,
    owner: {
      id: 1,
      html_url: "https://example.com",
      login: "jester",
    },
    stargazers_count: 1,
    name: "jest",
    html_url: "https://example.com",
  },
  testServer = setupServer(
    rest.get(
      `https://api.github.com${generateUri(searchTerm)}`,
      (req, res, ctx) => res(ctx.json(response))
    )
  );

describe("Home page test", () => {
  beforeAll(() => testServer.listen());
  afterEach(() => {
    testServer.resetHandlers(), cleanup;
  });
  afterAll(() => testServer.close());

  render(<Home />);

  const textBox = screen.getByRole("textbox"),
    searchButton = screen.getByRole("button", {
      name: /search/i,
    }),
    tableBody = screen.getAllByRole("rowgroup")[1];

  it("doesn't search when text box is empty", async () => {
    const user = userEvent.setup();

    expect(textBox).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(textBox).toHaveValue("");

    await user.click(searchButton);

    expect(tableBody).toBeEmptyDOMElement();
  });
});
