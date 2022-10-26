import React from "react";
import Link from "next/link";
export default function Buttons({ style, text, color, width , url="" }) {
  return (
    <button
      className={`${color || "bg-primary-300 text-white"}  p-2 ${
        width || "w-[10.563rem]"
      }  rounded font-semibold  ${style}`}
    >
      <Link href={url}>{text}</Link>
    </button>
  );
}
