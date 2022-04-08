import {
  SET_SEARCH_DATA,
  SET_ERROR_MESSAGE,
  SET_SEARCH_TERM,
} from "constants/index";
import {
  InitialSearchStateActionType,
  InitialSearchStateType,
  SearchDataType,
} from "types";

const searchReducer = (
  state: InitialSearchStateType,
  { type, value }: InitialSearchStateActionType
): InitialSearchStateType =>
  type === SET_ERROR_MESSAGE
    ? { ...state, errorMessage: value as string }
    : type === SET_SEARCH_DATA
    ? { ...state, searchData: value as SearchDataType }
    : type === SET_SEARCH_TERM
    ? { ...state, searchTerm: value as string }
    : state;

export default searchReducer;
