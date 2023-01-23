export const formatToLocalDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString();
};
