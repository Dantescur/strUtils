import stringUtils from "../index";

describe("String Utility Functions", () => {
  describe("trimWhitespace", () => {
    test("should trim leading and trailing whitespace", () => {
      expect(stringUtils.trimWhitespace("  hello  ")).toBe("hello");
    });

    test("should return empty string if input is only whitespace", () => {
      expect(stringUtils.trimWhitespace("   ")).toBe("");
    });

    test("should handle strings with no whitespace", () => {
      expect(stringUtils.trimWhitespace("hello")).toBe("hello");
    });
  });

  describe("capitalize", () => {
    test("should capitalize the first letter of a string", () => {
      expect(stringUtils.capitalize("hello")).toBe("Hello");
    });

    test("should handle empty string gracefully", () => {
      expect(stringUtils.capitalize("")).toBe("");
    });

    test("should leave already capitalized letters unchanged", () => {
      expect(stringUtils.capitalize("Hello")).toBe("Hello");
    });
  });

  describe("camelCase", () => {
    test("should convert a string to camelCase", () => {
      expect(stringUtils.camelCase("hello world")).toBe("helloWorld");
    });

    test("should handle strings with no whitespace", () => {
      expect(stringUtils.camelCase("helloWorld")).toBe("helloWorld");
    });

    test("should handle empty string gracefully", () => {
      expect(stringUtils.camelCase("")).toBe("");
    });
  });

  describe("snakeCase", () => {
    test("should convert a string to snake_case", () => {
      expect(stringUtils.snakeCase("Hello World")).toBe("hello_world");
    });

    test("should handle strings with no whitespace", () => {
      expect(stringUtils.snakeCase("hello_world")).toBe("hello_world");
    });

    test("should handle empty string gracefully", () => {
      expect(stringUtils.snakeCase("")).toBe("");
    });
  });

  describe("truncate", () => {
    test("should truncate a string to the specified length", () => {
      expect(stringUtils.truncate("hello world", 5)).toBe("hello...");
    });

    test("should return the original string if maxLength is greater than or equal to the string length", () => {
      expect(stringUtils.truncate("hello", 10)).toBe("hello");
    });

    test("should append the specified suffix when truncating", () => {
      expect(stringUtils.truncate("hello world", 5, "... (continued)")).toBe(
        "hello... (continued)",
      );
    });
  });

  // Add tests for other functions similarly
  describe("startsWith", () => {
    test("should return true if the string starts with the prefix", () => {
      expect(stringUtils.startsWith("hello world", "hello")).toBe(true);
    });

    test("should return false if the string does not start with the prefix", () => {
      expect(stringUtils.startsWith("hello world", "world")).toBe(false);
    });
  });

  describe("endsWith", () => {
    test("should return true if the string ends with the suffix", () => {
      expect(stringUtils.endsWith("hello world", "world")).toBe(true);
    });

    test("should return false if the string does not end with the suffix", () => {
      expect(stringUtils.endsWith("hello world", "hello")).toBe(false);
    });
  });

  describe("countOccurrences", () => {
    test("should return the correct number of occurrences of a substring", () => {
      expect(stringUtils.countOccurrences("hello world hello", "hello")).toBe(
        2,
      );
    });

    test("should return 0 if the substring is not found", () => {
      expect(stringUtils.countOccurrences("hello world", "foo")).toBe(0);
    });
  });

  describe("replaceAll", () => {
    test("should replace all occurrences of a substring with a replacement", () => {
      expect(stringUtils.replaceAll("hello world hello", "hello", "hi")).toBe(
        "hi world hi",
      );
    });
  });

  describe("format", () => {
    test("should replace placeholders with arguments", () => {
      expect(stringUtils.format("Hello, {0}!", "world")).toBe("Hello, world!");
    });
  });

  describe("reverse", () => {
    test("should reverse the string", () => {
      expect(stringUtils.reverse("hello")).toBe("olleh");
    });
  });

  describe("substring", () => {
    test("should extract the substring based on the start and end indices", () => {
      expect(stringUtils.substring("hello world", 6, 11)).toBe("world");
    });
  });

  describe("pad", () => {
    test("should pad the string with the specified character until it reaches the desired length", () => {
      expect(stringUtils.pad("hello", 10, "-")).toBe("hello-----");
    });
  });

  describe("removeWhitespace", () => {
    test("should remove all whitespace from the string", () => {
      expect(stringUtils.removeWhitespace("hello world")).toBe("helloworld");
    });
  });

  describe("isNumeric", () => {
    test("should return true if the string consists only of numeric characters", () => {
      expect(stringUtils.isNumeric("12345")).toBe(true);
    });

    test("should return false if the string contains non-numeric characters", () => {
      expect(stringUtils.isNumeric("12345a")).toBe(false);
    });
  });

  describe("isAlpha", () => {
    test("should return true if the string consists only of alphabetic characters", () => {
      expect(stringUtils.isAlpha("hello")).toBe(true);
    });

    test("should return false if the string contains non-alphabetic characters", () => {
      expect(stringUtils.isAlpha("hello123")).toBe(false);
    });
  });

  describe("isPalindrome", () => {
    test("should return true if the string is a palindrome", () => {
      expect(stringUtils.isPalindrome("racecar")).toBe(true);
    });

    test("should return false if the string is not a palindrome", () => {
      expect(stringUtils.isPalindrome("hello")).toBe(false);
    });
  });
});
