import React from 'react'
import TopBackgroundImageComponent from './TopBackgroundImageComponent'
import {NormalButton,  ImageButton } from './ButtonPrimary'
const BgNone = "text-marketing-main-color bg-tranparent border-marketing-main-color hover:bg-button-hover hover:text-white hover:border-button-hover";

function AboutTopSection() {
  return (
    <div>
        <div>
      <TopBackgroundImageComponent text="About" moreText=" Us"/>
      </div>
      <div className='bg-marketing-main-color'>
      <div className='flex flex-row justify-center text-white mx-60'>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>325</h2>
            <span className='text-blue-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>CLIENTS</p>
            <p>WORLDWIDE</p>
        </section>
        </div>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>975</h2>
            <span className='text-red-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>PROJECTS</p>
            <p>COMPLETED</p>
        </section>
        </div>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>70</h2>
            <span className='text-yellow-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>TEAMS</p>
            <p>MEMBERS</p>
        </section>
        </div>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>83m</h2>
            <span className='text-green-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>REVENUE</p>
            <p>GENDERATED</p>
        </section>
        </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-32'>
        <div>
            <img src="./public/marketing/company.png" alt="phone image" className='w-[550px] h-[500px]'/>
        </div>
        <div className='flex flex-col gap-5'>
      <small className="text-md">
        <span className="text-yellow-300">//</span>
            AGENCY
        </small>
        <div className='w-[400px]'>
        <h2 className='text-3xl'>
        The #1 digital marketing services company
        </h2>
        </div>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div className='flex flex-row gap-5 '>
            <ImageButton image="./public/marketing/buttonImage.png" text="Developement Scale"/>
            <ImageButton image="./public/marketing/buttonImage.png" text="Developement Scale"/>
        </div>
        <div className='w-[500px]'>
        <small>
            Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam Aliquam vestibulum libero morbi blandit cursus risus. 
        Laoreet non curabitur gravida arcu ac tortor semper vivera nam libero justo laoreet mollis aliquam ut porttitor leo a diam.
        </small>
        </div>
        <div>
            <NormalButton buttonType={BgNone} text='Get In Touch'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutTopSection

