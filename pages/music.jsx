import Image from 'next/legacy/image';
import React from 'react';
import musicImage from '../public/assets/projects/music_service.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const music = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 '
          objectFit='cover'
          layout='fill'
          src={musicImage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2>Music Service</h2>
          <h3> HTML / CSS / JavaScript </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-4'>Overview</h2>
          <p>This app was create using JS and is hosted on Replit.</p>
          <p className='py-2'>
            Project requirements was to build app with similar functionality to
            Spotify SPA website. Songs are generated with API(json-server).
            Discover sub-page generates random song. User can also use search
            field.
          </p>
          <Link href='https://Musicservice.kaz4486.repl.co' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href='https://github.com/kaz4486/Music_service' target='_blank'>
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
                <RiRadioButtonFill className='pr-1' /> Javascript
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

export default music;
