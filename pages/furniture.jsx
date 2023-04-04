/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image';
import React from 'react';
import furnitureImg from '../public/assets/projects/furniture.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const furniture = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 '
          objectFit='cover'
          layout='fill'
          src={furnitureImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2>Furniture 'Bazar' Shop</h2>
          <h3> HTML / CSS / React JS / Redux </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-4'>Overview</h2>
          <p className='py-2'>
            E-commerce drums shop was built using React JS, Redux and is hosted
            on Netlify.
          </p>
          <p className='py-2'>
            It was a group project lead by a mentor / project manager to mimic
            commercial programming environment in Kanban methodology.
          </p>
          <Link href='https://kk-furniture-shop.netlify.app/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href='https://github.com/kaz4486/wdp-2208-01' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default furniture;
