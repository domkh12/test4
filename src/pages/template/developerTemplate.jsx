import React from "react";
import NavBarComponent from "../../components/developercomponent/Navbar";
import HeroSection from "../../components/developercomponent/HeroSection";
import AboutMeSectionDev from "../../components/developercomponent/AboutMeSectionDev";
import MyResumeSection from "../../components/developercomponent/MyResumeSection";
import MySkillSection from "../../components/developercomponent/MySkillSection";
import MyProject from "../../components/developercomponent/MyProject";
import BlogSection from "../../components/developercomponent/BlogSection";
import ContactSection from "../../components/developercomponent/ContactSection";
import FooterSection from "../../components/developercomponent/FooterSection";
import { Outlet } from "react-router-dom";
const DeveloperTemplate = () => {
  return (
    <div className="w-full h-auto">
      <NavBarComponent />
      <HeroSection />
      <AboutMeSectionDev />
      <MyResumeSection />
      <MySkillSection />
      <MyProject />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default DeveloperTemplate;
