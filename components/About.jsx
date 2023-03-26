/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 px-2 font-semibold'>
          <p className='uppercase text-xl tracking-widest text-[#D06D12] '>
            About
          </p>
          <h2 className='py-4'>Who I am</h2>

          <p className='py-2 '>
            I'm a front-end web developer located in Poland. Well-organized and
            responsible person with high attention to details. I am interested
            in working on ambitious projects with positive people. Currently
            searching for a job.
          </p>
          <p className='py-2'>
            I feel pretty confident with my knowledge in HTML/CSS/JS as well as
            React, Redux and MongoDB. I can build and work with REST APIs,
            design fully responsive websites, using semantic HTML and best
            practices for optimisation and accessibility.
          </p>
          <p className='py-2'>
            I play and teach drums, write lyrics. Together with my band I give
            concerts all over Poland. I love hiking, cycling trips and sitting
            by the fire.
          </p>
          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer text-[#D06D12]'>
              Check out my latest projects
            </p>
          </Link>
        </div>
        <div className='w-[80%] xl:w-full h-auto m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl p-2'
            src='https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='computer in the forest'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
