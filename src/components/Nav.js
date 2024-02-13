import { useEffect, useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { AnimatePresence, easeIn, easeInOut, motion, useAnimate, useMotionValueEvent, useScroll } from "framer-motion"
import { menuItems } from "../constants/data"
import ContentNav from "./ContentNav"
import logo from '../assets/chemphase.png'
import { BtnMenu, BtnX } from "./Hamburger"

export const hamburger = {
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
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.1
        }
    }
}

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(null)
    const toggleMenu = ()=>{setIsMenuOpen(!isMenuOpen)}
    const [ scope, animate ] = useAnimate()
    const [ hidden, setHidden ] = useState(false)
    const [ changeStyle, setChangeStyle ] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 1000) {
            setHidden(true)
            // console.log('scroll', true)
        } else {
            setHidden(false)
            // console.log('scroll', false)
        }

        if(latest >= 100) {
            setChangeStyle(true)
        } else {
            setChangeStyle(false)
        }
    })

    const transition = {
        duration: 0.2,
        type: 'tween',
        ease: 'easeInOut'
    }

    const scopeBefore = {
        scope: { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(2, 6, 23, 0)'},
        navContainer: { padding: '1.25rem' },
        navMenuDesktop: { fontSize: '1.125rem' },
        logoImg: { width: '4em', scale: 1.7 },
        svg: { width: '2rem' },
        btnMenu: { width: '2rem' }
    }
    const scopeAfter =  {
        scope: { backdropFilter: 'blur(20px)',  backgroundColor: 'rgba(2, 6, 23, 0.6)'},
        logoImg: { width: '2rem', scale: 2.5 },
        svg: { width: '1.7rem', opacity: 1 },
        btnMenu: { width: '1.7rem' },
        navContainer: { padding: '1rem' },
        navMenuDesktop: { fontSize: '1rem' }
    }
    // useEffect(()=>{
    //     const variants = changeStyle ? scopeAfter : scopeBefore
    //     animate(scope.current, variants.scope, { delay: 0.3, duration: 0.2, type: "tween"})
    //     animate("#navContainer", variants.navContainer, transition)
    //     animate("#navMenuDesktop", variants.navMenuDesktop, {duration: 0.01, type: "tween"})
    //     animate("#logoImg", variants.logoImg, transition)
    //     animate("svg", variants.svg, transition)
    //     animate("#btnMenu", variants.btnMenu, {duration: 0.01, type: "tween"})
    // }, [changeStyle, animate])
    

    
    return (
        <>
        <motion.div
            variants={{
                visible: {y: 0},
                hidden: {y:"-100%"}
            }}
            transition={{duration: 0.35, ease: 'easeInOut'}}
            animate={hidden ? "hidden" : "visible"}
            className='w-full fixed top-0 left-0 z-[50]'
        >
            <div className={changeStyle ? 'bg-slate-950/[0.6] backdrop-blur-[20px] transition-all' : 'bg-slate-950/0 backdrop-blur-0 transition-all ease-in-out'}>
                <motion.div id="navContainer" layout className={changeStyle ? "mx-auto flex items-center mr-auto p-5 lg:py-[1rem] py-4 px-8 lg:px-10" : "flex items-center mr-auto p-5 py-8 lg:py-11 lg:px-10"}>
                    <div className="w-1/2 justify-start flex lg:hidden">
                        <Link to='/explore'>
                            <svg id="btnExplore" className={changeStyle ? "h-auto w-[1.7rem] text-gray-50 transition-all" : "h-auto w-8 text-gray-50 transition-all"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path></svg>
                        </Link>
                    </div>
                    <ul id="navMenuDesktop" className={changeStyle ? 'text-text gap-1 lg:gap-10 items-end lg:items-center text-[1rem] font-bold w-[220px] lg:w-1/2 hidden lg:flex flex-row  top-0 z-10 pl-5' : 'text-text gap-1 lg:gap-10 items-end lg:items-center text-lg font-bold w-[220px] lg:w-1/2 hidden lg:flex flex-row  top-0 z-10 pl-5'}>
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
                            <img id="logoImg" className={changeStyle ? "w-4 scale-[4.7] h-auto chemphase transition-all ease-out duration-300" : "w-5 scale-[5.7] h-auto chemphase transition-all ease-out duration-300"} src={logo} alt="chemphase" srcset="" />
                        </Link>
                    </div>
                    <div onClick={toggleMenu} className="w-1/2 flex justify-end relative z-[200]">
                        <AnimatePresence
                            mode="wait" 
                        >
                        <motion.div key={1} variants={hamburger} initial='initial' animate='visible' exit='end'>
                            { isMenuOpen ? null : <BtnMenu id="btnMenu" className={changeStyle ? "h-auto w-[1.7rem] text-gray-50 cursor-pointer hover:text-ascent transition-all duration-400" : "h-auto w-8 cursor-pointer text-gray-50 hover:text-ascent transition-all duration-400"}></BtnMenu>
                            }
                        </motion.div>
                
                        </AnimatePresence>
                    </div>
                
                </motion.div>
            </div>
            {/* <div className="fixed w-full h-full bg-black top-0 z-[100]"></div> */}

        </motion.div>
        <AnimatePresence mode="wait">
            {isMenuOpen && <ContentNav toggleMenu={toggleMenu} changeStyle={changeStyle}/>}
        </AnimatePresence>
        </>
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
