import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center px-4 py-16 md:px-0">
      <div className="w-full max-w-[1133px]">
        <div className="text-base font-medium text-black md:mt-32 md:text-center">
          ABOUT OUR COMPANY
        </div>
        <h2 className="mt-4 text-4xl font-bold text-black md:text-center">
          Choose Insurance Service Company
        </h2>
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-5">
          <div className="md:w-[65%]">
            <div className="space-y-4 text-base text-zinc-700">
              <p>
                Lorem ipsum dolor sit amet, ad his ignota verterem recusabo.
                Meis pericula eum ad, at ullum primis mediocrem mei. Ius ei
                debet persius, id eos sanctus persecuti.
              </p>
              <p>
                Lorem ipsum dolor sit amet, ad his ignota verterem recusabo.
                Meis pericula eum ad, at ullum primis mediocrem mei. Ius ei
                debet persius, id eos sanctus persecuti.
              </p>
              <div className="flex items-start gap-5 py-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd3d3872c951a2993a1a98fab48eaf718a400098b0af08b30211b4bee3b9b312?apiKey=46346ef9d373469da9420a0f5077d52a&"
                  alt="Insurance Icon 1"
                  className="w-12 h-auto"
                />
                <div>
                  Lorem ipsum dolor sit amet, ad his ignota verterem recusabo.
                  Meis pericula eum ad
                </div>
              </div>
              <hr className="border-zinc-300" />
              <div className="flex items-start gap-5 py-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab53b79afc44624cbc00fc9caa441056ee15872b3d3e49d9181b85aee4130106?apiKey=46346ef9d373469da9420a0f5077d52a&"
                  alt="Insurance Icon 2"
                  className="w-12 h-auto"
                />
                <div>
                  Lorem ipsum dolor sit amet, ad his ignota verterem recusabo.
                  Meis pericula eum ad
                </div>
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2.5 px-6 py-3 mt-7 font-semibold text-white bg-orange-400 rounded-md">
                  Contact us now
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a51237151305ac9dead9598bca0863c71485ed1338b1dd87ba1d63cd2fb060d?apiKey=46346ef9d373469da9420a0f5077d52a&"
                    alt="Arrow Icon"
                    className="w-3.5 h-auto"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[35%]">
            <img
              loading="lazy"
              src=""
              alt="Company Image"
              className="w-full rounded-md h-[500px] bg-purple-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
