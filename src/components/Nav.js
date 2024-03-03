import { useEffect, useRef, useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { AnimatePresence, easeIn, easeInOut, motion, useAnimate, useInView, useMotionValueEvent, useScroll } from "framer-motion"
import { menuItems } from "../constants/data"
import ContentNav from "./ContentNav"
import logo from '../assets/flux.png'
import { BtnMenu, BtnX } from "./Hamburger"
import { useSharedVals } from "../App"
import { HashLink } from "react-router-hash-link"

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

export function NavFixed({getRef}) {
    const {isMenuOpen, setIsMenuOpen} = useSharedVals()
    const {toggleMenu} = useSharedVals()
    // useEffect(()=>{
    //     const variants = scopeAfter : scopeBefore
    //     animate(scope.current, variants.scope, { delay: 0.3, duration: 0.2, type: "tween"})
    //     animate("#navContainer", variants.navContainer, transition)
    //     animate("#navMenuDesktop", variants.navMenuDesktop, {duration: 0.01, type: "tween"})
    //     animate("#logoImg", variants.logoImg, transition)
    //     animate("svg", variants.svg, transition)
    //     animate("#btnMenu", variants.btnMenu, {duration: 0.01, type: "tween"})
    // }, [changeStyle, animate])
    

    
    return (
        <>
        <div
            ref={getRef}
            className={'  w-full absolute top-0 left-0 z-[50]'}
        >
            <div className={'bg-slate-950/0 backdrop-blur-0 transition-all ease-in-out max-w-[120em] mx-auto'}>
                <div id="navContainer" layout className={"flex items-center mr-auto p-5 py-8 lg:py-11 lg:px-10"}>
                    <div className="w-1/2 justify-start flex lg:hidden">
                        <HashLink smooth={true} to='/#explore'>
                            <svg id="btnExplore" className={"h-auto w-8 text-gray-50 transition-all"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path></svg>
                        </HashLink>
                    </div>
                    <ul id="navMenuDesktop" className={'text-text gap-1 lg:gap-10 items-end lg:items-center text-lg font-bold w-[220px] lg:w-1/2 hidden lg:flex flex-row  top-0 z-10 pl-5'}>
                        {menuItems.map((i)=>{
                            return(
                                i.name !== 'home' &&
                                <li className="relative after:absolute after:bottom-0 w-max hover:after:bg-gray-400 hover:after:h-[2.5px] z-50 after:w-full after:content-[''] after:opacity-1 hover:after:opacity-1 after:transition-all after:duration-500 after:delay-75">
                                    <CustomLink to={i.route} >{i.name}</CustomLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="w-3/4 flex justify-center">
                        <Link to='/'>
                            <img id="logoImg" className={"w-5 scale-[5.7] h-auto chemphase transition-all ease-out duration-300"} src={logo} alt="chemphase" srcset="" />
                        </Link>
                    </div>
                    <div onClick={toggleMenu} className="w-1/2 flex justify-end relative z-[200]">
                        <AnimatePresence
                            mode="wait" 
                        >
                        <motion.div key={1} variants={hamburger} initial='initial' animate='visible' exit='end'>
                            { isMenuOpen ? null : <BtnMenu id="btnMenu" className={"h-auto w-8 cursor-pointer text-gray-50 hover:text-ascent transition-all duration-400"}></BtnMenu>
                            }
                        </motion.div>
                
                        </AnimatePresence>
                    </div>
                
                </div>
            </div>
            {/* <div className="fixed w-full h-full bg-black top-0 z-[100]"></div> */}

        </div>
        </>
    )
}
export function NavAnimated({isAnimate=true, styleProp}) {
    const {isMenuOpen, setIsMenuOpen} = useSharedVals()
    const {toggleMenu} = useSharedVals()
    const { hidden } = useSharedVals()



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
    
    return (
        <>
        <motion.div
            variants={{
                visible: {y: 0},
                hidden: {y:"-100%"}
            }}
            transition={{duration: 0.35, ease: 'easeInOut'}}
            animate={hidden ? "hidden" : isAnimate ? 'hidden' : 'visible'}
            className={'w-full fixed top-0 left-0 z-[50]'}
            style={styleProp}
        >
            <div className={'bg-slate-950/[0.6] backdrop-blur-[20px] transition-all '}>
                <div id="navContainer" layout className={"mx-auto flex items-center mr-auto p-5 lg:py-[1rem] py-4 px-8 lg:px-10 max-w-[120em] px-auto"}>
                    <div className="w-1/2 justify-start flex lg:hidden">
                        <HashLink smooth={true} to='/#explore'>
                            <svg id="btnExplore" className={"h-auto w-[1.7rem] text-gray-50 transition-all"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path></svg>
                        </HashLink>
                    </div>
                    <ul id="navMenuDesktop" className={'text-text gap-1 lg:gap-10 items-end lg:items-center text-[1rem] font-bold w-[220px] lg:w-1/2 hidden lg:flex flex-row  top-0 z-10 pl-5'}>
                        {menuItems.map((i)=>{
                            return(
                                i.name !== 'home' &&
                                <li className="relative after:absolute after:bottom-0 w-max hover:after:bg-gray-400 hover:after:h-[2.5px] z-50 after:w-full after:content-[''] after:opacity-1 hover:after:opacity-1 after:transition-all after:duration-500 after:delay-75">
                                    <CustomLink to={i.route} >{i.name}</CustomLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="w-3/4 flex justify-center">
                        <Link to='/'>
                            <img id="logoImg" className={"w-4 scale-[4.7] h-auto chemphase transition-all ease-out duration-300" } src={logo} alt="chemphase" srcset="" />
                        </Link>
                    </div>
                    <div onClick={toggleMenu} className="w-1/2 flex justify-end relative z-[200]">
                        <AnimatePresence
                            mode="wait" 
                        >
                        <motion.div key={1} variants={hamburger} initial='initial' animate='visible' exit='end'>
                            { isMenuOpen ? null : <BtnMenu id="btnMenu" className={"h-auto w-[1.7rem] text-gray-50 cursor-pointer hover:text-ascent transition-all duration-400"}></BtnMenu>
                            }
                        </motion.div>
                
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            {/* <div className="fixed w-full h-full bg-black top-0 z-[100]"></div> */}

        </motion.div>

        </>
    )
}
// function NavMenu({isMenuOpen, toggleMenu, changeStyle}){

//     return(
//         <AnimatePresence mode="wait">
//             {isMenuOpen && <ContentNav toggleMenu={toggleMenu} changeStyle={changeStyle}/>}
//         </AnimatePresence>
//     )
// }
export function Nav(){
    const nav = useRef(null)
    const isInView = useInView(nav)
    const {scrollY } = useScroll({target: nav, offset: ["start end", "end end"]})
    const {scrollY : pageScroll} = useScroll()
    const { setHidden } = useSharedVals()
    const { setChangeStyle, changeStyle } = useSharedVals()
    const {isMenuOpen} = useSharedVals()
    const {toggleMenu} = useSharedVals()
    const {isOpen} = useSharedVals

    useMotionValueEvent(pageScroll, "change", (latest) => {
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

    // useEffect(()=>{console.log('scroll',scrollY)}, [scrollY])
    // useEffect(()=>{
    //     console.log('view', isInView, nav)
    // }, [isInView])
    return(
        <>
            <NavFixed getRef={nav}/>
            <NavAnimated isAnimate={isInView} styleProp={{opacity: scrollY}}/>
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
            <HashLink smooth={true} to={to} {...props}>
              {children}
            </HashLink>
        </span>
      </div>
    )
  }

