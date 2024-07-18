import React from "react";
import CardProject from "./CardProject";

function MyProject() {
    const projects = [
        {
          img: "src/assets/developerimage/project1.png",
          title: "Web Development",
          desc: "Developed a responsive and SEO-friendly website using HTML, CSS, and JavaScript. Integrated various APIs to enhance functionality and user experience."
        },
        {
          img: "src/assets/developerimage/project1.png",
          title: "Mobile App",
          desc: "Created a mobile application using React Native, providing seamless performance and intuitive user interface."
        },
        {
          img: "src/assets/developerimage/project1.png",
          title: "E-commerce Site",
          desc: "Built an e-commerce site with a secure payment gateway and real-time order tracking using MERN stack."
        },
        {
          img: "src/assets/developerimage/project1.png",
          title: "Social Media Platform",
          desc: "Developed a social media platform with real-time messaging and user interaction features using Node.js and Socket.io."
        },
        {
          img: "src/assets/developerimage/project1.png",
          title: "Data Analytics Dashboard",
          desc: "Created a data analytics dashboard with interactive charts and graphs using D3.js and Python."
        },
        {
          img: "src/assets/developerimage/project1.png",
          title: "Portfolio Website",
          desc: "Designed a personal portfolio website showcasing various projects and skills using React and Tailwind CSS."
        }
      ];
  return (
    <section
      className="py-20 font-sans section flex flex-col justify-center items-center sm:gap-10 bg-white dark:bg-gray-900"
      name="project"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-lg dark:text-gray-100">
          Showcasing Some Of My Best Work
        </p>
        <h2 className="text-5xl font-bold">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Project</span>
        </h2>
        <div className="w-32 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 xl:px-20 w-[80%]">
      {projects.map((project, index) => (
        <CardProject 
          key={index} 
          img={project.img} 
          title={project.title} 
          desc={project.desc} 
        />
      ))}
    </div>
    </section>
  );
}

export default MyProject;
