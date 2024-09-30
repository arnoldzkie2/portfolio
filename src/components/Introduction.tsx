import { introductionText, mainText, socialLinks } from '@/lib/texts';
import Image from 'next/image';
import React from 'react'
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Label } from './ui/label';
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  IntroductionRef: React.MutableRefObject<null>;
}

const Introduction = ({ IntroductionRef }: Props) => {

  const { paragraphs } = introductionText.text

  return (
    <div className='flex padding flex-col items-center gap-12 md:gap-20 lg:justify-center lg:h-screen' id='Introduction' ref={IntroductionRef}>
      <div className='bg-primary h-20 md:h-44 relative w-screen'>
        <div className='w-full h-20 md:h-44 absolute bg-card bottom-0 rounded-tl-[100%]'>
        </div>
      </div>
      <h1 className='text-3xl lg:text-4xl font-[1000] text-center'>{introductionText.h1}</h1>
      <div className='w-full flex flex-col gap-10 md:flex-row md:gap-10 lg:gap-20'>
        <Image src={'/icons/avatar.jpg'} width={300} height={300} className='h-auto max-w-[350px] md:w-full w-full self-center rounded-tl-[40%] rounded-br-[40%]' alt='Profile' />
        <Separator className='hidden lg:flex h-[400px] self-center' orientation='vertical' />
        <div className='flex flex-col gap-5 text-sm text-muted-foreground w-full md:w-1/2'>
          <div>
            <Label className='text-xl lg:text-2xl text-foreground'>{introductionText.text.h1}</Label>
            <Separator className='w-24 lg:w-28 h-[3px] rounded-full bg-primary' />
          </div>
          <p>{paragraphs.p1}</p>
          <p>{paragraphs.p2}</p>
          <p>{paragraphs.p3}</p>
          <p>{paragraphs.p4}</p>

          <div className='mt-auto flex items-center flex-col gap-5 sm:flex-row md:flex-col xl:flex-row sm:justify-between w-full'>
            <div className='flex items-center gap-5 w-full sm:w-auto'>
              <Button className='w-full'>
                <ScrollLink to='Contact' href='#Contact' smooth={true} duration={1500}>
                  {mainText.button}
                </ScrollLink>
              </Button>
              <Button className='w-full' variant={'secondary'}>
                <a href="/arnoldresume.pdf" download={'arnold_resume'}>
                  Download CV
                </a>
              </Button>
            </div>
            <ul className='flex items-center gap-5 text-foreground'>
              {socialLinks.map(link => (
                <Link href={link.link} target='_blank' key={link.link}>
                  <Button variant={'ghost'} className='px-3'>
                    <FontAwesomeIcon icon={link.icon} width={18} height={18} className='text-lg' />
                  </Button>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-muted h-20 md:h-44 relative w-screen '>
        <div className='w-full h-20 md:h-44 absolute bg-card shadow-sm top-0 rounded-br-[100%]'>
        </div>
      </div>
    </div>
  )
}

export default Introduction