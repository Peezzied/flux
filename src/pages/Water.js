import { Heading } from "../components/Header";
import vbg from '../assets/water.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate";
import { TopicHeader } from "./PhaseChanges";
import { headerData } from "../constants/data";
import React from "react";
import { Drop, Frozen, Gauge } from "../components/SvgComponents";
import DivBox from "../components/DivBox";
import { conclusion, ice, properties, water, waterHero } from "../constants/water";
import VideoSection from "../components/VideoSection";
import QuizCTA from "../components/QuizCTA";
import BigBoxSection from "../components/BigBoxSection";
import { TextFocus } from "../components/TextFocus";
import Trivia from "../components/TriviaBox";

export function HeadingBottom({ children, label, svg, ...props }) {
    return (
        <div className="p-10 container">
            {svg}
            <div className="fluid-pr font-title font-bold mt-3 max-w-[17em]">{children}</div>
            <div className="text-darkText fluid-pr font-primary font-semibold mt-7 w-max">{label}</div>
        </div>
    )
}

const imgBg = [
    require('../assets/water/earth.png'),
    ''
]

export default function Water() {
    return (
        <>
            <TopicHeader src={vbg} data={headerData} name='water' size="fluid-title-xl" />
            <DivBox div="bg-dark" container='xl:container' >
                <div className="flex xl:flex-row divide-y-2 xl:divide-y-0 divide-[#373741] flex-col  text-white justify-between">
                    <Reveals increment={0.15} variants={{
                        start: { y: 75, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }}>
                        <Reveal>
                            <HeadingBottom label='Solid' svg={<Frozen className='h-9 fill-labelBlue' />} >Water freeasdazes at 0 degrees Celsius</HeadingBottom>
                        </Reveal>
                        <Reveal>
                            <HeadingBottom label='Liquid' svg={<Drop className='h-9 fill-labelBlue' />} >Water remained liquid at room temperature</HeadingBottom>
                        </Reveal>
                        <Reveal>
                            <HeadingBottom label='Gas' svg={<Gauge className='h-9 fill-labelBlue' />} >Water boils at 100 Degrees At Standard Pressure</HeadingBottom>
                        </Reveal>
                    </Reveals>
                </div>
            </DivBox>

            <DivBox id='about' div='h-[100dvh] bg-no-repeat bg-center bg-cover relative after:earthGradientTop sm:after:earthGradient after:bgOverlay' container='container relative z-10' style={{ backgroundImage: `url(${imgBg[0]})` }}>
                <Reveal variants={{
                    start: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}>
                    <TextFocus data={waterHero} styles={{ even: 'text-white', odd: 'text-[#B1B1B1]' }} className=" fluid-pr font-primary font-semibold max-w-[28em] px-10 sm:px-0 absolute top-0 right-0 sm:right-0 sm:float-right mt-56" />
                </Reveal>
            </DivBox>

            <VideoSection isBoxed={true} data={water} />

            <DivBox container='container' id="structure-properties">
                <div className="py-28 px-6">
                    <div className="text-start lg:text-center">
                        <div className="fluid-pr font-label font-bold text-primary uppercase">{properties.label}</div>
                        <div className="fluid-title font-title font-bold">{properties.title}</div>
                    </div>
                    <Reveal variants={{
                        start: { y: 75, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }}>
                        <div className="h-[50dvh] lg:h-[100dvh] flex items-center my-12">{React.cloneElement(properties.img, { className: ' -translate-x-7 max-w-4xl mx-auto' })}</div>
                    </Reveal>

                    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-evenly py-6 mb-12 gap-y-3 mt-auto">
                        <div className="font-semibold font-primary fluid-pr2 max-w-[9em] lg:self-center leading-tight">{properties.content[0]}</div>
                        <Reveal style="font-primary fluid-pr max-w-md" variants={{
                            start: { y: 75, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <TextFocus data={properties.content[1]} styles={{ even: 'font-normal', odd: 'font-medium' }} />
                        </Reveal>
                    </div>
                    <div className="relative max-w-6xl mx-auto">{React.cloneElement(properties.video, { className: 'video' })}</div>

                </div>
            </DivBox>

            <Trivia/>

            <VideoSection isBoxed={true} data={ice} isReversed={true} background={true} id="ice" />

            <BigBoxSection data={conclusion} background={require('../assets/water/bigbox.png')} id='conclusion'/>
        </>
    )
}   