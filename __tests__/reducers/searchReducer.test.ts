import { initialState } from "@/contexts/SearchContext";
import searchReducer from "@/reducers/searchReducer";

describe("searchReducer function test", () => {
  it("set error message", () => {
    const value = "Not joking";

    expect(
      searchReducer(initialState, { type: "setErrorMessage", value })
    ).toHaveProperty("errorMessage", value);
    expect(
      searchReducer(initialState, { type: "setErrorMessage", value })
    ).not.toHaveProperty("errorMessage", initialState.errorMessage);
  });

  it("set search data", () => {
    const value = {...initialState.searchData, incomplete_results: false}

    expect(
      searchReducer(initialState, { type: "setSearchData", value }).searchData
    ).toEqual(value);
    expect(
      searchReducer(initialState, { type: "setSearchData", value }).searchData
    ).not.toEqual(initialState.searchData);
  });
});
