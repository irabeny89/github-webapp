import { createContext, Dispatch, SetStateAction, useState } from "react";
import type { SearchDataProviderType, SearchDataType } from "types";
const initialState: SearchDataType = {
  incomplete_results: true,
  items: [],
  total_count: 0,
};
export const SearchDataContext = createContext<
  [
    SearchDataType,
    Dispatch<SetStateAction<SearchDataType>>,
    string,
    Dispatch<SetStateAction<string>>
  ]
>([initialState, () => {}, "", () => {}]);

export default function SearchDataProvider({
  children,
}: SearchDataProviderType) {
  return (
    <SearchDataContext.Provider
      value={[...useState(initialState), ...useState("")]}
    >
      {children}
    </SearchDataContext.Provider>
  );
}
