/**
 * Removes leading and trailing whitespace from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The trimmed string.
 */
export function trimWhitespace(str: string): string {
  return str.trim();
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string.
 * @returns {string} The camel-cased string.
 */
export function camelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, "");
}

/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string.
 * @returns {string} The snake-cased string.
 */
export function snakeCase(str: string): string {
  return str.replace(/\s+/g, "_").toLowerCase();
}

/**
 * Truncates a string to a specified maximum length.
 *
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length.
 * @param {string} [suffix="..."] - The optional suffix to append.
 * @returns {string} The truncated string.
 */
export function truncate(
  str: string,
  maxLength: number,
  suffix: string = "...",
): string {
  return str.length <= maxLength ? str : str.substring(0, maxLength) + suffix;
}

/**
 * Checks if a string starts with a specified prefix.
 *
 * @param {string} str - The input string.
 * @param {string} prefix - The prefix to check.
 * @returns {boolean} `true` if `str` starts with `prefix`, otherwise `false`.
 */
export function startsWith(str: string, prefix: string): boolean {
  return str.startsWith(prefix);
}

/**
 * Checks if a string ends with a specified suffix.
 *
 * @param {string} str - The input string.
 * @param {string} suffix - The suffix to check.
 * @returns {boolean} `true` if `str` ends with `suffix`, otherwise `false`.
 */
export function endsWith(str: string, suffix: string): boolean {
  return str.endsWith(suffix);
}

/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {string} str - The input string.
 * @param {string} substring - The substring to search for.
 * @returns {number} The count of occurrences.
 */
export function countOccurrences(str: string, substring: string): number {
  return str.split(substring).length - 1;
}

/**
 * Replaces all occurrences of a search string with a replacement string.
 *
 * @param {string} str - The input string.
 * @param {string} search - The string to search for.
 * @param {string} replacement - The replacement string.
 * @returns {string} The modified string.
 */
export function replaceAll(
  str: string,
  search: string,
  replacement: string,
): string {
  return str.split(search).join(replacement);
}

/**
 * Formats a string by replacing placeholders with provided arguments.
 *
 * @param {string} str - The input string with placeholders (e.g., "{0}").
 * @param {...any} args - The values to replace the placeholders.
 * @returns {string} The formatted string.
 */
export function format(str: string, ...args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, index) =>
    typeof args[index] !== "undefined" ? args[index] : match,
  );
}

/**
 * Reverses the characters in a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
export function reverse(str: string): string {
  const newStr = str.split("").reverse().join("");
  return newStr;
}

/**
 * Retrieves a substring from the input string.
 *
 * @param {string} str - The input string.
 * @param {number} startIndex - The starting index.
 * @param {number} endIndex - The ending index (exclusive).
 * @returns {string} The extracted substring.
 */
export function substring(
  str: string,
  startIndex: number,
  endIndex: number,
): string {
  const newStr = str.substring(startIndex, endIndex);
  return newStr;
}

/**
 * Pads a string with a specified character to a specified length.
 *
 * @param {string} str - The input string.
 * @param {number} length - The desired length.
 * @param {string} [char=" "] - The padding character.
 * @returns {string} The padded string.
 */
export function pad(str: string, length: number, char: string = " "): string {
  const newStr =
    str.length >= length ? str : str + char.repeat(length - str.length);
  return newStr;
}

/**
 * Removes all whitespace characters from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string without whitespace.
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, "");
}

/**
 * Checks if a string represents a numeric value.
 *
 * @param {string} str - The input string.
 * @returns {boolean} `true` if the string is numeric, otherwise `false`.
 */
export function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

/**
 * Checks if a string contains only alphabetic characters.
 *
 * @param {string} str - The input string.
 * @returns {boolean} `true` if the string is alphabetic, otherwise
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
 */
export function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

/**
 * Repeats a string a specified number of times.
 *
 * @param {string} str - The input string to repeat.
 * @param {number} count - The number of repetitions.
 * @returns {string} The repeated string.
 */
export function repeat(str: string, count: number): string {
  return str.repeat(count);
}

/**
 * Convert string to Title Case  (capitalize the first letter of each word)
 * @param {string} str - The input string to convert
 * @returns {string} The Title Cased string
 */
export function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * This module provides utility functions for string manipulation.
 * @module strUtils
 *
 *
 * @example
 * ```ts
 * // Importing the entire module
 * import strUtils from 'strutils';
 * const trimmed = strUtils.trimWhitespace('  example  ');
 * const camelCased = strUtils.camelCase('hello world');
 *
 * // Importing a single function
 * import { repeat } from 'strutils';
 * const repeated = repeat('Hello', 3);
 * ```
 */

export interface StringManipulation {
  trimWhitespace(str: string): string;
  capitalize(str: string): string;
  camelCase(str: string): string;
  snakeCase(str: string): string;
  truncate(str: string, maxLength: number, suffix?: string): string;
  startsWith(str: string, prefix: string): boolean;
  endsWith(str: string, suffix: string): boolean;
  countOccurrences(str: string, substring: string): number;
  replaceAll(str: string, search: string, replacement: string): string;
  format(str: string, ...args: any[]): string;
  reverse(str: string): string;
  substring(str: string, startIndex: number, endIndex: number): string;
  pad(str: string, length: number, char?: string): string;
  removeWhitespace(str: string): string;
  isNumeric(str: string): boolean;
  isAlpha(str: string): boolean;
  isPalindrome(str: string): boolean;
  repeat(str: string, count: number): string;
  toTitleCase(str: string): string;
}

const strUtils: StringManipulation = {
  trimWhitespace,
  capitalize,
  camelCase,
  snakeCase,
  truncate,
  startsWith,
  endsWith,
  countOccurrences,
  replaceAll,
  format,
  reverse,
  substring,
  pad,
  removeWhitespace,
  isNumeric,
  isAlpha,
  isPalindrome,
  repeat,
  toTitleCase,
};

export default strUtils;
