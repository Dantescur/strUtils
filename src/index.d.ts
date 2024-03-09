/**
 * Removes leading and trailing whitespace from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The trimmed string.
 */
export declare function trimWhitespace(str: string): string;
/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
export declare function capitalize(str: string): string;
/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string.
 * @returns {string} The camel-cased string.
 */
export declare function camelCase(str: string): string;
/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string.
 * @returns {string} The snake-cased string.
 */
export declare function snakeCase(str: string): string;
/**
 * Truncates a string to a specified maximum length.
 *
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length.
 * @param {string} [suffix="..."] - The optional suffix to append.
 * @returns {string} The truncated string.
 */
export declare function truncate(str: string, maxLength: number, suffix?: string): string;
/**
 * Checks if a string starts with a specified prefix.
 *
 * @param {string} str - The input string.
 * @param {string} prefix - The prefix to check.
 * @returns {boolean} `true` if `str` starts with `prefix`, otherwise `false`.
 */
export declare function startsWith(str: string, prefix: string): boolean;
/**
 * Checks if a string ends with a specified suffix.
 *
 * @param {string} str - The input string.
 * @param {string} suffix - The suffix to check.
 * @returns {boolean} `true` if `str` ends with `suffix`, otherwise `false`.
 */
export declare function endsWith(str: string, suffix: string): boolean;
/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {string} str - The input string.
 * @param {string} substring - The substring to search for.
 * @returns {number} The count of occurrences.
 */
export declare function countOccurrences(str: string, substring: string): number;
/**
 * Replaces all occurrences of a search string with a replacement string.
 *
 * @param {string} str - The input string.
 * @param {string} search - The string to search for.
 * @param {string} replacement - The replacement string.
 * @returns {string} The modified string.
 */
export declare function replaceAll(str: string, search: string, replacement: string): string;
/**
 * Formats a string by replacing placeholders with provided arguments.
 *
 * @param {string} str - The input string with placeholders (e.g., "{0}").
 * @param {...any} args - The values to replace the placeholders.
 * @returns {string} The formatted string.
 */
export declare function format(str: string, ...args: any[]): string;
/**
 * Reverses the characters in a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
export declare function reverse(str: string): string;
/**
 * Retrieves a substring from the input string.
 *
 * @param {string} str - The input string.
 * @param {number} startIndex - The starting index.
 * @param {number} endIndex - The ending index (exclusive).
 * @returns {string} The extracted substring.
 */
export declare function substring(str: string, startIndex: number, endIndex: number): string;
/**
 * Pads a string with a specified character to a specified length.
 *
 * @param {string} str - The input string.
 * @param {number} length - The desired length.
 * @param {string} [char=" "] - The padding character.
 * @returns {string} The padded string.
 */
export declare function pad(str: string, length: number, char?: string): string;
/**
 * Removes all whitespace characters from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string without whitespace.
 */
export declare function removeWhitespace(str: string): string;
/**
 * Checks if a string represents a numeric value.
 *
 * @param {string} str - The input string.
 * @returns {boolean} `true` if the string is numeric, otherwise `false`.
 */
export declare function isNumeric(str: string): boolean;
/**
 * Checks if a string contains only alphabetic characters.
 *
 * @param {string} str - The input string.
 * @returns {boolean} `true` if the string is alphabetic, otherwise
 */
export declare function isAlpha(str: string): boolean;
/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
 */
export declare function isPalindrome(str: string): boolean;
/**
 * Repeats a string a specified number of times.
 *
 * @param {string} str - The input string to repeat.
 * @param {number} count - The number of repetitions.
 * @returns {string} The repeated string.
 */
export declare function repeat(str: string, count: number): string;
/**
 * Convert string to Title Case  (capitalize the first letter of each word)
 * @param {string} str - The input string to convert
 * @returns {string} The Title Cased string
 */
export declare function toTitleCase(str: string): string;
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
declare const strUtils: {
    repeat: typeof repeat;
    reverse: typeof reverse;
    trimWhitespace: typeof trimWhitespace;
    capitalize: typeof capitalize;
    camelCase: typeof camelCase;
    isAlpha: typeof isAlpha;
    isPalindrome: typeof isPalindrome;
    isNumeric: typeof isNumeric;
    snakeCase: typeof snakeCase;
    truncate: typeof truncate;
    startsWith: typeof startsWith;
    endsWith: typeof endsWith;
    countOccurrences: typeof countOccurrences;
    replaceAll: typeof replaceAll;
    format: typeof format;
    substring: typeof substring;
    pad: typeof pad;
    removeWhitespace: typeof removeWhitespace;
    toTitleCase: typeof toTitleCase;
};
export default strUtils;
