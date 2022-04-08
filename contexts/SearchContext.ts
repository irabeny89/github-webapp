import { createContext, Dispatch } from "react";
import { InitialSearchStateActionType, InitialSearchStateType } from "types";
import { initialState } from "components/SearchProvider";

const SearchContext = createContext<
  [InitialSearchStateType, Dispatch<InitialSearchStateActionType>]
>([initialState, () => {}]);

export default SearchContext;
