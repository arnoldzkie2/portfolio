import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { hiddenText, mainText } from '@/lib/texts'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { toast } from 'sonner'
import { Link as ScrollLink } from 'react-scroll'

interface Props {
    MainRef: React.MutableRefObject<null>
}

const Main = ({ MainRef }: Props) => {

    const showToastMessage = () => {
        setTimeout(() => {
            toast(hiddenText.message, { position: 'bottom-center' })
        }, 1300)
    }

    return (
        <div className='padding py-28 lg:py-0 md:pt-36 lg:h-screen lg:justify-center lg:pt-0 w-full flex flex-col gap-6' id='Home' ref={MainRef}>
            <Carousel className='h-full flex items-center'>
                <CarouselContent>
                    <CarouselItem>
                        <div className='flex w-full flex-col items-center text-center gap-8 md:gap-12 lg:gap-20 xl:gap-20'>
                            <h1 className='text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black'>{mainText.h1}</h1>
                            <h2 className='text-muted-foreground lg:w-2/3 lg:text-xl'>{mainText.h2}</h2>
                            <div className='flex items-center justify-center gap-5'>
                                <Button>
                                    <ScrollLink to='Contact' href='#Contact' smooth={true} duration={1500}>
                                        {mainText.button}
                                    </ScrollLink>
                                </Button>
                                <Link href={'https://github.com/arnoldzkie2'} target='_blank'>
                                    <Button variant={'outline'} className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faGithub} width={16} height={16} />
                                        Github
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex w-full flex-col items-center text-center gap-8 md:gap-12 lg:gap-20 xl:gap-20'>
                            <h1 className='text-5xl 2xl:text-6xl font-black'>{hiddenText.h1}</h1>
                            <h2 className='text-muted-foreground'>{hiddenText.h2}</h2>
                            <Button>
                                <ScrollLink to='Contact' href='#Contact' smooth={true} duration={1500} onClick={showToastMessage}>
                                    {hiddenText.button}
                                </ScrollLink>
                            </Button>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

        </div >
    )
}

export default Main