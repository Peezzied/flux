import { Heading } from "../components/Header";
import vbg from '../assets/water.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate";
import { TopicHeader } from "./PhaseChanges";
import { headerData } from "../constants/data";
import React from "react";
import { Drop, Frozen, Gauge } from "../components/SvgComponents";
import DivBox from "../components/DivBox";
import { conclusion, ice, water } from "../constants/water";
import VideoSection from "../components/VideoSection";
import QuizCTA from "../components/QuizCTA";
import BigBoxSection from "../components/BigBoxSection";

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
                <div className="flex xl:flex-row divide-y-2 divide-[#373741] flex-col  text-white justify-between">
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
            <DivBox>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </DivBox>
            <DivBox div='h-[100dvh] bg-no-repeat bg-center bg-cover relative after:earthGradientTop sm:after:earthGradient after:bgOverlay' container='container relative z-10' style={{ backgroundImage: `url(${imgBg[0]})` }}>
                <Reveal variants={{
                    start: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}>
                    <div className="text-white fluid-pr font-primary font-semibold max-w-[28em] px-10 sm:px-0 absolute top-0 right-0 sm:right-0 sm:float-right mt-56">Water is all around us. This makes up 71% of our earth's surface while 60% of water is in our bodies. Water is tasteless and colorless type of liquid.</div>
                </Reveal>
            </DivBox>

            <VideoSection isBoxed={true} data={water} />

            <VideoSection isBoxed={true} data={ice} isReversed={true} background={true} />

            <BigBoxSection data={conclusion} background={require('../assets/water/bigbox.png')} />
        </>
    )
}   