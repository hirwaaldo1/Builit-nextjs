import React from "react";
import Link from "next/link";
export default function Button({ style, text, color, width , url="" }) {
  return (
    <Link href={url}>
    <button
      className={`${color || "bg-primary-300 text-white"}  p-2 ${
        width || "w-[10.563rem]"
      }  rounded font-semibold  ${style}`}
    >
      {text}
    </button>
    </Link>
  );
}
