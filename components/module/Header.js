import React from "react";
import Buttons from "../Button";
import Link from "next/link";
export default function Header() {
  return (
    <header className=" w-full px-20 absolute z-20">
      <div className="flex justify-around pt-16  max-w-screen-xl m-auto ">
        <Link href="/">
          <a>
            <div className="inline-flex space-x-3 ">
              <div className="block w-10 h-10 bg-primary-300 rounded-full"></div>
              <h3 className="font-bold text-primary-200 m-auto text-2xl">
                Buildit
              </h3>
            </div>
          </a>
        </Link>
        <ul className="flex space-x-8 m-auto">
          {["about", "service", "project", "contact"].map((v, k) => {
            return (
              <li className="text-primary-100" key={k}>
                <Link href={v}>
                  <a>{v}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Buttons url="/Projects" text="Need a project?" />
      </div>
    </header>
  );
}
