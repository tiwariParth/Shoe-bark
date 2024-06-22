const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "INR",
  style: "currency",
  minimumFractionDigits: 0,
});

export const formatCurrency = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount);
};

const NUMBERFORMATTER = new Intl.NumberFormat("en-US");

export const formatNumber = (number: number) => {
  return NUMBERFORMATTER.format(number);
};
