export const generateUri = (searchTerm: string, pageNumber: number = 1) =>
  `/search/repositories?q=${searchTerm}&sort=stars&order=desc&per_page=25&page=${pageNumber}`;
