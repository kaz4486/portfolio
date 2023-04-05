/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shoppingImage from '../public/assets/projects/shopping.png';
import drumsShopImage from '../public/assets/projects/drums_shop.png';
import musicServiceImage from '../public/assets/projects/music_service.png';
import pizzeriaImage from '../public/assets/projects/pizzeria.png';
import furnitureImg from '../public/assets/projects/furniture.png';
import bulletinImg from '../public/assets/projects/bulletin.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#D06D12]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Drums Shop'
            backgroundImg={drumsShopImage}
            projectUrl='/drums'
            technologies='React JS / TypeORM / NestJS / Bootstrap '
          />
          <ProjectItem
            title='Advanced Shopping List'
            backgroundImg={shoppingImage}
            projectUrl='/shopping'
            technologies='React JS / React-Hook-Form / Typescript / Bootstrap / MongoDb /
            Express'
          />
          <ProjectItem
            title='Furniture Shop'
            backgroundImg={furnitureImg}
            projectUrl='/furniture'
            technologies='HTML / CSS / React JS / Redux '
          />
          <ProjectItem
            title='Music Service'
            backgroundImg={musicServiceImage}
            projectUrl='/music'
            technologies='HTML / CSS / JavaScript '
          />
          <ProjectItem
            title='Pizzeria'
            backgroundImg={pizzeriaImage}
            projectUrl='/pizzeria'
            technologies='HTML / CSS / SCSS / Javascript / Handlebars'
          />
          <ProjectItem
            title='Bulletin Board'
            backgroundImg={bulletinImg}
            projectUrl='/bulletinBoard'
            technologies='React JS / Redux / Express / MongoDB / Bootstrap '
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
