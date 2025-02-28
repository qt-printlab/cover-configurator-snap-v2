export const allowedCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
export const specialCharacters = "0123456789";

export const selectAllowedChars = (font: string) => {
  return font === "1-2" || font === "2-2"
    ? specialCharacters
    : allowedCharacters;
};

export const checkInvalidCharacters = (line: string, allowedChars: string) => {
  if (!line) return "";
  const pattern = new RegExp(`[^${allowedChars}]`, "g");

  const invalid = line.match(pattern);
  return invalid ? invalid.join("") : "";
};
