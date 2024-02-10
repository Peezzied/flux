import { useEffect, useRef, useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Background from "./Menu"
import { menuItems } from "../constants/data"
import { useViewport } from "react-viewport-hooks"
import Menu from "./Menu"
import ContentNav from "./ContentNav"
import logo from '../assets/chemphase.png'

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(null)
    const toggleMenu = ()=>{setIsMenuOpen(!isMenuOpen)}
    const hamburger = {
        initial: {
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.1
            }
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.1
            }
        },
        end: {
            opacity: 0.8,
            transition: {
                type: 'tween',
                duration: 0.1
            }
        }
    }
    return (
        <div className="w-full fixed top-0 left-0 z-50">
            
            <div className="container mx-auto flex items-center mr-auto p-5 lg:py-7">
                <div className="w-1/2 justify-start flex lg:hidden">
                    <Link to='/explore'>
                        <svg className="h-8 w-8 text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path></svg>
                    </Link>
                </div>

                <ul className='text-text gap-1 lg:gap-10 items-end lg:items-center text-lg font-bold w-[220px] lg:w-1/2 hidden lg:flex flex-row  top-0 z-10 '>
                            {menuItems.map((i)=>{
                                return(
                                            <li className="relative after:absolute after:bottom-0 w-max hover:after:bg-gray-400 hover:after:h-[2.5px] z-50 after:w-full after:content-[''] after:opacity-1 hover:after:opacity-1 after:transition-all after:duration-500 after:delay-75">
                                                <CustomLink to={i.route} >{i.name}</CustomLink>
                                            </li>
                                )
                            })}
                </ul>
                
                    
                <div className="w-3/4 flex justify-center">
                    <Link to='/'>
                        {/* <svg id="logo-86" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC"></path>
                            <path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z" fill="#007DFC"></path>
                        </svg> */}
                        <img className="w-16 scale-[1.7] h-auto chemphase hover:scale-[1.57] transition-transform delay-75 ease-in duration-100" src={logo} alt="chemphase" srcset="" />
                    </Link>
                </div>
                <div onClick={toggleMenu} className="w-1/2 flex justify-end relative z-[100]">
                    <AnimatePresence
                        mode="wait"
                        initial="hidden"
                    >{ isMenuOpen ? <motion.svg key={1} variants={hamburger} initial='initial' animate='visible' exit='end' className="h-8 w-8 text-gray-50 hover:text-ascent transition-all duration-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></motion.svg> : <motion.svg key={2} variants={hamburger} initial='initial' animate='visible' exit='end' className="h-8 w-8 text-gray-50 hover:text-ascent transition-all duration-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></motion.svg>}</AnimatePresence>
                </div>
                <AnimatePresence
                    mode="wait"
                    initial="hidden"
                >

                    {isMenuOpen && <ContentNav />}
                </AnimatePresence>
            </div>
        </div>
    )
}


export function CustomLink({ to, animate, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <div className={'group ' + (isActive ? 'text-ascent' : '')}>
        <span className="cursor-pointer group-hover:text-ascent transition-all duration-300">
            <Link to={to} {...props}>
              {children}
            </Link>
        </span>
      </div>
    )
  }
