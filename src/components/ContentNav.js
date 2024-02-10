import { contentNavigator, menuItems } from "../constants/data"
import Accordian, { AccordianItem } from "./MenuAccordion"
import { CustomLink } from "./Nav"
import { motion } from "framer-motion"


export default function ContentNav(){
    const motionDiv = {
        initial: {
            x: '200%',
            skewX: 7,
        },
        visible: {
            x: 0,
            skewX: 0,
            transition: {
                duration: .7,
                type: 'tween',
                ease: [.36,-0.01,0,1.03]
            }
        },
        end: {
            x: '180%',
            skewX: -3,
            transition: {
                duration: .7,
                type: 'tween',
                ease: [.25,.1,.25,1]
            }
        }
    }
    const staggerAnimate = {
        initial: {
            transition: {
                staggerChildren: 0.09
            }
        },
        visible: {
            transition: {
                staggerChildren: 0.09
            }
        }
    }
    const motionDivBg = {
        initial: {
            x: '200%'
        },
        visible: {
            x: '77%'
        },
        end: {
            x: '100%'
        },
    }
    const containerVars = {
        initial: {
            y: '150%',
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.55, 0.45, 1],
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
            }
        },
        end: {
            opacity: 0,
            transition: {
                duration: 0.1
            }
        }
    }
    const backDrop = {
        initial: {
            opacity: 0, 
        },
        visible: {
            opacity: 1,

        },
        end: {
            opacity: 0,
        }
    }
    return(
        <div className="w-full h-full fixed top-0 left-0 z-50 flex text-upper lowercase">
            <motion.div key={3} variants={backDrop} initial="initial" animate="visible" exit="end"             transition={{
                duration: 0.5,
                type: 'tween'
            }} className="fixed w-full h-full top-0 left-0 bg-black/[0.5] z-20">

            </motion.div>
            <motion.div key={1} variants={motionDivBg} initial="initial" animate="visible" exit='end' transition={{
                    duration: .6,
                    type: 'tween',
                    ease: [.25,.1,.25,1     ]
                }} className="absolute h-full w-full z-20 bg-slate-950 right-0 top-0"></motion.div>
            <div className="container mx-auto after:content-[''] relative flex justify-end">
                <motion.div key={2} variants={motionDiv} initial="initial" animate="visible" exit="end" className="h-full bg-slate-950 max-w-[20rem] w-full relative z-20 pt-20 flex p-5 flex-col items-end text-white text-end text-xl font-title pl-10">
                    <motion.div variants={staggerAnimate} initial="initial" animate='visible' exit="end" className="w-full h-full space-y-2">
                        {menuItems.map((i)=>{
                            return(
                                i.name !== 'explore' &&
                                <div className="overflow-hidden w-full">
                                    <motion.div variants={containerVars} className="p-3 w-full bg-slate-900/[0.4] rounded-xl pr-5 border-[1px] border-gray-900">
                                        <CustomLink to={i.route}>{i.name}</CustomLink>
                                    </motion.div>
                                </div>
                            )
                        })}
                            {contentNavigator.map((i, index)=>{
                                return(
                                    // <div className="space-y-[7px] border-b-[2px] py-3 w-full border-gray-800">
                                    //     <div className="cursor-pointer hover:text-ascent transition-all duration-300">{i.title}</div>
                                    //     <div className="pr-3 border-r-[1px] border-slate-900 font-light mr-2 font-sans">
                                    //         {i.child.map((ci)=>{
                                    //             return(
                                    //                 <div>{ci.title}</div>
                                    //             )
                                    //         })}
                                    //     </div>
                                    // </div>
                                        <div className="overflow-hidden w-full">
                                            <motion.div variants={containerVars} className="w-full">
                                                <Accordian className='p-3 w-full bg-slate-900/[0.4] rounded-xl border-[1px] border-gray-900'>
                                                    <AccordianItem value={i.title} trigger={i.title}
                                                        styles={{
                                                            wrapper: 'h-max',
                                                            title: 'flex gap-2 justify-end',
                                                            content: ''
                                                        }}
                                                    >
                                                        <ul className="space-y-1 font-light">
                                                            {i.child.map((ci)=>{
                                                                return(
                                                                    <li className="bg-slate-900/[0.4] rounded-xl p-1 px-5">{ci.title}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </AccordianItem>
                                                </Accordian>
                                            </motion.div >
                                        </div>
                                )
                            })}
                    </motion.div>
                  
                </motion.div>
            </div>
        </div>
    )
}