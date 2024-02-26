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

export function HeadingBottom({children, label, svg, ...props}){
    return(
    <div>
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
    return(
        <>
        <TopicHeader src={vbg} data={headerData} name='water' />
        <DivBox div="bg-dark" container='container'>
            <div className="flex text-white p-10 justify-between">
                <Reveals increment={0.15} variants={{
                    start: {y: 75, opacity: 0},
                    visible: {y:0, opacity: 1}
                }}>
                    <Reveal>
                        <HeadingBottom label='Solid' svg={<Frozen className='h-9 fill-labelBlue' />} >Water freeasdazes at 0 degrees Celsius</HeadingBottom>
                    </Reveal>
                    <Reveal>
                        <HeadingBottom label='Liquid' svg={<Drop className='h-9 fill-labelBlue'/>} >Water remained liquid at room temperature</HeadingBottom>
                    </Reveal>
                    <Reveal>
                        <HeadingBottom label='Gas' svg={<Gauge className='h-9 fill-labelBlue' />} >Water boils at 100 Degrees At Standard Pressure</HeadingBottom>
                    </Reveal>
                </Reveals>
            </div>
        </DivBox>
        <DivBox div='h-[100dvh] bg-no-repeat bg-center bg-cover relative after:earthGradient after:bgOverlay' container='container relative z-10' style={{backgroundImage: `url(${imgBg[0]})`}}>
            <div className="text-white fluid-pr font-primary font-semibold max-w-[28em] float-right mt-56">Water is all around us. This makes up 71% of our earth's surface while 60% of water is in our bodies. Water is tasteless and colorless type of liquid.</div>
        </DivBox>

        <VideoSection isBoxed={false} data={water} />

        <VideoSection isBoxed={false} data={ice} isReversed={true} gradient='waterGradient' background={true}/>

        <BigBoxSection data={conclusion} background={require('../assets/water/bigbox.png')}/>
        </>
    )
}   