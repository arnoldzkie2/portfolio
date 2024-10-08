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
    <div className='padding bg-secondary flex items-center lg:h-screen overflow-hidden flex-col gap-12 pt-40 lg:justify-center' id='Service' ref={ServiceRef}>
      <div className='space-y-2'>
        <h1 className='text-3xl lg:text-4xl font-[1000]'>{serviceTexts.h1}</h1>
      </div>
      <div className='flex w-full items-center flex-col gap-20 justify-evenly md:flex-wrap xl:flex-nowrap md:flex-row'>
        {serviceTexts.services.map((service, index) => (
          <div className='w-full sm:w-96 xl:w-full flex flex-col gap-4 items-center text-center' key={index} data-aos={returnFade(index)}>
            <FontAwesomeIcon icon={service.icon} width={35} height={35} className='text-5xl w-[35px] h-[35px] sm:w-[35px] sm:h-[35px] sm:text-6xl mb-3 border-b border-primary pb-3' />
            <h1 className='text-xl'>{service.title}</h1>
            <p className='text-muted-foreground'>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='bg-card h-20 md:h-44 relative w-screen mt-auto'>
        <div className='w-full h-20 md:h-44 absolute bg-muted bottom-0 shadow-md rounded-bl-[100%]'>
        </div>
      </div>
    </div>
  )
}

export default Service