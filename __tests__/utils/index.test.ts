import { generateUri } from "@/utils/index";

describe("utils tests", () => {
  describe("generateUri function", () => {
    // Expected string format =>
    // `/search/repositories?q=${searchTerm}&sort=stars&order=desc&per_page=25&page=${pageNumber}`
    it("generates a string that uses the function parameters as query parameters", () => {
      const searchTerm = "jest",
        pageNumber = 2;

      expect(generateUri(searchTerm, pageNumber)).toMatch(`q=${searchTerm}`);
      expect(generateUri(searchTerm, pageNumber)).toMatch(
        `per_page=${pageNumber}`
      );
    });
  });
});
