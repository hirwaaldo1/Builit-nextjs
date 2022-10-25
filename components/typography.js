import React from "react";

export default function Typography({ size, value, style = "", colored }) {
  return (
    <>
      {size === "lg" && (
        <h2 className={`text-primary-200 text-6xl font-semibold ${style}`}>
          {value}
        </h2>
      )}
      {size === "sm" && (
        <h4 className={`text-primary-100 text-lg ${style}`}>{value}</h4>
      )}
      {size === "md" && (
        <p className={`text-primary-200 text-2xl font-semibold ${style}`}>
          {value}
        </p>
      )}
      {colored === true && (
        <h4 className={`text-primary-700 text-lg font-semibold ${style}`}>
          {value}
        </h4>
      )}
      <p></p>
    </>
  );
}
