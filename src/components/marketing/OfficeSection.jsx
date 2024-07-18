import React from 'react'
import OfficeComponent from './OfficeComponent'
import FooterComponent from './FooterComponent'

function OfficeSection() {
  return (
    <div className='bg-gradient-to-r from-linearx via-lineary to-linearz'>
        <br />
        <div className='mx-60 mt-32'>
      <small className="text-md">
        <span className="text-yellow-300">//</span>
            Our Offices
        </small>
        <div className='w-[400px]'>
        <h2 className='text-3xl'>
        Come and visit us all around the world
        </h2>
        </div>
        </div>
        <div className='mt-16 mx-32 flex justify-center items-center'>
            <div className='flex flex-wrap flex-row gap-5'>
      <OfficeComponent
      image="./public/marketing/cambodiaflag.png"
      title="Phnom Penh, Cambodia"
      desc="st.1, phsar tmey, doun penh, phnom penh"
      phone="(855) 979 878 787"
      email="Contact@marketing.com"
      />
      <OfficeComponent
      image="./public/marketing/cambodiaflag.png"
      title="Phnom Penh, Cambodia"
      desc="st.1, phsar tmey, doun penh, phnom penh"
      phone="(855) 979 878 787"
      email="Contact@marketing.com"
      />
      <OfficeComponent
      image="./public/marketing/cambodiaflag.png"
      title="Phnom Penh, Cambodia"
      desc="st.1, phsar tmey, doun penh, phnom penh"
      phone="(855) 979 878 787"
      email="Contact@marketing.com"
      />
      </div>
      </div>
      <br />
      <div className='mt-32'>
      <FooterComponent/></div>
    </div>
  )
}

export default OfficeSection
