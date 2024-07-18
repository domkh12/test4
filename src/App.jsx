import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import ScrollToTop from "react-scroll-to-top";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo/SEO";
function App() {
  return (    
    <HelmetProvider>
        <SEO
        title="Showcase - Your Portfolio Builder"
        description="Build and customize your portfolio with ease using our portfolio builder."
        keywords="portfolio, builder, templates, showcase"
        url="https://84cc-175-100-10-248.ngrok-free.app/" // Replace with your actual URL
        image="https://84cc-175-100-10-248.ngrok-free.app/homepageImg/developerImg.png" // Replace with your actual image URL
      />
      <ScrollToTop
        smooth
        color="#4C3DE3"        
        className="flex justify-center items-center rounded-md bg-primary"
      />
      <NavBarComponent />
      <HeroSection />
      <TemplatesSection />
      <FeatureSection />
      <OurTeamSection />
      <ContactSection />
      <FooterSection />
      </HelmetProvider>    
  );
}

export default App;
