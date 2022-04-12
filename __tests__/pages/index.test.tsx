import { initialState } from "@/contexts/SearchContext";
import Home from "@/pages/index";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import type { SearchDataType } from "types";

const searchTerm = "jest",
  page1Items = [
    {
      ...initialState.searchData,
      id: 1,
      owner: {
        id: 1,
        html_url: "https://example.com",
        login: "jester",
      },
      stargazers_count: 1,
      name: searchTerm,
      html_url: "https://example.com",
    },
  ],
  page2Items = [
    {
      ...initialState.searchData,
      id: 2,
      owner: {
        id: 2,
        html_url: "https://example.com",
        login: "jester2",
      },
      stargazers_count: 2,
      name: searchTerm + "2",
      html_url: "https://example.com",
    },
  ],
  page1response: SearchDataType = {
    ...initialState.searchData,
    items: page1Items,
  },
  page2response: SearchDataType = {
    ...initialState.searchData,
    items: page2Items,
  },
  testServer = setupServer(
    rest.get(`https://api.github.com/search/repositories`, (req, res, ctx) => {
      return req.headers.get("Accept")
        ? req.url.searchParams.get("page") === "1"
          ? res(ctx.json(page1response))
          : res(ctx.json(page2response))
        : res(ctx.status(400, "Invalid Accept header value"));
    })
  );

describe("Home page test", () => {
  beforeAll(() => testServer.listen());
  beforeEach(() => render(<Home />));
  afterEach(() => {
    testServer.resetHandlers(), cleanup;
  });
  afterAll(() => testServer.close());

  it("doesn't search when text box is empty.", async () => {
    const textBox = screen.getByRole("textbox"),
      searchButton = screen.getByRole("button", {
        name: /search/i,
      }),
      tableBody = screen.getAllByRole("rowgroup")[1],
      user = userEvent.setup();

    expect(textBox).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(textBox).toHaveValue("");

    await user.click(searchButton);

    expect(tableBody).toBeEmptyDOMElement();
  });

  it("it searches for search term using the github api.", async () => {
    const textBox = screen.getByRole("textbox"),
      searchButton = screen.getByRole("button", {
        name: /search/i,
      }),
      user = userEvent.setup();
    // type and search for search term
    await user.type(textBox, searchTerm), await user.click(searchButton);

    expect(textBox).toHaveValue(searchTerm);
    expect(await screen.findByText(searchTerm)).toBeInTheDocument();
  });

  it("navigates from one page to another.", async () => {
    const textBox = screen.getByRole("textbox"),
      searchButton = screen.getByRole("button", {
        name: /search/i,
      }),
      prevButton = screen.getByRole("button", {
        name: "<",
      }),
      nextButton = screen.getByRole("button", {
        name: ">",
      }),
      user = userEvent.setup();

    await user.type(textBox, searchTerm),
      await user.click(searchButton),
      await user.click(nextButton);

    expect(textBox).toHaveValue(searchTerm);
    expect(await screen.findByText(page2Items[0].name)).toBeInTheDocument();
    // go back to previous page
    await user.click(prevButton);
    expect(await screen.findByText(searchTerm)).toBeInTheDocument();
  });
});
