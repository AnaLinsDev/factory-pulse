export const toTitleCase = (value: string) =>
  value
    .toLowerCase()
    .split(/[_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
