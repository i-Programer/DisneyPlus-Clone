import { ArrowForwardIosOutlined, Check } from "@material-ui/icons";
import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="login mx-auto my-auto overflow-x-hidden">
        <h1 className="text-center mb-5 text-1xl font-semibold">
          The Home of Global Movie and Series
        </h1>

        <div className="bg-sliderColor lg:mx-40 my-35 lg:px-40 md:mx-[5rem] md:px-[5rem] px-[2rem] pt-20 pb-10 rounded-md">
          <div className="mx-w-[70%] mx-auto">
            <ul className="list-disc flex flex-wrap text-left flex-col">
              <li className="mb-3">
                Global blockbusters from Disney, Marvel, Pixar, Star Wars and
                more
              </li>
              <li className="mb-3">Never-before-seen Disney+ Originals</li>
              <li className="mb-3">
                Visit FAQ page to find out Disney+ Hotstar special offers from
                various partners
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap flex-row justify-center gap-y-4 gap-x-3 mb-10 max-w-[100%] mx-1">
            <span className="flex flex-row md:text-3md text-[15px] md:font-semibold md:border-r-2 h-16 mt-auto items-center md:w-[32%]">
              <img src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/grid_widget/vector-1x.png" alt="Watch on the go" className="w-10 h-[1rem]"/>
              <span>&nbsp; Watch on the go</span>
            </span>
            <span className="flex flex-row md:text-3md text-[15px] md:font-semibold md:border-r-2 h-16 mt-auto items-center md:w-[32%]">
              <img src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/grid_widget/hd-1x.png" alt="Across Platforms" className="w-10 h-10"/>
              <span>&nbsp; Across Platforms</span>
            </span>
            <span className="flex flex-row md:text-3md text-[15px] md:font-semibold h-16 mt-auto items-center md:w-[32%]">
              <img src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/grid_widget/multiple-devices-1x.png" alt="Multiple Device" className="w-10 h-10"/>
              <span>&nbsp; Multiple Device</span>
            </span>
            <span className="flex flex-row md:text-3md text-[15px] md:font-semibold md:border-r-2 h-16 mt-auto items-center md:w-[32%]">
              <img src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/grid_widget/dub-1x.png" alt="Subs/Dubs in Bahasa Indoensia" className="w-10 h-[2rem]"/>
              <span>&nbsp; Subs/Dubs in Bahasa Indoensia</span>
            </span>
            <span className="flex flex-row md:text-3md text-[15px] md:font-semibold md:border-r-2 h-16 mt-auto items-center md:w-[32%]">
              <img src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/grid_widget/ads-free-1x.png" alt="Commercial Free" className="w-10 h-10"/>
              <span>&nbsp; Commercial Free</span>
            </span>
            <span className="flex flex-row md:text-3md text-[15px] md:font-semibold h-16 mt-auto items-center md:w-[32%]">
              <img src="https://secure-media.hotstar.com/static/subscription/logo/psp-lite/grid_widget/dolby-1x.png" alt="Dolby Audio" className="w-10 h-10"/>
              <span>&nbsp; Dolby Audio</span>
            </span>
          </div>

          <div className="grid grid-cols-2 mb-3 gap-x-7">
            <div className="flex h-32 items-center justify-start relative">
              <button className="packageButton flex flex-col focus:bg-blue-700/70 border-[1px] border-slate-400/80 rounded-md p-3 w-[95%]">
                <img src="/img/logo/disney+Hostar.png" alt="logo" className="logoImg textRight" width="50rem"/>
                <span className="font-semibold md:text-3md text-[10px]">Rp39.0000/Month</span>
                <span className="checkButton opacity-0 absolute bg-white rounded-full p-2 text-green-600 top-0 right-0">
                  <Check />
                </span>
              </button>
            </div>
            <div className="flex h-32 items-center justify-start relative">
              <button className="packageButton flex flex-col focus:bg-blue-700/70 border-[1px] border-slate-400/80 rounded-md p-3 w-[95%]">
                <img src="/img/logo/disney+Hostar.png" alt="logo" className="logoImg textRight" width="50rem"/>
                <span className="font-semibold md:text-3md text-[10px]">Rp199.0000/Year</span>
                <span className="checkButton opacity-0 absolute bg-white rounded-full p-2 text-green-600 top-0 right-0">
                  <Check />
                </span>
              </button>
            </div>
          </div>

          <button className="bg-blue-700 rounded-md p-3 text-2xl font-semibold w-full">
            Continue <ArrowForwardIosOutlined/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
