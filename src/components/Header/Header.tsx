'use client'
import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { logoText } from '@/lib/texts'
import RenderLinks from './RenderLinks'

interface Props {
    sectionRefs: {
        Introduction: React.MutableRefObject<null>;
        Service: React.MutableRefObject<null>;
        Expertise: React.MutableRefObject<null>;
    }
}

const Header = ({ sectionRefs }: Props) => {

    const [open, setOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleIntersection = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.9,
        });

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionRefs]);

    return (
        <header className='fixed top-0 left-0 w-screen h-14 z-20 flex items-center justify-between padding border-b bg-card backdrop-blur'>
            <ScrollLink
                href='#Home'
                to='Home'
                smooth={true}
                duration={2000}
                className={`font-black hidden lg:flex text-3xl ${activeLink === 'Home' ? 'text-primary' : 'text-foreground'}`}
            >{logoText}</ScrollLink>
            <RenderLinks
                activeLink={activeLink}
                setOpen={setOpen}
                open={open}
            />
        </header>
    )
}



export default Header