import React from "react";
import DivBox from "./DivBox";
import { Info } from "./SvgComponents";
import GetInfo from "./Info";
import Reveal, { Reveals } from "./RevealAnimate";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function VideoSection({ data, isReversed = false, isBoxed, background = false, isBig, id, ...props }) {
    return (
        <LazyLoadComponent>
            <DivBox id={id} div={background ? `h-full bg-no-repeat bg-center bg-cover relative ${isReversed ? 'after:sectionOverlayLeft' : 'after:sectionOverlayRight'} after:bgOverlay group ` : "  group relative bg-gradient-to-l to-[#59BDFF] from-[#F8F8F8] to-[230%] from-[50%]"} container={isBoxed && 'container'} style={background ? { backgroundImage: `url(${data.img})` } : {}} {...props}>
                <div className={`flex items-center justify-center p-12 sm:px-12 px-5 py-16 mx-auto max-w-[110em] gap-16 xl:gap-28 relative z-10 flex-col ${isReversed ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>

                    <div className={`${background ? 'text-white' : ''} xl:max-w-[29em]`}>
                        <Reveals increment={0.15} variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>
                                <div className={`font-label fluid-pr font-bold ${background ? 'text-[#069CFE]' : 'text-labelBlue'} uppercase`}>{data.label}</div>
                            </Reveal>
                            <Reveal>
                                <div className={`font-title font-bold ${isBig ? 'fluid-title' : 'fluid-sub'}`}>{data.title}</div>
                            </Reveal>
                            <Reveal>
                                <div className="fluid-pr font-primary mt-3">{data.body}</div>
                            </Reveal>
                        </Reveals>
                    </div>

                    <div className='relative w-full h-full'>
                        <div className="">
                            {React.cloneElement(data.video, { className: 'video' })}
                        </div>
                    </div>

                </div>
     
            </DivBox>
        </LazyLoadComponent>
    )
}