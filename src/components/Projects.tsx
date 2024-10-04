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
        <div className='w-full h-20 md:h-52 absolute bg-primary bottom-0 rounded-tr-[50%] rounded-tl-[50%]'>
        </div>
      </div>
      <div className='space-y-2 pb-10'>
        <h1 className='text-3xl lg:text-4xl text-secondary font-black' id='Projects' ref={ProjectsRef}>{projectTexts.h1}</h1>
        <Separator className='w-2/3 h-[3px] rounded-full' />
      </div>
      <div className='flex w-full flex-col gap-28 lg:gap-40'>
        {projectTexts.projects.map((project, index) => (
          <div className='flex justify-center' key={index}>
            <div className='w-full lg:w-4/5 flex flex-col items-center text-center gap-5'>
              <h1 className='text-3xl text-secondary uppercase lg:hidden' data-aos="fade-up" >{project.name}</h1>
              <Link href={project.links.web} target='_blank' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <Image src={project.image} alt={project.name} width={1000} height={2000}
                  className='h-auto w-full shadow-lg rounded-2xl hover:shadow-2xl' />
              </Link>
              <p className='text-muted-foreground' data-aos="fade-in">{project.description}</p>
              <div className='flex w-full items-center gap-10 justify-between'>
                <h1 className='text-xl text-primary font-[1000] px-8 py-1 rounded-tl-full rounded-b-full bg-muted uppercase hidden lg:flex xl:text-2xl'>{project.name}</h1>
                <div className='items-center gap-4 hidden lg:flex'>
                  {project.used.map((obj, i) => (
                    <Image width={30} height={30} src={obj} alt={obj} key={obj} className={`${i === 0 && 'bg-white rounded-full'}`} data-aos="fade-up" data-aos-duration={(i + 1) * 500} />
                  ))
                  }
                </div>
                <div className='items-center gap-4 justify-center lg:flex hidden'>
                  <Link target='_blank' href={project.links.github} >
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
                <div className='flex items-center w-full gap-4 justify-center lg:hidden'>
                  <Link target='_blank' href={project.links.github} data-aos="fade-right">
                    <Button className='space-x-3' variant={'outline'}>
                      <p>Source</p>
                      <FontAwesomeIcon icon={faGithub} width={16} height={16} />
                    </Button>
                  </Link>
                  <Link target='_blank' href={project.links.web}>
                    <Button className='space-x-3 border' data-aos="fade-left">
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