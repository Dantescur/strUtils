const stringUtils = {
  trimWhitespace: (str: string): string => str.trim(),
  capitalize: (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1),
  camelCase: (str: string): string =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase(),
      )
      .replace(/\s+/g, ""),
  snakeCase: (str: string): string => str.replace(/\s+/g, "_").toLowerCase(),
  truncate: (str: string, maxLength: number, suffix: string = "..."): string =>
    str.length <= maxLength ? str : str.substring(0, maxLength) + suffix,
  startsWith: (str: string, prefix: string): boolean => str.startsWith(prefix),
  endsWith: (str: string, suffix: string): boolean => str.endsWith(suffix),
  countOccurrences: (str: string, substring: string): number =>
    str.split(substring).length - 1,
  replaceAll: (str: string, search: string, replacement: string): string =>
    str.split(search).join(replacement),
  format: (str: string, ...args: any[]): string =>
    str.replace(/{(\d+)}/g, (match, index) =>
      typeof args[index] !== "undefined" ? args[index] : match,
    ),
  reverse: (str: string): string => str.split("").reverse().join(""),
  substring: (str: string, startIndex: number, endIndex: number): string =>
    str.substring(startIndex, endIndex),
  pad: (str: string, length: number, char: string = " "): string =>
    str.length >= length ? str : str + char.repeat(length - str.length),
  removeWhitespace: (str: string): string => str.replace(/\s+/g, ""),
  isNumeric: (str: string): boolean => /^\d+$/.test(str),
  isAlpha: (str: string): boolean => /^[a-zA-Z]+$/.test(str),
  isPalindrome: (str: string): boolean => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  },
  repeat: (str: string, count: number): string => str.repeat(count),
};

export default stringUtils;
