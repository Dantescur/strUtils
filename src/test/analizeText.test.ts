import { analyzeText } from "../index";

describe("analyzeText", () => {
  // Test case: Count occurrences of a specific word
  it("should count occurrences of a specific word", () => {
    const inputText = "apple banana apple orange apple";
    const specificWord = "apple";

    const result = analyzeText(inputText, specificWord);

    expect(result.specificWordCount).toBe(3);
    expect(result.totalCount).toBe(5);
  });

  // Test case: Count words ending with a specific suffix
  it("should count words ending with a specific suffix", () => {
    const inputText = "running jumping swimming flying";
    const suffix = "ing";

    const result = analyzeText(inputText, undefined, suffix);

    expect(result.wordsEndWithSuffixCount).toBe(4);
    expect(result.totalCount).toBe(4);
  });

  // Test case: Both specific word and suffix
  it("should handle both specific word and suffix", () => {
    const inputText = "apple banana running jumping apple";
    const specificWord = "apple";
    const suffix = "ing";

    const result = analyzeText(inputText, specificWord, suffix);

    expect(result.specificWordCount).toBe(2);
    expect(result.wordsEndWithSuffixCount).toBe(2);
    expect(result.totalCount).toBe(5);
  });
});
