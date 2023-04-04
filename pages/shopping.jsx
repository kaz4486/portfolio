import Image from 'next/legacy/image';
import React from 'react';
import shoppingImage from '../public/assets/projects/shopping.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const shopping = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 '
          objectFit='cover'
          layout='fill'
          src={shoppingImage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2>Shopping list</h2>
          <h3>
            React JS / React-Hook-Form / Typescript / Bootstrap / MongoDb /
            Express
          </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-4'>Overview</h2>
          <p className='py-2'>
            This app was built using React JS, Redux and is hosted on Replit. I
            used Bootstrap and custom styled components. Backend side was
            created with Express and MongoDB.
          </p>
          <p className='py-2'>
            {' '}
            Users are able to create shopping list by adding items using both
            unit systems, freely set order by drag and drog feature and printing
            list. Moreover, user authentication is available so everyone can
            signup & signin to personal account, save their lists, update and
            remove them.
          </p>
          <Link href='https://shop-list-app.kaz4486.repl.co' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link
            href='https://github.com/kaz4486/advanced-shop-lists-app'
            target='_blank'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React-Hook-Form
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
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

export default shopping;
