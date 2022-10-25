import React from "react";

export default function Buttons({ style, text, color, width }) {
  return (
    <button
      className={`${color || "bg-primary-300 text-white"}  p-2 ${
        width || "w-[10.563rem]"
      }  rounded font-semibold  ${style}`}
    >
      {text}
    </button>
  );
}
