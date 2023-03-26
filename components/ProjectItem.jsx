import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, projectUrl, technologies }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from  from-[#7A595B] to-[#3D2D2E]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt='shopping-list-app'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{technologies}</p>
        <Link href={projectUrl}>
          <p className='text-center py-4 rounded-lg bg-white font-bold text-lg cursor-pointer '>
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
