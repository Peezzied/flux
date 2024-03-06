import DivBox from "./DivBox";
import think from '../assets/svg/thinking.svg'
import volcano from '../assets/volcano.png'
import { Idea } from "./SvgComponents";
import Reveal, { Reveals } from "./RevealAnimate";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import {trivias} from "../constants/trivias";


export default function Trivia({ isHome = false }) {
    const data = trivias[Math.floor(Math.random() * trivias.length)];
    
    return (
        <LazyLoadComponent>
            <DivBox id='trivia' container={`${isHome ? 'py-[3em] container' : 'grid grid-cols-1 lg:grid-cols-2 justify-items-center relative items-start'}`} div={`bg-dark ${isHome ? '' : 'my-3'} `}>
                <div className={isHome ? `mx-auto max-w-[75em] relative ` : "w-full flex lg:justify-center justify-center"} >
                    <div className={`sm:p-5 lg:px-24 sm:pb-10 ${isHome ? 'sm:pl-24' : 'my-[3em]'} p-16 space-y-3  inline-block w-full max-w-[38em]`}>

                        <Reveals variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>
                                <Idea className='h-9 fill-primary' />
                            </Reveal>
                            <Reveal>
                                <div className="fluid-sub font-title font-bold text-white inline-block">Did you know?</div>
                            </Reveal>
                            <Reveal>
                                <div className="fluid-pr text-darkText font-primary font-semibold min-h-[4.5em]">{/* ADD TRIVIA DATA HERE <<< */}{data.lead}</div>
                            </Reveal>
                        </Reveals>

                    </div>
                    {isHome ?
                        <Reveal ><img className="absolute 2xl:top-[-11em] 2xl:right-[-5em] xl:top-[-11em] xl:right-0 xl:scale-100 lg:top-[-9em] lg:right-[-4.5em] lg:scale-[0.80] hidden lg:block" src={think} /></Reveal>
                        :
                        null
                    }
                </div>
                <div className="h-[100%] w-full relative hidden lg:block">
                    <LazyLoadImage src={data.img} alt="" className="absolute h-full w-full object-cover object-center" />
                </div>
            </DivBox>
        </LazyLoadComponent>
    )
}