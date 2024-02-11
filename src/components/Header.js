import vbg from '../assets/bg.mp4'
import { ReactTyped } from 'react-typed'
import { motion } from "framer-motion"
import { headerData } from '../constants/data'
import Reveal, { Reveals } from '../components/RevealAnimate'

export default function Header() {
    return(
        <div className="relative">
            <div className="after:content-[''] after:absolute after:top-0 after:bg-gradient-to-b after:from-slate-950 after:from-5% after:via-50% after:h-[100%] after:w-[100%] after:z-10">
                <video className='h-[100dvh] w-full object-cover' src={vbg} autoPlay loop muted/>
            </div>
            <div className='absolute top-0 w-full h-full z-20'>
                <div className="container mx-auto text-white h-full w-full grid items-center">
                {headerData.map((i)=>{
                    return(
                    <div className="max-w-[40em] flex flex-col justify-start gap-5 px-10">
                        <Reveals increment={0.15} variants={{
                            start: {y: 75, opacity: 0},
                            visible: {y:0, opacity: 1}
                        }}>
                            <Reveal><div className='fluid-pr uppercase font-label font-semibold'>{i.label.main} <ReactTyped className='font-normal type' strings={i.label.typed} typeSpeed={50} loop backSpeed={100} showCursor={false}/></div></Reveal>
                            <Reveal>
                                <div className=' fluid-title leading-[1.1] font-bold font-title'>{i.heading}</div>
                            </Reveal>
                            <Reveal><div className='fluid-pr'>{i.subheading}</div></Reveal>
                            <Reveal whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><motion.button className="bg-primary text-center rounded-lg p-2 text-xl font-semibold font-title shadow-inner overflow-hidden w-full">{i.start.label}</motion.button></Reveal>
                        </Reveals>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}