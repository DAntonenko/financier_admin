export const formatNumber = (num: string): string => {
  const WHOLE_PART = 0;

  const numberParts = num.split(",");
  numberParts[WHOLE_PART] = numberParts[WHOLE_PART].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return numberParts.join(",");
};
