import React from "react";

const FooterBusines = () => {
  return (
    <div className="flex gap-5 px-12 py-7 bg-[#454545] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-5 justify-between self-start text-base font-medium text-center text-white whitespace-nowrap">
          <div className="justify-center px-0.5 pt-1 pb-2.5">About</div>
          <div className="justify-center py-1.5">Project</div>
          <div className="justify-center px-2 py-1.5">Blog</div>
          <div className="justify-center pt-1 pb-2.5">Contact</div>
        </div>
        <div className="flex gap-5 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8d68097e943b330ff34ea39fc1d3dc1030d4f2baeb321b43189595e9f8cd1de?apiKey=46346ef9d373469da9420a0f5077d52a&"
            className="shrink-0 aspect-[0.53] fill-white w-[15px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48163ecd18490fee716af6e1d6088fa7a1ca39ea063e8ce923929f0a6fb5b79b?apiKey=46346ef9d373469da9420a0f5077d52a&"
            className="shrink-0 aspect-[1.03] fill-white w-[29px]"
          />
        </div>
      </div>
      <div className="flex-auto my-auto text-base font-bold text-orange-400">
        <span className="font-medium text-white">Develop by</span>{" "}
        <span className="font-medium text-orange-400">@Showcase</span>
      </div>
    </div>
  );
};

export default FooterBusines;
