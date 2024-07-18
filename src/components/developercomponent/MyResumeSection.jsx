import React from "react";
import CartResume from "./CartResume";

function MyResumeSection() {
  const cardEducation = [
    {
      title: "Data Analyst",
      yearExp: "Company: Tech Solutions (2021-2023)",
      desc: "Analyzed data with SQL and Python. Created reports with Tableau. Helped the marketing team by automating data tasks.",
    },
    {
      title: "Product Manager",
      yearExp: "Company: InnovateX (2019-2021)",
      desc: "Led teams to launch new products. Researched market trends and set product priorities based on customer feedback.",
    },
    {
      title: "UI/UX Designer",
      yearExp: "Company: Creative Solutions (2017-2019)",
      desc: "Designed web and mobile apps using Sketch and Adobe XD. Conducted user testing and worked with developers for consistent designs.",
    },
  ];

  const cardExp = [
    {
      title: "Bachelor of Science in Physics",
      yearExp: "University: University of Pennsylvania (1992-1995)",
      desc: "Studied advanced physics and materials science. Engaged in research projects and developed a strong foundation in theoretical and applied physics.",
    },
    {
      title: "Bachelor of Science in Economics",
      yearExp:
        "University: University of Pennsylvania, Wharton School (1992-1995)",
      desc: "Focused on economics, finance, and business strategy. Completed coursework in microeconomics, macroeconomics, and international trade.",
    },
    {
      title: "Ph.D. in Applied Physics (not completed)",
      yearExp: "University: Stanford University (1995)",
      desc: "Briefly enrolled in a Ph.D. program in applied physics but left after two days to pursue entrepreneurial ventures.",
    },
  ];

  return (
    <section
      className="py-10 xl:py-20 font-sans section flex flex-col gap-10 bg-[#F7F7F7] dark:bg-gray-800"
      name="about"
    >
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <p className="text-lg dark:text-gray-100">Check Out My Resume</p>
        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Resume</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-20 px-4 lg:px-20">
        {/* Education */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold dark:text-gray-100 text-center">
            Education
          </h2>
          {cardEducation.map((edu) => (
            <CartResume
              key={edu.title} // Important for performance optimization
              title={edu.title}
              yearExp={edu.yearExp}
              desc={edu.desc}
            />
          ))}
        </div>
        {/* Experience */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold dark:text-gray-100 text-center">
            Experience
          </h2>
          {cardExp.map((exp) => (
            <CartResume
              key={exp.title} // Important for performance optimization
              title={exp.title}
              yearExp={exp.yearExp}
              desc={exp.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyResumeSection;
