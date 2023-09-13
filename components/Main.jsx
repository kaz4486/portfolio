/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from '../styles/differentStyles.module.scss';
import Image from 'next/legacy/image';
import jaImage from '../public/assets/ja.jpg';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='w-[50%] xl:w-[50%] h-auto m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center  hover:scale-105 ease-in duration-300 my-10 p-2'>
            <Image
              objectFit='cover'
              src={jaImage}
              alt='autor'
              className='rounded-xl p-2'
            />
          </div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 '>
            Hi, I'm <span className='text-[#D06D12]'> Kamil</span>
          </h1>
          <h1 className='py-4'>A Front-End Web Developer</h1>
          <div className='py-4 max-w-[70%] m-auto'>
            <p className={styles.different}>Creating websites is what I do.</p>
          </div>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
        </div>
      </div>
    </div>
  );
};

export default Main;
