'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label } from './ui/label'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink } from 'react-scroll'
import { socialLinks } from '@/lib/texts'

const Footer = () => {
    return (
        <div className='padding flex items-center justify-between py-10 border-t'>
            <ul className='flex items-center gap-2'>
                <Label className='mr-3'>Links:</Label>
                {socialLinks.map(link => (
                    <Link href={link.link} target='_blank' key={link.link}>
                        <Button variant={'ghost'} className='px-3'>
                            <FontAwesomeIcon icon={link.icon} width={18} height={18} className='text-lg' />
                        </Button>
                    </Link>
                ))}
            </ul>
            <ScrollLink to='Home' href='#If_you_read_this_please_hire_me_hahaha' smooth={true} duration={1500} >
                <Button variant={'outline'}>
                    <FontAwesomeIcon icon={faArrowUp} width={16} height={16} />
                </Button>
            </ScrollLink>
            <label className='hidden md:flex'>© Arnold Nillas 2024.</label>
        </div>
    )
}

export default Footer