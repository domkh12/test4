import React from "react";
import CardSkill from "./CardSkill";

const MySkillSection = () => {
  return (
    <section
      className="py-20 font-sans section flex flex-col justify-center items-center w-full px-4 sm:px-10 bg-white dark:bg-gray-900"
      name="about"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-lg dark:text-gray-100 text-center">
          My Level Of Knowledge In Some Tools
        </p>
        <h2 className="text-5xl font-bold text-center">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Skills</span>
        </h2>
        <div className="w-32 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10 w-full lg:px-52 mt-10">
        <CardSkill img="src/assets/developerimage/pythonImg.png" title="Python"/>
        <CardSkill img="src/assets/developerimage/javascriptImg.png" title="Javascript"/>
        <CardSkill img="src/assets/developerimage/javaImg.png" title="Java"/>
        <CardSkill img="src/assets/developerimage/cSharp.png" title="C#"/>
        <CardSkill img="src/assets/developerimage/swift.png" title="Swift"/>
        <CardSkill img="src/assets/developerimage/typeScript.png" title="TypeScript"/>
        <CardSkill img="src/assets/developerimage/kotlin.png" title="Kotlin"/>
        <CardSkill img="src/assets/developerimage/rust.png" title="Rust"/>
        <CardSkill img="src/assets/developerimage/go.png" title="Go"/>
        <CardSkill img="src/assets/developerimage/ruby.png" title="Ruby"/>
      </div>
    </section>
  );
};

export default MySkillSection;
