import React from 'react'
import NavbarComponent from '../../components/business/NavbarComponent'
import HeroSectionBusiness from '../../components/business/HeroSectionBusiness'
import ServiceSectionBusiness from '../../components/business/ServiceSectionBusiness'
import AboutSection from '../../components/business/AboutSection'
import IndustriesSection from '../../components/business/IndustriesSection'
import RecentProjectSection from '../../components/business/RecentProjectSection'
import BlogSection from '../../components/business/BlogSection'
import ContactSection from '../../components/business/ContactSection'
import FooterBusines from '../../components/business/FooterBusines'

const BusinessTemplate = () => {
  return (
    <div>
      <NavbarComponent/>
      <HeroSectionBusiness/>
      <ServiceSectionBusiness/>
      <AboutSection/>
      <IndustriesSection/>
      <RecentProjectSection/>
      <BlogSection/>
      <ContactSection/>
      <FooterBusines/>
    </div>
  )
}

export default BusinessTemplate
