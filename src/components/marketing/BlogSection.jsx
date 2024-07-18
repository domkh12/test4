import React from 'react'
import AticalComponent from './AticalComponent'
import SearchBoxComponent from './SearchBoxComponent';
import PostSection from './PostSection';
const NormalAtical = "flex flex-row justify-center gap-10 bg-atical-orange mx-60 rounded-xl p-10";

function BlogSection() {
  return (
    <div className='mt-32'>
      <div className='mx-60 flex flex-col'>
      <small className="text-md text-marketing-main-color"><span className="text-yellow-300">// </span>
        0 . 1 ACTICALS
      </small>
      <h2 className='text-2xl w-[350px] text-marketing-main-color text-start'>Browse our content on growth marketing</h2>
    </div>
    <div className='mt-16'>
      <AticalComponent option="Marketing" date="SEPTEMBER 1, 2022" 
      aticalType={NormalAtical}
      image="./public/marketing/aticalimg.webp" 
      title="How to increase your Twitter reach by over 200% with this simple trick" 
      desc="Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. "/>
    </div>
    <div className='bg-marketing-main-color flex justify-center items-center p-32 mt-32'>
        <div>
            <h2 className='text-3xl text-white'>
            Subscribe to our 
            <span className='text-red-500'> newsletter</span>
            </h2>
            <div className='mx-auto w-[300px]'>
            <SearchBoxComponent/>
            </div>
        </div>
    </div>
    <div>
        <PostSection/>
    </div>
    </div>
  )
}

export default BlogSection
