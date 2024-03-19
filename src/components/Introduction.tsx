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
    <div className='flex padding flex-col items-center gap-12 md:gap-20 py-12 md:py-24' id='Introduction' ref={IntroductionRef}>
      <h1 className='text-3xl lg:text-4xl font-black text-center'>{introductionText.h1}</h1>
      <div className='w-full flex flex-col gap-10 md:flex-row md:gap-20'>
        <Image src={'/icons/avatar.webp'} width={400} height={400} className='h-auto w-full sm:w-96 md:w-[400px] self-center' alt='Profile' />
        <Separator className='hidden md:flex h-[400px] self-center' orientation='vertical' />
        <div className='flex flex-col gap-5 text-sm text-muted-foreground w-full md:w-1/2'>
          <Label className='text-2xl md:text-3xl text-foreground'>{introductionText.text.h1}</Label>
          <p>{paragraphs.p1}</p>
          <p>{paragraphs.p2}</p>
          <p>{paragraphs.p3}</p>
          <p>{paragraphs.p4}</p>

          <div className='mt-auto flex items-center flex-col gap-5 sm:flex-row sm:justify-between w-full'>
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
    </div>
  )
}

export default Introduction