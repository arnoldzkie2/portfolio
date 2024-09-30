import { Link as ScrollLink } from "react-scroll"
import { Button } from "../ui/button"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { headerLinks, logoText } from "@/lib/texts"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { ToogleTheme } from "../ToggleTheme"

interface Props {
    activeLink: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RenderLinks = (props: Props) => {

    const { open, setOpen, activeLink } = props

    const mobileScreen = (
        <nav className='lg:hidden flex items-center justify-between w-full'>
            <ScrollLink
                href='#Home'
                to='Home'
                smooth={true}
                duration={2000}
                className={`font-black text-2xl ${activeLink === 'Home' ? 'text-primary' : 'text-foreground'}`}
            >{logoText}</ScrollLink>
            <div className='flex items-center gap-1 sm:gap-2'>
                <ScrollLink href={`#contact`} to='Contact' smooth={true} className='hover:text-foreground' duration={1500}>
                    <Button className='h-8'>{"Let's Work!"}</Button>
                </ScrollLink>
                <Link href={'https://github.com/arnoldzkie2'} target='_blank'>
                    <Button className='px-3 text-foreground' variant={'ghost'}>
                        <FontAwesomeIcon
                            icon={faGithub}
                            width={16} height={16}
                        />
                    </Button>
                </Link>
                <ToogleTheme />
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button className='px-3 text-foreground' variant={'ghost'}>
                            <FontAwesomeIcon icon={faBarsStaggered} width={16} height={16} className='cursor-pointer' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'left'} className='flex flex-col gap-3 text-muted-foreground'>
                        <ScrollLink
                            href='#Home'
                            to='Home'
                            smooth={true}
                            duration={2000}
                            onClick={() => setOpen(false)}
                            className={`font-black text-2xl ${activeLink === 'Home' ? 'text-primary' : 'text-foreground'}`}
                        >{logoText}</ScrollLink>
                        {headerLinks.map(link => (
                            <ScrollLink
                                to={link} key={link}
                                smooth={true}
                                duration={1500}
                                className={activeLink === link ? 'text-primary' : 'text-muted-foreground'}
                                href={`/#${link}`}
                                onClick={() => setOpen(false)}
                            >
                                {link}
                            </ScrollLink>
                        ))}
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )

    const largeScreen = (
        <ul className='items-center gap-8 text-muted-foreground hidden lg:flex text-sm'>
            {headerLinks.map(link => (
                <ScrollLink
                    to={link}
                    key={link}
                    smooth={true}
                    href={`#${link}`}
                    duration={1500}
                    className={activeLink === link ? 'text-primary' : 'text-muted-foreground'}
                    onClick={() => setOpen(false)}
                >
                    {link}
                </ScrollLink>
            ))}
            <div className='flex items-center gap-3'>
                <ScrollLink href={`#contact`} to='Contact' smooth={true} className='hover:text-foreground' duration={1500}>
                    <Button className='h-8'>{"Let's Work!"}</Button>
                </ScrollLink>
                <Link href={'https://github.com/arnoldzkie2'} target='_blank' className='text-base'>
                    <Button className="px-3 text-foreground" variant="ghost">
                        <FontAwesomeIcon
                            icon={faGithub}
                            width={20} height={20}
                            className="text-lg"
                        />
                    </Button>
                </Link>
                <ToogleTheme />
            </div>
        </ul>
    )

    return (
        <>
            {mobileScreen}
            {largeScreen}
        </>
    )
}

export default RenderLinks