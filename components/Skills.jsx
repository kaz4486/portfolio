import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#D06D12]'>
          Skills
        </p>
        <h2 className='py-4'>Technologies I Use</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/html.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/css.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/javascript.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl  shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/react.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/redux.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl  shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/github1.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/typescript.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/express.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/mongo.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/NestJS.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NestJs</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/tailwind.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/assets/skills/bootstrap.png'
                  width='64'
                  height='64'
                  alt=''
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
