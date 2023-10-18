import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'

const NavBar = () =>{
    return(
        <header className="padding-x py-3 absolute z-10 w-full">
            <nav className="flex justify-between max-container items-center">
                <Link href="/">
                    <Image src="/header-logo.svg" alt="header logo" width={100} height={100}/>

                </Link>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) =>(
                        <li key={item.label}>
                        <Link href={item.href} className="font-montserrat leading-normal text-lg
                        text-slate-blue hover:text-dark-blue">
                            {item.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                    <div className="hidden max-lg:block">
                        <Image src="/hamburger.svg" alt="hamburger" width={25} height={25} />
                        </div>

                </nav>
            </header>
    )
}

export default NavBar