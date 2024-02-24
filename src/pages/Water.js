import { Heading } from "../components/Header";
import vbg from '../assets/water.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate";
import { TopicHeader } from "./PhaseChanges";
import { headerData, headingWaterData } from "../constants/data";
import React from "react";
import { Drop, Frozen, Gauge } from "../components/SvgComponents";
import DivBox from "../components/DivBox";

export function HeadingBottom({children, label, svg, ...props}){
    return(
    <div>
        {svg}
        <div className="fluid-pr font-title font-bold mt-3 w-[17em]">{children}</div>
        <div className="text-darkText fluid-pr font-primary font-semibold mt-7 w-max">{label}</div>
    </div>
    )
}

export default function Water() {
    return(
        <>
        <TopicHeader src={vbg} data={headerData} name='water' />
        <DivBox container="container" div="bg-dark">
            <div className="flex text-white p-10 justify-between">
                <Reveals increment={0.15} variants={{
                    start: {y: 75, opacity: 0},
                    visible: {y:0, opacity: 1}
                }}>
                    <Reveal>
                        <HeadingBottom label='Solid' svg={<Frozen className='h-9 fill-labelBlue' />} >Water freezes at 0 degrees Celsius</HeadingBottom>
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
        </>
    )
}   