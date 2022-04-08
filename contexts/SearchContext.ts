import { createContext, Dispatch } from "react";
import { InitialSearchStateActionType, InitialSearchStateType } from "types";

export const initialState: InitialSearchStateType = {
  searchTerm: "",
  errorMessage: "",
  searchData: {
    incomplete_results: true,
    items: [],
    total_count: 0,
  }
}

const SearchContext = createContext<
  [InitialSearchStateType, Dispatch<InitialSearchStateActionType>]
>([initialState, () => {}]);

export default SearchContext;
