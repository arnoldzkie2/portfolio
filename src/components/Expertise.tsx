import { expertiseTexts } from '@/lib/texts';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Image from 'next/image';

interface Props {
  ExpertiseRef: React.MutableRefObject<null>;
}

const Expertise = ({ ExpertiseRef }: Props) => {
  return (
    <div className='padding bg-secondary py-20 flex items-center flex-col gap-12 md:gap-16 lg:gap-24 xl:gap-28 lg:justify-center' >
      <h1 className='text-3xl lg:text-4xl font-black border-b pb-2' >{expertiseTexts.h1}</h1>
      <div className='flex flex-col w-full gap-5'>
        <h1 className='text-lg md:text-xl text-primary font-black'>{expertiseTexts.skills.tech.h1}</h1>
        <div className='w-full' ref={ExpertiseRef} id='Expertise'>
          <Carousel
            className="w-full"
          >
            <CarouselContent>
              {expertiseTexts.skills.tech.skills.map((skill, index) => (
                <CarouselItem key={index} className="md:pl-4 sm:basis-1/2 lg:basis-1/3 w-full">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <Image width={50} height={50} src={skill.icon} alt={skill.title} className={`${index === 0 || index === 1 || index === 8 ? 'bg-white rounded-full' : ''}`} />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-2 pt-2'>
                      <Label className='text-lg md:text-xl'>{skill.title}</Label>
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
        <h1 className='text-lg md:text-xl text-primary font-black'>{expertiseTexts.skills.programming.h1}</h1>
        <div className='flex w-full items-center flex-col gap-14 md:flex-row md:flex-wrap'>
          {expertiseTexts.skills.programming.skills.map(skill => (
            <div key={skill.title} className='w-full sm:w-96 md:w-80 lg:w-96 xl:w-[390px] 2xl:w-96 flex items-center gap-12'>
              <div className='flex flex-col gap-1.5'>
                <Label className='text-xl'>{skill.title}</Label>
                <p className='text-sm text-muted-foreground'>{skill.description}</p>
              </div>
              <FontAwesomeIcon icon={skill.icon} width={48} height={48} className='text-5xl' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise