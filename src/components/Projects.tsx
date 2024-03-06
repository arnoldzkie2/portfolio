import { projectTexts } from '@/lib/texts';
import Image from 'next/image';
import React from 'react'
import { Label } from './ui/label';
import { Button } from './ui/button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
  ProjectsRef: React.MutableRefObject<null>;
}

const Projects = ({ ProjectsRef }: Props) => {
  return (
    <div className='padding flex items-center flex-col gap-12 overflow-hidden lg:gap-20 xl:gap-28 py-20' >
      <h1 className='text-4xl font-black border-b pb-2' id='Projects' ref={ProjectsRef}>{projectTexts.h1}</h1>
      <div className='flex w-full flex-col gap-40'>
        {projectTexts.projects.map((project, index) => (
          <div className='flex justify-center' key={index}>
            <div className='w-full md:w-2/3 flex flex-col items-center text-center gap-8'>
              <h1 className='text-3xl border-b pb-2' >{project.name}</h1>
              <Image src={project.image} alt={project.name} width={1000} height={2000}
                className='h-auto w-full shadow-lg rounded-2xl hover:shadow-2xl' />
              <p className='text-muted-foreground'>{project.description}</p>
              <div className='flex w-full flex-col gap-5 border-t xl:flex-row xl:justify-between pt-3'>
                <div className='flex items-center gap-4'>
                  <Label className='font-black sm:text-lg'>Stack:</Label>
                  {project.used.map((obj, i) => (
                    <Image width={35} height={35} src={obj} alt={obj} key={obj} className={`${i === 0 && 'bg-white rounded-full'}`} />
                  ))
                  }
                </div>
                <div className='flex items-center gap-4'>
                  <Label className='font-black sm:text-lg'>Links:</Label>
                  <Link target='_blank' href={project.links.github}>
                    <Button className='space-x-3' variant={'outline'}>
                      <p>Source</p>
                      <FontAwesomeIcon icon={faGithub} width={16} height={16} />
                    </Button>
                  </Link>
                  <Link target='_blank' href={project.links.web}>
                    <Button className='space-x-3'>
                      <p>Demo</p>
                      <FontAwesomeIcon icon={faLink} width={16} height={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects