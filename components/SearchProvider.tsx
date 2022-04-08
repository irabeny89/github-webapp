import { useReducer } from "react";
import searchReducer from "reducers/searchReducer";
import type { SearchDataProviderType } from "types";
import SearchContext, { initialState } from "contexts/SearchContext";

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
