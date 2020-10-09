import nav from '../config/nav.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Nav = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    return (
        <nav className="shadow">
            <div className="container mx-auto flex justify-center items-center px-4">
                <div className="flex-1">
                    <img className="w-24" src="/images/logo.jpg" alt="Logo" />
                </div>
                <ul 
                    className={`
                        flex 
                        md:relative 
                        md:w-auto 
                        md:flex-row 
                        justify-center 
                        items-center 
                        flex-col 
                        fixed 
                        top-0
                        right-0 
                        md:bg-white 
                        bg-primary
                        w-full 
                        h-full
                        transition-all
                        duration-500
                        ease-in-out
                        z-50
                    `}
                    style={{
                        top: open ? 0 : '-100%'
                    }}
                >

                    {nav.map((item, i) => (
                        <Link as={item.url} href="/[page]" key={i}>
                            <li className="font-bold text-gray-600 mx-3 uppercase cursor-pointer md:my-0 my-2">
                                <span>{item.name}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
                
                <div className="burger-menu md:hidden z-50" onClick={() => setOpen(!open)}>
                    {open ? 
                        <img src="/images/x.svg" alt=""/>
                    :
                        <img src="/images/menu.svg" alt=""/>
                    }
                </div>

            </div>
        </nav>
    )
}

export default Nav
