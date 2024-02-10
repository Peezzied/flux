import { motion } from "framer-motion"
import { menuItems } from "../constants/data"
import { CustomLink } from "./Nav"
import { useEffect, useRef, useState } from "react"

const dropIn = {
    hidden: {
        skewX: 5,
        x: '110%'
    },
    visible: {
        x: '0',
        skewX: 0
    },
    exit: {
        x: '110%',
        skewX: -1,
        transition: {
            delay: 0.2
        }
    }
}
const customLinks = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7
        }
    },
    exit: {
        y: "30vh",
        transition: {
            duration: 0.7
        }
    },
}
const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09
        }
    },
    open: {
        transition:{
            staggerChildren: 0.09
        }
    },
    exit: {
        transition:{
            staggerChildren: 0.09
        }
    }
}
export default function Menu({right, left, top, width, set}){
    const menuWidth = useRef(null)
    console.log('getting ref', menuWidth)
    useEffect(() => {
        if (menuWidth.current) {
            set(left + menuWidth.current.offsetWidth + right)
        }
    }, [menuWidth, left, right, set])
    return (
        <>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={dropIn} className="lg:hidden block fixed top-0 h-full bg-slate-950 z-10 right-0" style={{width: `${width}px`}} transition={{
                            duration: .7,
                            ease: [.25,.1,.25,1],
                            type: 'tween'
                        }}></motion.div>
            <motion.ul variants={containerVars} initial="initial" animate="open" exit="exit" ref={menuWidth} className='text-text gap-1 lg:gap-10 items-end lg:items-center text-lg font-bold w-[220px] lg:w-1/2 flex flex-col lg:flex-row fixed lg:static top-0 z-10 ' style={{right: `${right}px`, top: `${top}px`}} >
                            {menuItems.map((i)=>{
                                return(
                        
                                        <motion.span className=" overflow-hidden w-full lg:w-max">
                                            <CustomLink to={i.route} animate={customLinks}>{i.name}</CustomLink>
                                        </motion.span>
                                )
                            })}
                        </motion.ul>
        </>
    )
}