/**
 * This module provides utility functions for string manipulation.
 * @module strUtils
 *
 * This module contains various functions for string manipulation.
 *
 * @example
 * // Importing the entire module
 * import strUtils from 'strutils';
 * const trimmed = strUtils.trimWhitespace('  example  ');
 * const camelCased = strUtils.camelCase('hello world');
 *
 * // Importing a single function
 * import { repeat } from 'strutils';
 * const repeated = repeat('Hello', 3);
 */
const stringUtils = {
  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @param {string} str - The input string.
   * @returns {string} The trimmed string.
   */
  trimWhitespace: (str: string): string => str.trim(),

  /**
   * Capitalizes the first letter of a string.
   *
   * @param {string} str - The input string.
   * @returns {string} The capitalized string.
   */
  capitalize: (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1),

  /**
   * Converts a string to camel case.
   *
   * @param {string} str - The input string.
   * @returns {string} The camel-cased string.
   */
  camelCase: (str: string): string =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase(),
      )
      .replace(/\s+/g, ""),

  /**
   * Converts a string to snake case.
   *
   * @param {string} str - The input string.
   * @returns {string} The snake-cased string.
   */
  snakeCase: (str: string): string => str.replace(/\s+/g, "_").toLowerCase(),

  /**
   * Truncates a string to a specified maximum length.
   *
   * @param {string} str - The input string.
   * @param {number} maxLength - The maximum length.
   * @param {string} [suffix="..."] - The optional suffix to append.
   * @returns {string} The truncated string.
   */
  truncate: (str: string, maxLength: number, suffix: string = "..."): string =>
    str.length <= maxLength ? str : str.substring(0, maxLength) + suffix,

  /**
   * Checks if a string starts with a specified prefix.
   *
   * @param {string} str - The input string.
   * @param {string} prefix - The prefix to check.
   * @returns {boolean} `true` if `str` starts with `prefix`, otherwise `false`.
   */
  startsWith: (str: string, prefix: string): boolean => str.startsWith(prefix),

  /**
   * Checks if a string ends with a specified suffix.
   *
   * @param {string} str - The input string.
   * @param {string} suffix - The suffix to check.
   * @returns {boolean} `true` if `str` ends with `suffix`, otherwise `false`.
   */
  endsWith: (str: string, suffix: string): boolean => str.endsWith(suffix),

  /**
   * Counts the number of occurrences of a substring in a string.
   *
   * @param {string} str - The input string.
   * @param {string} substring - The substring to search for.
   * @returns {number} The count of occurrences.
   */
  countOccurrences: (str: string, substring: string): number =>
    str.split(substring).length - 1,

  /**
   * Replaces all occurrences of a search string with a replacement string.
   *
   * @param {string} str - The input string.
   * @param {string} search - The string to search for.
   * @param {string} replacement - The replacement string.
   * @returns {string} The modified string.
   */
  replaceAll: (str: string, search: string, replacement: string): string =>
    str.split(search).join(replacement),

  /**
   * Formats a string by replacing placeholders with provided arguments.
   *
   * @param {string} str - The input string with placeholders (e.g., "{0}").
   * @param {...any} args - The values to replace the placeholders.
   * @returns {string} The formatted string.
   */
  format: (str: string, ...args: any[]): string =>
    str.replace(/{(\d+)}/g, (match, index) =>
      typeof args[index] !== "undefined" ? args[index] : match,
    ),

  /**
   * Reverses the characters in a string.
   *
   * @param {string} str - The input string.
   * @returns {string} The reversed string.
   */
  reverse: (str: string): string => str.split("").reverse().join(""),

  /**
   * Retrieves a substring from the input string.
   *
   * @param {string} str - The input string.
   * @param {number} startIndex - The starting index.
   * @param {number} endIndex - The ending index (exclusive).
   * @returns {string} The extracted substring.
   */
  substring: (str: string, startIndex: number, endIndex: number): string =>
    str.substring(startIndex, endIndex),

  /**
   * Pads a string with a specified character to a specified length.
   *
   * @param {string} str - The input string.
   * @param {number} length - The desired length.
   * @param {string} [char=" "] - The padding character.
   * @returns {string} The padded string.
   */
  pad: (str: string, length: number, char: string = " "): string =>
    str.length >= length ? str : str + char.repeat(length - str.length),

  /**
   * Removes all whitespace characters from a string.
   *
   * @param {string} str - The input string.
   * @returns {string} The string without whitespace.
   */
  removeWhitespace: (str: string): string => str.replace(/\s+/g, ""),

  /**
   * Checks if a string represents a numeric value.
   *
   * @param {string} str - The input string.
   * @returns {boolean} `true` if the string is numeric, otherwise `false`.
   */
  isNumeric: (str: string): boolean => /^\d+$/.test(str),

  /**
   * Checks if a string contains only alphabetic characters.
   *
   * @param {string} str - The input string.
   * @returns {boolean} `true` if the string is alphabetic, otherwise
   */
  isAlpha: (str: string): boolean => /^[a-zA-Z]+$/.test(str),

  /**
   * Checks if a string is a palindrome (reads the same forwards and backwards).
   *
   * @param {string} str - The input string to check.
   * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
   */
  isPalindrome: (str: string): boolean => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  },

  /**
   * Repeats a string a specified number of times.
   *
   * @param {string} str - The input string to repeat.
   * @param {number} count - The number of repetitions.
   * @returns {string} The repeated string.
   */
  repeat: (str: string, count: number): string => str.repeat(count),
};

export default stringUtils;
