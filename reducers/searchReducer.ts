import {
  InitialSearchStateActionType,
  InitialSearchStateType,
  SearchDataType,
} from "types";

const searchReducer = (
  state: InitialSearchStateType,
  { type, value }: InitialSearchStateActionType
): InitialSearchStateType =>
  type === "setErrorMessage"
    ? { ...state, errorMessage: value as string }
    : type === "setSearchData"
    ? { ...state, searchData: value as SearchDataType }
    : type === "setSearchTerm"
    ? { ...state, searchTerm: value as string }
    : state;

export default searchReducer;
