import { Heading } from "../components/Header"
import phase from '../assets/phase.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate"
import { curve, diagram, phaseChange, phaseDarkSection, properties } from "../constants/phase"
import React, { useState } from "react"
import DivBox from "../components/DivBox"
import { HeadingBottom } from "./Water"
import VideoSection from "../components/VideoSection"
import { headerData } from "../constants/data"
import { animate, motion, useMotionValue } from "framer-motion"
import useMeasure from "react-use-measure"
import { useEffect } from "react"

import { sizes, useMediaQuery } from "../constants/utility"
import Modals, { Modal } from "../components/Modal"
import { Sparkles } from "../components/SvgComponents"
import videoPhoto from "../assets/phase/video.svg"
import Trivia from "../components/TriviaBox"
import { useSharedVals } from "../App"



export const TopicHeader = ({ src, data, name, img = false, size = null }) => (
    <Heading img={img} src={src} container='justify-center'>
        {data.map((i) => (
            i.name === name &&
            <div className={`${size ? 'max-w-[70em]' : 'max-w-[47em]'} flex flex-col gap-5 px-10 items-center`}>
                <Reveals increment={0.15} variants={{
                    start: { y: 75, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}>
                    <Reveal>
                        <div className="fluid-pr uppercase font-label font-semibold">{i.label}</div>
                    </Reveal>
                    <Reveal>
                        <div className={` leading-[1.1] font-bold font-title text-center ${size ? size : 'fluid-title'}`}>{i.heading}</div>
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
    let [ref, { width }] = useMeasure()
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


    const isXl = useMediaQuery(`(min-width: ${sizes.xl})`)

    const [modalHead, setModalHead] = useState([])
    const [modalData, setModalData] = useState([])
    const { isOpen, setIsOpen } = useSharedVals()
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = (i, h) => {
        console.log('modal data', i)
        setModalHead(h)
        setModalData(i)
        setIsOpen(true)
    }
    // useEffect(()=>{
    //     properties[2].map((i)=>{
    //         {i.modal && i.modal.map((ci)=>{
    //             console.log(ci)
    //         })}
    //     })
    // }, [])

    return (
        <>
            <TopicHeader src={phase} data={headerData} name='phase' size="fluid-title-xl" />
            <DivBox container='max-w-full 2xl:container' div='bg-gradient-to-b from-white to-[#5A97BF] from-[27%] to-[200%] py-24 pb-52 sm:pb-24'>
                <div className="grid sm:px-7 xl:px-20  grid-rows-[auto_1fr] lg:grid-cols-2 gap-x-10 lg:gap-y-28">
                    <div className=" mx-5 col-span-3 lg:col-span-1 h-max">
                        <div className="text-primary font-label font-bold fluid-pr uppercase">{properties[0].label}</div>
                        <div className="font-title fluid-title font-bold">{properties[0].title}</div>
                        <Reveal variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} >
                            <div className="font-primary font-medium fluid-pr mt-4">{properties[0].body}</div>
                        </Reveal>
                    </div>
                    <div className="mx-5 sm:mx-0 grid justify-items-end items-end col-span-3 lg:col-span-1 mt-20">
                        <Reveal variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <div className="grid grid-cols-[1fr_auto] bg-[#f4f7f8] drop-shadow-sm sm:rounded-[35px] rounded-br-none rounded-3xl overflow-hidden sm:rounded-br-none h-max">
                                <div className=" max-w-full h-full"><img className="h-full w-full object-cover" src={videoPhoto} alt="" /></div>
                                <div className="p-5 sm:p-10 max-w-max grid items-center">
                                    <div className="max-w-max h-max">
                                        <div className="fluid-pr font-primary font-bold max-w-max">{properties[1].title}</div>
                                        <div className="fluid-pr font-primary max-w-[11em] leading-tight">{properties[1].description}</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="sm:mx-5 mx-0 grid lg:grid-cols-4 grid-cols-2 grid-rows-[150px_150px_150px_150px_150px_150px_150px] lg:grid-rows-[150px_100px_150px_150px_150px_150px] gap-1 lg:col-span-2 col-span-3 mt-10 lg:mt-0">
                        {properties[2].map((i, index) => (
                            <div className={`fluid-pr font-primary overflow-hidden after:z-[-10] z-10 text-white bg-no-repeat bg-center bg-cover relative after:phaseCard sm:rounded-[30px] after:bgOverlay px-5 sm:px-8 py-6 sm:py-7 xl:p-7 xl:px-10 ${i.style}`} style={{ backgroundImage: `url(${i.img})` }}>
                                <div className="uppercase font-semibold">{i.title}</div>
                                <div className="leading-tight mt-3">{i.description}</div>
                                <div className="text-[#e8e8e8] mt-7 cursor-pointer" onClick={() => { i.modal && openModal(i.modal, i.head) }}>Show me</div>

                            </div>
                        ))}
                    </div>
                </div>

                {isOpen && <Modals head={modalHead} close={closeModal}>
                    {modalData.map((i) =>
                        (<Modal img={i.img} video={i.video} label={i.label} icon={i.icon}>{i.lead}</Modal>)
                    )}
                </Modals>}
            </DivBox>
            <VideoSection isBoxed={true} data={phaseChange} background={true} />
            <Trivia />
            <DivBox container='max-w-6xl mx-auto' div='bg-gradient-to-b from-white to-[#5A97BF] from-[27%] to-[200%]'>
                <div className="space-y-14 sm:space-y-24 py-[6em] lg:py-[10em]   ">
                    <div className="sm:text-center relative max-w-max sm:mx-auto mx-5">
                        <div className=" h-max w-max absolute top-14 md:top-7 md:rotate-0 -rotate-45 -left-14 md:-left-16 lg:top-5 lg:-left-28 xl:-left-36 xl:top-0 sm:block hidden">
                            <Sparkles className=" scale-x-[-1] md:scale-1 w-[3em] lg:w-[5em] xl:w-[7em]" />
                        </div>
                        <div className="font-label font-bold fluid-pr text-primary uppercase ">{diagram.label}</div>
                        <div className="font-title fluid-title font-bold leading-tight mt-3">{diagram.title}</div>
                        <div className="h-max w-max absolute -top-0 rotate-12 md:rotate-0 md:top-7 -right-14 md:-right-16 lg:top-5 lg:-right-28 xl:-right-32 xl:top-0 sm:block hidden">
                            <Sparkles className="w-[3em] lg:w-[5em] xl:w-[7em]" />
                        </div>
                    </div>

                    <div className=" grid gap-10 sm:gap-5 ">
                        <div className="mx-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 gap-y-1">
                            <Reveals increment={0.15} variants={{
                            start: {y: 100, opacity: 0},
                            visible: {y:0, opacity: 1}
                        }}>
                                {diagram.cards.map((i, index) => (
                                    <Reveal>
                                        <div className="rounded-2xl bg-[#f2f6f8] lg:p-10 lg:px-14 p-5 sm:p-7 px-7 sm:px-10 space-y-2 border-2 border-[#eaeff1]">
                                            <div className={`font-primary font-bold fluid-modal ${index === 0 ? 'text-[#0A7D86]' : 'text-[#E36305]'}`}>{i.title}</div>
                                            <div className="fluid-pr font-primary">{i.description}</div>
                                        </div>
                                    </Reveal>
                                ))}
                            </Reveals>
                        </div>
                        <Reveal variants={{
                            start: {y: 100, opacity: 0},
                            visible: {y:0, opacity: 1}
                        }}>
                            <div className="sm:mx-5 order-first sm:order-last sm:rounded-[18px] sm:border-2 border-y-2 border-[rgba(0,0,0,0.1)] border-subtle overflow-hidden"><img src={diagram.img} alt="" /></div>
                        </Reveal>
                    </div>

                </div>
            </DivBox>
            <VideoSection isBoxed={true} data={curve} isReversed={true} background={true} />
        </>
    )
}