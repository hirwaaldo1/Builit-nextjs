import React from "react";
import Typography from "../typography";
import Buttons from "../buttons";
import { campany } from "../../data/data";
import Card from "../modules/card";
export default function AboutLayout() {
  return (
    <div>
      <section className=" bg-gradient-to-r relative overflow-hidden from-primary-400 to-primary-500 h-auto ">
        <div className="pt-36 w-fit m-auto grid grid-cols-2 z-20">
          <div className="m-auto">
            <img src="assets/Photos77.png" />
          </div>
          <div className="z-20 pb-24 w-[500px] m-auto">
            <Typography
              colored={true}
              value="About us"
              style="text-xl text-primary-700"
            ></Typography>
            <Typography
              size="md"
              style="my-5"
              value="Owner and investor with a reputation"
            ></Typography>
            <Typography
              size="sm"
              style="mt-4 mb-10"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex."
            ></Typography>
          </div>
        </div>
      </section>
      <section className="text-center p-20">
        <Typography
          colored={true}
          value="Statistics"
          style="text-xl text-primary-700"
        ></Typography>
        <Typography
          size="md"
          style="my-1"
          value="Development in numbers"
        ></Typography>
        <div className="flex w-fit m-auto shadow-xl px-20 space-x-10 py-10 mt-20 rounded bg-primary-400">
          {[1, 2, 3].map((v, i) => {
            return (
              <div
                key={i}
                className={`flex space-x-5  ${
                  (i === 0 || i === 1) &&
                  "border-r-2 border-r-primary-200 px-10"
                } `}
              >
                <img src="/assets/Icon22.png" />
                <div>
                  <Typography value=">200" size="md" />
                  <Typography value="Number" size="sm" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-w-screen-xl  m-auto border-t border-b pb-6 mt-20  border-primary-200">
          <div className="max-w-2xl m-auto pt-6 flex space-x-7 justify-between  ">
            {campany.map((v, i) => {
              return <img src={v} key={i} />;
            })}
          </div>
        </div>
      </section>
      <section className="from-primary-400 mt-20 py-20 to-primary-500 bg-gradient-to-r text-center">
        <Typography
          colored={true}
          value="Statistics"
          style="text-[14px] text-primary-700"
        ></Typography>
        <Typography size="md" style="" value="Let’s meet"></Typography>
        <div className="grid grid-cols-3 w-fit m-auto mt-7 gap-10">
          {Array(9)
            .fill(null)
            .map((v, i) => {
              return (
                <Card
                  url={`/assets/P${i + 1}.png`}
                  key={i}
                  title="Name Surname"
                  role="Worker"
                />
              );
            })}
        </div>
        <div className="max-w-5xl  m-auto border-t border-b pb-6 mt-20  border-primary-200">
          <div className="pt-14 pb-8 flex space-x-7 justify-between  ">
            <div>
              <Typography size="md" value="Call us" />
            </div>
            <div className="flex space-x-5 w-fit m-auto ">
              <Buttons style="w-[200px] h-fit" text="Services"></Buttons>
              <Buttons
                style="w-[150px] h-fit text-primary-100 bg-primary-900"
                text="Email"
              ></Buttons>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
