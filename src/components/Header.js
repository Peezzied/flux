import vbg from '../assets/bg.mp4'
import { ReactTyped } from 'react-typed'
import { motion } from "framer-motion"
import { headerData } from '../constants/data'
import Reveal, { Reveals } from '../components/RevealAnimate'
import { useSharedVals } from '../App'
import { HashLink } from 'react-router-hash-link'

const RocketSvg = ({...props})=>(
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.33053 15.9288C5.115 14.9914 5.00054 14.0103 5.00054 12.9999C5.00054 7.91198 7.90319 3.5636 12.0005 1.81799C16.0979 3.5636 19.0005 7.91198 19.0005 12.9999C19.0005 14.0103 18.8861 14.9914 18.6706 15.9288L20.6907 17.7245C20.8704 17.8842 20.9109 18.1493 20.7872 18.3555L18.33 22.4508C18.1879 22.6876 17.8808 22.7644 17.644 22.6223C17.609 22.6013 17.5766 22.576 17.5477 22.5471L15.2934 20.2928C15.1059 20.1053 14.8515 19.9999 14.5863 19.9999H9.41476C9.14954 19.9999 8.89519 20.1053 8.70765 20.2928L6.45337 22.5471C6.2581 22.7424 5.94152 22.7424 5.74626 22.5471C5.71735 22.5182 5.6921 22.4859 5.67107 22.4508L3.21385 18.3555C3.09014 18.1493 3.13071 17.8842 3.31042 17.7245L5.33053 15.9288ZM12.0005 12.9999C13.1051 12.9999 14.0005 12.1045 14.0005 10.9999C14.0005 9.89537 13.1051 8.99994 12.0005 8.99994C10.896 8.99994 10.0005 9.89537 10.0005 10.9999C10.0005 12.1045 10.896 12.9999 12.0005 12.9999Z"></path></svg>
)
const RocketFireSvg = ({...props})=>(
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.49816 20.0048H15.5018C14.8432 21.5842 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5842 8.49816 20.0048ZM18 14.8095L20 17.0778V19.0048H4V17.0778L6 14.8095V9.00481C6 5.52156 8.50442 2.55825 12 1.46002C15.4956 2.55825 18 5.52156 18 9.00481V14.8095ZM12 11.0048C13.1046 11.0048 14 10.1094 14 9.00481C14 7.90024 13.1046 7.00481 12 7.00481C10.8954 7.00481 10 7.90024 10 9.00481C10 10.1094 10.8954 11.0048 12 11.0048Z"></path></svg>
)

export const Heading =({children, src, container=null, img})=>(
        <div className="relative">
            <div className="after:content-[''] after:absolute after:top-0 after:bg-gradient-to-b after:from-slate-950 after:from-5% after:via-50% after:h-[100%] after:w-[100%] after:z-10">
                {img ?
                <img className='h-[100dvh] w-full object-cover' src={src}/>
                :
                <video className='h-[100dvh] w-full object-cover' src={src} autoPlay loop muted playsInline/>
                }
            </div>
            <div className='absolute top-0 w-full h-full z-20'>
                <div className={`container mx-auto text-white h-full w-full grid items-center ` + container}>
                    {children}
                </div>
            </div>
        </div>
)

export default function Header() {
    const {containerRef} = useSharedVals()
    return(
        <Heading src={vbg}>
                {headerData.map((i)=>{
                    return(
                    i.name === 'home' &&
                    <div className="max-w-[40em] flex flex-col justify-start gap-5 px-10">
                        <Reveals increment={0.15} variants={{
                            start: {y: 75, opacity: 0},
                            visible: {y:0, opacity: 1}
                        }}>
                            <Reveal><div className='fluid-pr uppercase font-label font-semibold'>{i.label.main} <ReactTyped className='font-normal type' strings={i.label.typed} typeSpeed={50} loop backSpeed={100} showCursor={false}/></div></Reveal>
                            <Reveal>
                                <div className=' fluid-title leading-[1.1] font-bold font-title'>{i.heading}</div>
                            </Reveal>
                            <Reveal><div className='font-primary fluid-pr text-neutral-200'>{i.subheading}</div></Reveal>
                            <Reveal><HashLink smooth to={i.start.to}><motion.button className="bg-primary text-center rounded-lg p-2 fluid-secondary font-semibold font-primary shadow-inner overflow-hidden mt-5 lg:mt-10 uppercase px-7 hover:bg-[#00548b] transition-all flex flex-row items-center gap-1 duration-150 group relative"><RocketSvg className="w-5 h-auto group-hover:translate-y-[-150%] transition-all ease-in-out"/><RocketFireSvg className="w-5 h-auto absolute top-12 group-hover:top-2 lg:group-hover:top-3 transition-all ease-in-out" /><span>{i.start.label}</span></motion.button></HashLink></Reveal>
                        </Reveals>
                    </div>
                    )
                })}
        </Heading>
    )
}