import React from 'react'
import TopBackgroundImageComponent from './TopBackgroundImageComponent'
import ContactCardBoxs from './ContactCardBoxs'
import { GoMail } from "react-icons/go";
import { LiaHandshakeSolid } from "react-icons/lia";
import { Label, TextInput, Textarea } from "flowbite-react";
import PrimaryButton from './ButtonPrimary';
import FooterComponent from './FooterComponent';

function ContactTopSection() {
  return (
    <div>
      <TopBackgroundImageComponent text="Contact" moreText=" Us"/>
      <div className='mt-32 flex flex-col gap-5'>
        <div className='bg-blue-800 w-16 h-16 rounded-[50%] flex justify-center items-center mx-auto'>
            <LiaHandshakeSolid className='text-3xl text-white'/>
            </div>
            <div className='mx-60 flex flex-col items-center'>
      <small className="text-md text-marketing-main-color"><span className="text-orange-300">// </span>
        01 . CONTACT US
      </small>
      <h2 className='text-2xl text-marketing-main-color text-center'>
      Let’s build something awesome together
        </h2>
    </div>
      </div>
      <div className='flex justify-center'>
        <div className='mx-60 flex flex-row justify-between mt-16 gap-5'>
      <ContactCardBoxs
      title="Contact"
      type="Email"
      logo={<GoMail />}
      desc="nextlevel@marketing@gmail.com"
      />
      <ContactCardBoxs
      title="Contact"
      type="Email"
      logo={<GoMail />}
      desc="nextlevel@marketing@gmail.com"
      />
      <ContactCardBoxs
      title="Contact"
      type="Email"
      logo={<GoMail />}
      desc="nextlevel@marketing@gmail.com"
      />
      </div>
      </div>
      <div className='mt-32'>
        <form action="#">
            <div className='mx-60 flex flex-col gap-10 bg-gradient-to-r from-linearx via-lineary to-linearz p-10 rounded-xl'>
            <div className='flex flex-row gap-5'>
            <div className='flex flex-col gap-10'>
        <div className='w-[500px]'>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Full Name" />
        </div>
        <TextInput id="email1" type="email" placeholder="Jonh Devid" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Company" />
        </div>
        <TextInput id="email1" type="email" placeholder="Yourcompany Name Here" required />
      </div>
      </div>
      <div className='w-[500px] flex flex-col gap-10'>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="Example@youremail.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your Subject" />
        </div>
        <TextInput id="email1" type="email" placeholder="How We Can Help" required />
      </div>
      </div>
      </div>
      <div>
      <div className="max-w-[1000px]">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
      </div>
      <div className='flex justify-center'>
        <button  type="submit">
        <PrimaryButton text="Submit"/>
        </button>
      </div>
      </div>
        </form>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default ContactTopSection
