"use client"
import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFlagUsa } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <u><h2 className="text-white text-2xl font-semibold mb-4">About Us</h2></u>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <u><h2 className="text-white text-2xl font-semibold mb-4">Quick Links</h2></u>
          <ul className='space-y-1 font-bold'>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className=''>
          <u><h2 className="text-white text-2xl font-semibold mb-4">Follow Us</h2></u>
          <div className="flex flex-col space-x-4 font-bold gap-2">
            <ul className='space-y-1'>
                <li>
                    <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                    >
                    <FaSquareFacebook className='text-blue-800 hover:text-blue-600 text-2xl'/>Facebook
                    </a>
                </li>
                
                <li>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <FaSquareInstagram className='text-pink-950 hover:text-pink-700 text-2xl'/> Instagram
                    </a>
                </li>

                <li>
                    <a href="#" className='hover:text-white transition-colors duration-300'>
                        <RiTwitterXFill className='text-gray-100 text-2xl hover:text-gray-300'/> Twitter
                    </a>
                </li>
            </ul>
          </div>
        </div>
        <div className='space-y-4'>
          <u><h2 className="text-white text-2xl font-semibold mb-4">Contact Us</h2></u>
          <p className='font-bold'><FaFlagUsa className='text-2xl text-blue-600 hover:text-blue-400'/>New York, America</p>
          <u><a href="raisusman11@gmail.com"><p className='font-bold text-md'><MdEmail className='text-2xl text-red-800 hover:text-red-600'/>Email: info@musicschool.com</p></a></u>
          <u><p className='font-bold'><FaPhoneSquareAlt className='text-2xl text-gray-500 hover:text-gray-400'/>Phone: (123) 456-7890</p></u>
        </div>
        </div>
        <p className="text-center font-bold text-md pt-8">© 2024 Music School. All rights reserved.</p>
    </footer>
    )
}

export default Footer