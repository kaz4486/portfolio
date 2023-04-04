/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#D06D12]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-700 rounded-xl p-4'>
            <div className='p-2 lg:p-4 h-full'>
              <div>
                <img
                  src='https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  className='rounded-xl hover:scale-105 ease-in duration-300 '
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Kamil Kaźmierczak</h2>
                <p className='py-2'>Front-End Web Developer</p>
                <p className='py-2'>
                  I am available for full-time and part-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-around py-4'>
                  <Link
                    href='https://linkedin.com/in/kamil-kaźmierczak'
                    target='_blank'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href='https://github.com/kaz4486' target='_blank'>
                    <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href='mailto:kamilkazmierczak44@gmail.com
'
                    target='_blank'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
                <div className='flex justify-start my-3'>
                  <p className='mr-2 font-bold '>Call:</p>
                  <p>+48 509 581 050</p>
                </div>
                <div className='flex justify-start'>
                  <p className='mr-2 font-bold '>Email:</p>
                  <p>kamilkazmierczak44@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-700 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                method='POST'
                action='https://getform.io/f/afe7a42f-f0e9-442a-b06f-5ed48e3f30ce'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>

                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-black-500'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone number
                    </label>

                    <input
                      type='text'
                      name='phone'
                      className='border-2 rounded-lg p-3 flex border-black-500'
                    />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    name='email'
                    className='border-2 rounded-lg p-3 flex border-black-500'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    type='text'
                    name='subject'
                    className='border-2 rounded-lg p-3 flex border-black-500'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 shadow-gray-400'
                    rows='10'
                    name='message'
                  />
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#D06D12]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
