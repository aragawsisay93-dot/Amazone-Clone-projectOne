import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount = 0 }) => {
  const numberAmount = typeof amount === "number" ? amount : 0;
  const formattedAmount = numeral(numberAmount).format("$0,0.00");
  return <span>{formattedAmount}</span>;
};

export default CurrencyFormat;
