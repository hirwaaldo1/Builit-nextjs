import Buttons from "../buttons";
import Imagelist from "../modules/imagelist";
import TextField from "../textField";
import Typography from "../typography";
import {campany,gallaryList,info} from "../../data/data"
export default function HomeLayout() {
  return (
    <main>
      <section className=" bg-gradient-to-r relative overflow-hidden from-primary-400 to-primary-500 h-auto ">
        <div className="absolute  right-0 z-1">
          <img src="/assets/Figure.svg" className="w-full" alt="" />
        </div>
        <div className="pt-36 w-fit px-20 m-auto grid grid-cols-2 z-20">
          <div className="m-auto  w-[500px]">
            <Typography
              size="lg"
              style="mb-8"
              value="Development company"
            ></Typography>
            <Typography
              size="sm"
              value="Forward-thinking real estate developer, owner and investor with a reputation"
            ></Typography>
            <div className="flex space-x-5 mt-20">
              <Buttons
                style="w-fit h-[61px] w-[109px]"
                text="Services"
              ></Buttons>
              <Buttons
                style="h-[61px] w-[400px] text-primary-200"
                color={"bg-primary-400 w"}
                text="About the company"
              ></Buttons>
            </div>
          </div>
          <div className="z-20 pb-24">
            <Imagelist />
          </div>
        </div>
      </section>
      <section className="z-[10] text-center py-20">
        <Typography size="md" value="Innovative Execution"></Typography>
        <div className="flex max-w-5xl m-auto space-x-10 mt-32 pb-20 ">
          {[1, 2, 3].map((v, i) => {
            return (
              <div className="text-left" key={i}>
                <img src="/assets/Icon.png" className="shadow-2xl shadow-[#9bc2ff40]" />
                <Typography
                  size="md"
                  style="my-4"
                  value="Innovative Execution"
                ></Typography>
                <Typography
                  size="sm"
                  style="mt-4"
                  value="Forward-thinking real estate developer, owner and investor with a reputation"
                ></Typography>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-gradient-to-r mt-40 from-primary-400 py-16 px-20 to-primary-500">
        <div className="max-w-screen-xl m-auto border-t border-b pb-6  border-primary-200">
          <div className="max-w-2xl m-auto pt-6 flex space-x-7 justify-between  ">
            {campany.map((v, i) => {
              return <img src={v} key={i} />;
            })}
          </div>
        </div>
        <div className="m-auto max-w-4xl gap-6 grid grid-cols-2 py-20">
          <div className="m-auto">
            <img src="assets/Photo.png" className="m-auto"/>
          </div>
          <div>
            <Typography
              value="About us"
              style="text-xl text-primary-700"
              colored={true}
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
            <Buttons text="Explore" />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F7FF] px-20">
      <div className="py-36 w-fit m-auto grid grid-cols-2 z-20">
          <div className="m-auto  w-[500px]">
            <Typography
  
              value="Available Properties"
              style="text-xl text-primary-700"
              colored={true}
            ></Typography>
            <Typography
              size="md"
              style="my-5 text-4xl"
              value="Featured Listing"
            ></Typography>
            <Typography
              size="sm"
              style="mt-4 mb-10"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex."
            ></Typography>
            <Buttons text="Explore" />
          </div>
          <div className="z-20 pb-24">
            <Imagelist />
          </div>
        </div>
      </section>
      <section className="text-center  bg-gradient-to-r  from-primary-400 py-16 to-primary-500">
            <Typography
              value="Socials"
              colored={true}
              style="text-xl text-primary-700 mb-5"
            ></Typography>
             <Typography
              size="md"
              style="my"
              value="On Instagram"
            ></Typography>
            <div className="grid grid-cols-3 w-fit m-auto gap-6 mt-10" >
                {
                  gallaryList.map((v,i)=>{
                    return <img className="rounded object-fill" src={v} key={i} />;
                  })
                }
            </div>
      </section>
      <section className="px-20 bg-[#F4F7FF]">
        <div className="py-36 max-w-7xl m-auto grid grid-cols-2 z-20">
            <div>
                <Typography
              value="Contact"
              colored={true}
              style="text-[18px] text-primary-700"
              ></Typography>
             <Typography
              size="md"
              style="my mb-20"
              value="Get In Touch"
            ></Typography>
            {
              info.map((v,k)=>{
                return (
                  <div className="flex space-x-5 mb-4" key={k}>
                  <img src="/assets/icon12.png"  className="h-16"/>
                  <div className="m-auto">
                    <Typography size="sm" style="text-sm" value={v.type} />
                    <Typography size="sm" style="text-xl  font-bold w-[20rem]" value={v.value} />
                  </div>
                </div>
                )
              })
            }
            </div>
            <div>
              <div className="bg-gradient-to-r w-3/4 ml-auto flex flex-col space-y-6 from-primary-400 p-8 rounded-sm shadow-lg  to-primary-500">
              <div className="inline-flex w-full space-x-5">
              <TextField lable="Name" which="input" type="text"  />
              <TextField lable="Email" which="input" type="Email"  />
              </div>
              <TextField lable="Subject" which="input" type="Subject"  />
              <TextField lable="Message" which="textarea" type="text"  />
              <Buttons text="Submit" width="w-full" style="h-[54px] w-full w-full" />
              </div>
            </div>
        </div>
         
      </section>
    </main>
  );
}
