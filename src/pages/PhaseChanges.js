import { Heading } from "../components/Header"
import phase from '../assets/phase.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate"
import { curve, diagram, phaseChange, phaseDarkSection, properties } from "../constants/phase"
import React from "react"
import DivBox from "../components/DivBox"
import { HeadingBottom } from "./Water"
import VideoSection from "../components/VideoSection"
import { headerData } from "../constants/data"

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
    return(
        <>
        <TopicHeader src={phase} data={headerData} name='phase' />
        <DivBox div="bg-dark" container='container'>
            <div className="flex text-white p-10 justify-between">
                <Reveals increment={0.15} variants={{
                    start: {y: 75, opacity: 0},
                    visible: {y:0, opacity: 1}
                }}>
                    {phaseDarkSection.map((i)=>(
                        <Reveal>
                            <HeadingBottom label={i.label} svg={React.cloneElement(i.icon, {className: 'h-9 fill-labelBlue'})} >{i.title}</HeadingBottom>
                        </Reveal>
                    ))}
                </Reveals>
            </div>
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


        <DivBox container='container'>
            <div>
                <div>
                    <div className="font-label font-bold fluid-pr text-primary uppercase">{diagram.label}</div>
                    <div className="font-title fluid-title font-bold">{diagram.title}</div>
                </div>
                <div>
                    {diagram.cards.map((i, index)=>(
                        <div className="rounded-2xl bg-[#F6F5F4] p-10 px-14">
                            <div className="font-primary font-bold fluid-sub">{i.title}</div>
                            <div className="fluid-pr font-primary">{i.description}</div>
                        </div>
                    ))}
                </div>
                <img src={diagram.img} alt="" />
            </div>
        </DivBox>

        </>
    )
}