import { expertiseTexts } from '@/lib/texts';
import React from 'react'
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Image from 'next/image';
import { Separator } from './ui/separator';

interface Props {
  ExpertiseRef: React.MutableRefObject<null>;
}

const Expertise = ({ ExpertiseRef }: Props) => {
  return (
    <div className='padding bg-secondary pt-20 lg:py-32 flex items-center flex-col gap-12 md:gap-16 lg:gap-24 xl:gap-28 lg:justify-center' >
      <div className='space-y-2'>
        <h1 className='text-3xl lg:text-4xl font-[1000] text-center'>{expertiseTexts.h1}</h1>
        <Separator className='w-2/3 h-[3px] bg-primary rounded-full ml-auto' />
      </div>
      <div className='flex flex-col w-full gap-5 pt-10'>
        <div className='text-xl md:text-2xl flex items-center gap-2 font-black'>
          <div className='h-5 w-[3px] bg-primary'></div>
          {expertiseTexts.skills.tech.h1}
        </div>
        <div className='w-full' ref={ExpertiseRef} id='Expertise'>
          <Carousel
            className="w-full"
          >
            <CarouselContent>
              {expertiseTexts.skills.tech.skills.map((skill, index) => (
                <CarouselItem key={index} className="md:pl-4 sm:basis-1/2 lg:basis-1/3 w-full">
                  <Card>
                    <CardContent className='flex flex-col gap-2 pt-5'>
                      <Image width={45} height={45} src={skill.icon} alt={skill.title} className={`${index === 0 || index === 1 || index > 8 ? 'bg-white rounded-full' : ''}`} />
                      <Label className='text-lg md:text-xl pt-2'>{skill.title}</Label>
                      <p className='text-muted-foreground text-sm'>{skill.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className='md:flex hidden' />
            <CarouselPrevious className='hidden md:flex' />
            <div className='flex items-center relative mt-5 md:hidden'>
              <CarouselPrevious className='absolute left-5' />
              <CarouselNext className='absolute right-5' />
            </div>
          </Carousel>
        </div>
      </div>

      <div className='flex flex-col w-full gap-12'>
        <div className='text-xl md:text-2xl flex items-center gap-2 font-black'>
          <div className='h-5 w-[3px] bg-primary'></div>
          {expertiseTexts.skills.programming.h1}
        </div>
        <div className='flex w-full items-center flex-col gap-5 lg:gap-x-20 md:flex-row md:flex-wrap justify-center'>
          {expertiseTexts.skills.programming.skills.map(skill => (
            <div key={skill.title} className='w-full md:w-[40%] xl:w-[45%] flex items-center gap-10'>
              <div className='flex flex-col gap-1.5'>
                <Label className='text-xl'>{skill.title}</Label>
                <p className='text-sm text-muted-foreground'>{skill.description}</p>
              </div>
              <FontAwesomeIcon icon={skill.icon} width={30} height={30} className='text-4xl' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise