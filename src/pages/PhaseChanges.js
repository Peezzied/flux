import { Heading } from "../components/Header"
import phase from '../assets/phase.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate"
import { curve, diagram, phaseChange, phaseDarkSection, properties } from "../constants/phase"
import React from "react"
import DivBox from "../components/DivBox"
import { HeadingBottom } from "./Water"
import VideoSection from "../components/VideoSection"
import { headerData } from "../constants/data"
import { animate, motion, useMotionValue } from "framer-motion"
import useMeasure from "react-use-measure"
import { useEffect } from "react"
import { sizes, useMediaQuery } from "../constants/utility"
import Modal, { ModalContent } from "../components/Modal"
import { Sparkles } from "../components/SvgComponents"



export const TopicHeader = ({src, data, name})=>(
    <Heading src={src} container='justify-center'>
    {data.map((i)=>(
        i.name === name &&
        <div className="max-w-[47em] flex flex-col gap-5 px-10 items-center">
            <Reveals increment={0.15} variants={{
                        start: {y: 75, opacity: 0},
                        visible: {y:0, opacity: 1}
                    }}>
                <Reveal>
                    <div className="fluid-pr uppercase font-label font-semibold">{i.label}</div>
                </Reveal>
                <Reveal>
                    <div className=' leading-[1.1] font-bold font-title text-center fluid-title'>{i.heading}</div>
                </Reveal>
                <Reveal>
                    <div className='font-primary fluid-pr text-neutral-200 text-center mt-7'>{i.subheading}</div>
                </Reveal>
            </Reveals>
        </div>
    ))}
    </Heading>
)

export default function PhaseChanges() {
    let [ref, {width}] = useMeasure()
    const xTranslation = useMotionValue(0)
    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 80;
        
        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })
        
        return controls.stop
        }, [xTranslation, width])

    const isXl = useMediaQuery(`(max-width: ${sizes.xl})`)
    return(
        <>
        <TopicHeader src={phase} data={headerData} name='phase' />
        <DivBox div="bg-dark overflow-hidden" container='xl:container'>
            <motion.div className="xl:flex  text-white p-10 px-0 md:justify-between space-x-[80px] w-max xl:w-full"  ref={ref} style={{x: isXl ? '0' : xTranslation}}>
                <Reveals increment={0.15} variants={{
                    start: {y: 75, opacity: 0},
                    visible: {y:0, opacity: 1}
                }}>
                    {!isXl && [...phaseDarkSection, ...phaseDarkSection].map((i)=>(
                        <Reveal style='w-max inline-block'>
                            <HeadingBottom label={i.label} svg={React.cloneElement(i.icon, {className: 'h-9 fill-labelBlue'})} >{i.title}</HeadingBottom>
                        </Reveal>
                    ))}
                    {isXl && phaseDarkSection.map((i)=>(
                        <Reveal style='w-max inline-block'>
                            <HeadingBottom label={i.label} svg={React.cloneElement(i.icon, {className: 'h-9 fill-labelBlue'})} >{i.title}</HeadingBottom>
                        </Reveal>
                    ))}
                </Reveals>
            </motion.div>
        </DivBox>
        <DivBox container='container'>
            <div className="grid">
                <div>
                    <div className="text-primary font-label font-bold fluid-pr uppercase">{properties[0].label}</div>
                    <div className="font-title fluid-title font-bold">{properties[0].title}</div>
                    <div className="font-primary font-medium fluid-pr">{properties[0].body}</div>
                </div>
                <div>
                    <div className="fluid-pr font-primary font-bold">{properties[1].title}</div>
                    <div className="fluid-pr font-primary">{properties[1].description}</div>
                    {/* VIDEO IMAGE HERE */}
                    <img src="" alt="" srcset="" />
                </div>
                <div className="grid">
                    {properties[2].map((i, index)=>(
                        <div className="fluid-pr font-primary rounded-2xl after:rounded-2xl after:z-[-10] z-10 text-white bg-no-repeat bg-center bg-cover relative after:waterCard after:bgOverlay" style={{backgroundImage: `url(${i.img})`}}>
                            <div className="uppercase font-semibold">{i.title}</div>
                            <div className="font-medium">{i.description}</div>
                            <div className="text-[#e8e8e8]">Show me</div>
                        </div>
                    ))}
                </div>
            </div>
        </DivBox>
        {/* <VideoSection isBoxed={true} data={phaseChange} />
        <VideoSection isBoxed={true} data={curve} isReversed={true}/> */}


        <DivBox container='container' div='bg-gradient-to-b from-white to-[#E4F4FF] to-[150%]'>
            <div className="space-y-14 sm:space-y-24 py-[10em] p-3 sm:px-7 xl:px-20 ">
                <div className="text-center relative">
                    <div className="h-max w-max absolute top-0 right-0">
                        <Sparkles className="w-[7em]"/>
                    </div>
                    <div className="font-label font-bold fluid-pr text-primary uppercase">{diagram.label}</div>
                    <div className="font-title fluid-title font-bold leading-tight">{diagram.title}</div>
                    <div className="h-max w-max absolute top-0 left-0">
                        <Sparkles className="w-[7em]"/>
                    </div>
                </div>
                <div className="grid gap-5 md:gap-5">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 md:gap-5 ">
                        {diagram.cards.map((i, index)=>(
                            <div className="rounded-2xl bg-[#F6F5F4] sm:p-10 sm:px-14 p-7 px-10 ">
                                <div className={`font-primary font-bold fluid-modal ${index === 0 ? 'text-[#0A7D86]' : 'text-[#E36305]'}`}>{i.title}</div>
                                <div className="fluid-pr font-primary">{i.description}</div>
                            </div>
                        ))}
                    </div>
                    <img className="rounded-[18px] border-[1px] border-[rgba(0,0,0,0.1)] shadow-[0px_4px_18px_rgb(0_0_0_/_4%),0px_2.025px_7.84688px_rgba(0,0,0,.027),0px_0.8px_2.925px_rgb(0_0_0_/_2%),0px_0.175px_1.04062px_rgba(0,0,0,.013)] order-first sm:order-last" src={diagram.img} alt="" />
                </div>
            </div>
        </DivBox>

        </>
    )
}