const stringUtils = {
  trimWhitespace: (str: string) => str.trim(),
  capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
  camelCase: (str: string) =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase(),
      )
      .replace(/\s+/g, ""),
  snakeCase: (str: string) => str.replace(/\s+/g, "_").toLowerCase(),
  truncate: (str: string, maxLength: number, suffix: string = "...") =>
    str.length <= maxLength ? str : str.substring(0, maxLength) + suffix,
  startsWith: (str: string, prefix: string) => str.startsWith(prefix),
  endsWith: (str: string, suffix: string) => str.endsWith(suffix),
  countOccurrences: (str: string, substring: string) =>
    str.split(substring).length - 1,
  replaceAll: (str: string, search: string, replacement: string) =>
    str.split(search).join(replacement),
  format: (str: string, ...args: any[]) =>
    str.replace(/{(\d+)}/g, (match, index) =>
      typeof args[index] !== "undefined" ? args[index] : match,
    ),
  reverse: (str: string) => str.split("").reverse().join(""),
  substring: (str: string, startIndex: number, endIndex: number) =>
    str.substring(startIndex, endIndex),
  pad: (str: string, length: number, char: string = " ") =>
    str.length >= length ? str : str + char.repeat(length - str.length),
  removeWhitespace: (str: string) => str.replace(/\s+/g, ""),
  isNumeric: (str: string) => /^\d+$/.test(str),
  isAlpha: (str: string) => /^[a-zA-Z]+$/.test(str),
  isPalindrome: (str: string) => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  },
  repeat: (str: string, count: number) => str.repeat(count),
};

export default stringUtils;
