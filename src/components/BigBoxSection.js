import React from "react"
import DivBox from "./DivBox"
import GetInfo from "./Info"
import Reveal, { Reveals } from "./RevealAnimate"

export default function BigBoxSection({ background, data }) {
    return (
        <DivBox container='container relative z-10 grid content-start h-full' div=' bg-no-repeat bg-center bg-cover relative after:bigBoxGradient after:bgOverlay' style={{ backgroundImage: `url(${background})` }}>
            <div className="grid text-white grid-cols-1 md:grid-cols-2 fluid-pr py-[7em] gap-y-16 gap-x-10 mx-auto max-w-[63em] px-[2em] h-max">
                <div className="grid content-start grid-rows-[auto_33em] gap-y-10 md:gap-y-0 ">
                    <div className="max-w-[35rem] space-y-3 md:min-h-[24rem]">
                        <Reveals variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>{React.cloneElement(data[0].icon, { className: 'h-9 fill-labelBlue' })}</Reveal>
                            <Reveal>
                                <div className="text-white font-title font-bold">{data[0].title}</div>
                            </Reveal>
                            <Reveal>
                                <div className="text-darkText fluid-pr font-primary">{data[0].body}</div>
                            </Reveal>
                        </Reveals>
                    </div>
                    <div className="h-full content-none">
                        {data[2].img.map((i, index) => (
                            index === 0 && (
                                <img src={i} alt="" srcset="" className='object-cover w-full h-full' />
                            )
                        ))}
                    </div>
                </div>

                <div className="grid content-start grid-rows-[auto_33em] gap-y-10 md:gap-y-0 h-max">
                    <div className="max-w-[35rem] space-y-3 md:min-h-[24rem]">
                        <Reveals variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>{React.cloneElement(data[1].icon, { className: 'h-9 fill-labelBlue' })}</Reveal>
                            <Reveal>
                                <div className="text-white font-title font-bold">{data[1].title}</div>
                            </Reveal>
                            <Reveal>
                                <div className="text-darkText fluid-pr font-primary">{data[1].body}</div>
                            </Reveal>
                        </Reveals>
                    </div>
                    <div className="flex flex-col h-auto gap-5">
                        {data[2].img.map((i, index) => (
                            index !== 0 && (
                                <img src={i} alt="" srcset="" className='object-cover w-full h-full' />
                            )
                        ))}
                    </div>
                </div>
                {/* <div className="grid col-span-2 grid-cols-[1fr_1fr] grid-rows-2 gap-x-10 gap-y-5 max-h-[37em] mx-auto max-w-[69em]">
                    {data[2].img.map((i, index)=>(
                        <div className={`w-auto ${index === 0 ? 'row-span-2 ' : ''}`}><img src={i} alt="" srcset="" className={`object-cover w-full h-full`}/></div>
                    ))}
                </div> */}
            </div>
        </DivBox>
    )
}