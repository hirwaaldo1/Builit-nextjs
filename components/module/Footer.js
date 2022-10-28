import Link from "next/link";
import React from "react";
import Typography from "../Typography";

export default function Footer() {
  return (
    <footer className="bg-primary-200 p-20">
      <div className="flex  max-w-7xl m-auto justify-between ">
        <div>
          <Typography size="md" value="Buildit" style={"text-[white] mb-5"} />
          <Typography
            size="sm"
            value="Development company, 2022"
            style={"text-[white] mb-20"}
          />
          <Typography
            size="sm"
            value="Site design ⏰ Alarm"
            style="text-[white]"
          />
        </div>
        <div>
          {[1, 2, 3, 4].map((v, i) => {
            return (
              <Typography
                key={i}
                size="sm"
                value={`Service ${v}`}
                style="text-[white] mb-2"
              ></Typography>
            );
          })}
          <img src="/assets/Button container.png" />
        </div>
        <div>
          {["about", "service", "project", "contact"].map((v, k) => {
            return (
              <Link href={`/${v}`} key={k}>
                <a>
                  <Typography size="sm" value={v} style="text-[white] mb-2" />
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col space-y-1">
          <Typography
            size="sm"
            value="Buildit"
            style="text-[white]"
          ></Typography>
          <Typography
            size="sm"
            value="60 Manor Station St. Fairport"
            style="text-[white]"
          ></Typography>
          <Typography value=", NY 14450" style="text-[white]" size="sm" />
          <Typography
            size="sm"
            value="708-790-0000 sales@buildit.site"
            style="text-[white] pt-16 w-2/4"
          ></Typography>
        </div>
      </div>
    </footer>
  );
}
