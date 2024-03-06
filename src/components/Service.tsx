import { serviceTexts } from '@/lib/texts';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Props {
  ServiceRef: React.MutableRefObject<null>;
}

const Service = ({ ServiceRef }: Props) => {

  const returnFade = (index: number) => {

    let fade: string

    if (index === 0) {
      fade = "fade-up-right"
    } else if (index === 1) {
      fade = "fade-up"
    } else {
      fade = "fade-up-left"
    }
    return fade
  }

  return (
    <div className='padding bg-secondary flex items-center lg:h-screen overflow-hidden flex-col gap-12 lg:gap-20 py-20 lg:justify-center' id='Service' ref={ServiceRef}>
      <h1 className='text-4xl font-black border-b pb-2'>{serviceTexts.h1}</h1>
      <div className='flex w-full items-center flex-col gap-20 justify-evenly md:flex-wrap xl:flex-nowrap md:flex-row'>
        {serviceTexts.services.map((service, index) => (
          <div className='w-full sm:w-96 xl:w-full flex flex-col gap-5 items-center text-center' key={index} data-aos={returnFade(index)}>
            <FontAwesomeIcon icon={service.icon} width={60} height={60} className='text-5xl w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] sm:text-6xl mb-3 border-b border-primary pb-5' />
            <h1 className='text-2xl'>{service.title}</h1>
            <p className='text-muted-foreground'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service