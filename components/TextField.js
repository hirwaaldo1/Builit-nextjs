import React from "react";

export default function TextField({ lable, type, which }) {
  return (
    <div className="w-full">
      <lable className="text-primary-100 text-base">{lable}</lable> <br />
      {which === "input" && (
        <input
          className="border border-primary-200 rounded-sm mt-2 outline-none p-1.5 w-full bg-transparent "
          type={type}
        ></input>
      )}
      {which === "textarea" && (
        <textarea
          className="border border-primary-200  h-40 rounded-sm mt-2 outline-none p-2 w-full bg-transparent"
          type={type}
        ></textarea>
      )}
    </div>
  );
}
