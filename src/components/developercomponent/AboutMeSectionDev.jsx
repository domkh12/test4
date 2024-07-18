import React from "react";

function AboutMeSectionDev() {
  return (
    <section
      className="py-20 font-sans section flex flex-col sm:gap-10 bg-[#F7F7F7] dark:bg-gray-800"
      name="about"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-lg dark:text-gray-100">My Intro</p>
        <h2 className="text-5xl font-bold">
          <span className="dark:text-gray-100">About</span>{" "}
          <span className="text-primary-developer-template">Me</span>
        </h2>

        <div className="w-32 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex sm:justify-center lg:justify-center lg:items-center lg:gap-10 2xl:gap-10 sm:flex-col lg:flex-row lg:px-10 sm:items-center">
        <div className="font-sans">
          <div className="flex justify-center items-center sm:w-auto lg:w-auto h-auto">
            <img
              src="src\assets\developerimage\aboutImg.png"
              className="sm:w-[500px] z-10 rounded-lg lg:h-[450px] object-cover lg:w-[700px]"
              alt="photo"
            />                      
          </div>          
        </div>
        <div className="lg:mt-10 sm:flex sm:justify-center sm:items-center lg:items-start sm:mt-20 sm:flex-col lg:w-auto sm:gap-4">
          <p className="sm:text-center sm:font-semibold sm:text-xl dark:text-gray-100">
            PERSONAL INFOS:
          </p>
          <div className="flex justify-start items-start gap-10">
            <div className="sm:flex sm:flex-col sm:gap-5">
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">First Name</label>
                <p className="dark:text-gray-100">Elon</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Last Name</label>
                <p className="dark:text-gray-100">Musk</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">BirthDate</label>
                <p className="dark:text-gray-100">24 April 1993</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Nationality</label>
                <p className="dark:text-gray-100">Khmer</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Experience</label>
                <p className="dark:text-gray-100">7 year</p>
              </div>
            </div>
            <div className="sm:flex sm:flex-col sm:gap-5">
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Address</label>
                <p className="dark:text-gray-100">Phnom Penh</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Freelance</label>
                <p className="dark:text-gray-100">Available</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Language</label>
                <p className="dark:text-gray-100">Khmer,English</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Phone</label>
                <p className="dark:text-gray-100">+855 977 34 54 71</p>
              </div>
              <div className="flex justify-start sm:flex-col sm:gap-1 lg:flex-row lg:gap-5 items-center ">
                <label className="text-gray-500">Email</label>
                <p className="dark:text-gray-100">example@gmail.com</p>
              </div>
            </div>
          </div>
          <button className=" bg-primary-developer-template px-14 py-4 w-52 rounded-lg sm:mt-5 text-white text-lg">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSectionDev;
