import { ReactNode } from "react";

type SearchDataProviderType = {
  children: ReactNode;
};

type SearchDataItemOwnerType = {
  id: number;
  html_url: string;
  login: string;
};

type SearchDataItemType = {
  id: number;
  owner: SearchDataItemOwnerType;
  stargazers_count: number;
  name: string;
  html_url: string;
};

type SearchDataType = {
  total_count: number;
  incomplete_results: boolean;
  items: SearchDataItemType[];
};

type InitialSearchStateType = {
  searchTerm: string;
  searchData: SearchDataType;
  errorMessage: string;
};

type ConstantsType = "setSearchTerm" | "setSearchData" | "setErrorMessage";

type InitialSearchStateActionType = {
  type: ConstantsType;
  value: InitialSearchStateType[keyof InitialSearchStateType];
};
