export const validateUrl = (name) => {
  const url = name
    .toString()
    .replaceAll(" ", "-")
    .replaceAll(",", "-")
    .replaceAll("&", "-");

  return url;
};
