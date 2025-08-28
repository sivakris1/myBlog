import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 '>
      <div className=' flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
      <div>
        <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
        <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore totam quasi! Id natus ipsam dicta quod nesciunt, ex facilis a laboriosam dolore soluta iure cupiditate unde totam alias odit quasi commodi error illo.</p>

      </div>
        
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {footer_data.map((section,index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-800 md:mb-5 mb-2'>{section.title}</h3>
              <ul>
                {section.links.map((link,i)=>(
                  <li>
                    <a href="" className=' hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <p className=' text-center py-4 text-sm md:text-base text-gray-500'>Copyright 2025 @ Quickblog All Right Reserved </p>
    </div>
  )
}

export default Footer
