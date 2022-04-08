import { useReducer } from "react";
import searchReducer from "reducers/searchReducer";
import type { InitialSearchStateType, SearchDataProviderType } from "types";
import SearchContext from "contexts/SearchContext";

export const initialState: InitialSearchStateType = {
  searchTerm: "",
  errorMessage: "",
  searchData: {
    incomplete_results: true,
    items: [],
    total_count: 0,
  }
}

export default function SearchDataProvider({
  children,
}: SearchDataProviderType) {
  return (
    <SearchContext.Provider
      value={useReducer(searchReducer, initialState)}
    >
      {children}
    </SearchContext.Provider>
  );
}
