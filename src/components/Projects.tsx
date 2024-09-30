import { projectTexts } from '@/lib/texts';
import Image from 'next/image';
import React from 'react'
import { Label } from './ui/label';
import { Button } from './ui/button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Separator } from './ui/separator';

interface Props {
  ProjectsRef: React.MutableRefObject<null>;
}

const Projects = ({ ProjectsRef }: Props) => {
  return (
    <div className='padding flex items-center flex-col gap-12 overflow-hidden lg:gap-20 xl:gap-28 pb-28 lg:pb-44 bg-primary '>
      <div className='bg-card h-20 md:h-52 relative w-screen'>
        <div className='w-full h-20 md:h-52 absolute bg-primary bottom-0 rounded-t-[100%]'>
        </div>
      </div>
      <div className='space-y-2'>
        <h1 className='text-3xl lg:text-4xl text-secondary font-black' id='Projects' ref={ProjectsRef}>{projectTexts.h1}</h1>
        <Separator className='w-2/3 h-[3px] rounded-full' />
      </div>
      <div className='flex w-full flex-col gap-32 lg:gap-40'>
        {projectTexts.projects.map((project, index) => (
          <div className='flex justify-center' key={index}>
            <div className='w-full xl:w-2/3 flex flex-col items-center text-center gap-8'>
              <Link href={project.links.web} target='_blank' className='lg:hidden'>
                <h1 className='text-3xl text-secondary underline uppercase' >{project.name}</h1>
              </Link>
              <Link href={project.links.web} target='_blank'>
                <Image src={project.image} alt={project.name} width={1000} height={2000}
                  className='h-auto w-full shadow-lg rounded-2xl hover:shadow-2xl' />
              </Link>
              <p className='text-muted-foreground'>{project.description}</p>
              <div className='flex w-full flex-wrap gap-10 justify-between '>
                <h1 className='text-3xl text-primary font-[1000] px-8 py-1 rounded-tl-full rounded-b-full bg-muted uppercase hidden lg:flex'>{project.name}</h1>
                <div className='flex items-center gap-4'>
                  {project.used.map((obj, i) => (
                    <Image width={30} height={30} src={obj} alt={obj} key={obj} className={`${i === 0 && 'bg-white rounded-full'}`} />
                  ))
                  }
                </div>
                <div className='flex items-center gap-4'>
                  <Link target='_blank' href={project.links.github}>
                    <Button className='space-x-3' variant={'outline'}>
                      <p>Source</p>
                      <FontAwesomeIcon icon={faGithub} width={16} height={16} />
                    </Button>
                  </Link>
                  <Link target='_blank' href={project.links.web}>
                    <Button className='space-x-3 border'>
                      <p>Visit</p>
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