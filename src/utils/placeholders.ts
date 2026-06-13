const todoPrefixPattern = /^TODO(?:\s*-\s*)?/i;

export function isPlaceholderText(value?: string) {
  if (!value) {
    return true;
  }

  const trimmedValue = value.trim();

  return trimmedValue === "" || trimmedValue.toUpperCase() === "TODO";
}

export function displayPlaceholderText(
  value?: string,
  fallback = "Information à venir",
) {
  if (!value) {
    return fallback;
  }

  const cleanedValue = value.replace(todoPrefixPattern, "").trim();

  if (isPlaceholderText(cleanedValue)) {
    return fallback;
  }

  return cleanedValue;
}

export function hasValidExternalUrl(url?: string) {
  return Boolean(url && url !== "TODO" && /^https?:\/\//.test(url));
}
