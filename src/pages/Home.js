
import Header from '../components/Header'
import quoteFrom from '../assets/mj-logo.png'
import React, { useEffect } from 'react'
import Trivia from '../components/TriviaBox'
import DivBox from '../components/DivBox'
import { explore, overview, phase, water } from '../constants/home'
import { Link } from 'react-router-dom'
import { BlueBlob, OrangeBlob, ToLink } from '../components/SvgComponents'
import Reveal, { Reveals } from '../components/RevealAnimate'
import { HashLink } from 'react-router-hash-link'


const Hexa = ({ ...props }) => (
    <svg {...props} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" fill='currentColor' preserveAspectRatio='none'>
        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
        <g><g><g><path d="M59.5,19L45,27.1v16.2v16.2l14.8,7.5l14.8,7.5L90,67l15.3-7.6l0-16.1V27.2L90,19c-8.5-4.5-15.6-8.2-15.8-8.1C74,10.9,67.3,14.6,59.5,19z" /><path d="M24.4,76.1L10,84.2v16.1v16.1l14.8,7.4c8.1,4.1,15,7.4,15.3,7.4c0.3,0,7.2-3.3,15.4-7.3l14.9-7.4l-0.1-16.3l-0.1-16.3l-15-7.9C46.9,71.6,39.9,68,39.5,68C39.1,68,32.3,71.7,24.4,76.1z" /><path d="M94,76.1l-14.4,8.1v16.1v16.1l14.8,7.4c8.1,4.1,15,7.4,15.3,7.4c0.2,0,7.2-3.3,15.4-7.3l14.9-7.3v-16.3l0-16.3l-15.1-8c-8.3-4.3-15.4-7.9-15.8-7.9C108.7,68,101.9,71.7,94,76.1z" /><path d="M165,76.1l-14.4,8.1v16v16.1l14.8,7.4c8.1,4.1,15,7.4,15.3,7.4c0.3,0,7.3-3.3,15.4-7.2l14.8-7.3v-16.4l0-16.4l-15.1-8c-8.3-4.3-15.4-7.9-15.8-7.9C179.7,68,172.9,71.7,165,76.1z" /><path d="M130.7,132.9L116,141v16.3v16.2l14.9,7.4l14.8,7.4l15.3-7.5l15.3-7.5v-16.2V141l-15.3-8.1c-8.4-4.4-15.3-8.1-15.5-8.2C145.4,124.7,138.7,128.4,130.7,132.9z" /><path d="M200.3,132.9l-14.7,8.2v16.3v16.2l14.9,7.4l14.8,7.4l15.4-7.5l15.3-7.5v-16.2V141l-15.3-8.1c-8.4-4.4-15.4-8.1-15.5-8.2C215,124.7,208.3,128.4,200.3,132.9z" /><path d="M59.3,133.2l-14.1,8l-0.1,16.3L45,173.8l14.8,7.4l14.9,7.4l15.3-7.6l15.3-7.5l-0.1-16.2l-0.1-16.2l-15.2-8c-8.3-4.4-15.5-8-15.9-8C73.7,125.2,67.1,128.8,59.3,133.2z" /><path d="M24.8,189.6l-14.5,8.2l-0.1,16.1L10,230l15,7.6l15,7.6l15.2-7.5l15.2-7.6v-16.2v-16.2L55,189.5c-8.5-4.5-15.5-8.2-15.6-8.2C39.4,181.4,32.7,185.1,24.8,189.6z" /><path d="M94.3,189.6l-14.6,8.2v16.1l0,16.1l15,7.6l15,7.5l15.1-7.4l15.1-7.5l0.1-16.2l0.1-16.3l-15.4-8.2c-8.5-4.5-15.5-8.2-15.6-8.2C109,181.4,102.3,185.1,94.3,189.6z" /></g></g></g>
    </svg>
)
function Quote() {
    return (
        <div className="min-h-[27em] grid items-center bg-[#17171b] relative overflow-hidden">
            <div className="text-center container grid justify-center justify-items-center px-10">
                <Reveal variants={{
                    start: { y: 75, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}>
                    <div className='quotes font-label fluid-pr font-bold text-sky-600 uppercase'>Chemistry Says...</div>
                    <div className='quotes font-title font-bold fluid-sub text-gray-200 mt-7 overflow-hidden'>"Old bond break when new ones are formed."</div>
                    <div className='quotes mt-5  border-t-[1px] border-gray-500'><img src={quoteFrom} alt="" className='m-8 w-40 h-auto mx-auto' /></div>
                </Reveal>
                <div className="absolute h-full w-[850px] md:w-[1024px] lg:w-[1280px] xl:w-[1536px] top-0 z-10">
                    <Hexa className="h-auto w-96 text-[#202026] absolute bottom-[-157px] left-[-80px] rotate-180" />
                    <Hexa className="h-auto w-96 text-[#202026] absolute top-[-171px] right-[-80px] rotate-6" />
                </div>
            </div>
        </div >
    )
}

export default function Home() {

    return (
        <div>
            <Header />
            <Quote />
            <DivBox container='container' div='h-max bg-no-repeat bg-center bg-cover relative after:blueHero after:bgOverlay' style={{ backgroundImage: `url(${overview.img})` }}>
                <div className=' text-white py-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] relative z-10 mx-6 gap-6'>
                    <div className='max-w-[20em] fluid-title font-title font-bold'>
                        <Reveals increment={0.25} variants={{
                            start: { y: 75, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>
                                <div>{overview.lead[0]}</div>
                            </Reveal>
                            <Reveal>
                                <div className='bg-gradient-to-br from-[#9aafb0] from-[37%] to-[#9aafb09a] bg-clip-text text-transparent font-semibold'>{overview.lead[1]}</div>
                            </Reveal>
                        </Reveals>
                    </div>
                    <HashLink smooth={true} to={overview.to} className='grid items-end grid-cols-[auto_27px] gap-3 order-first lg:order-last'>
                        <ToLink className="w-full inline-block order-last text-white/65" />
                        <div className='inline-block fluid-pr font-primary font-semibold max-w-max max-h-max '>{overview.label}</div>
                    </HashLink>
                </div>
            </DivBox>
            <DivBox container='max-w-6xl mx-auto space-y-28 lg:py-[10em] py-[7em] relative' div='sm:bg-[#F1F1F1] overflow-hidden sm:bg-none bg-gradient-to-t from-white to-[#5A97BF] from-[27%] to-[200%]' id="overview">
                <div className='space-y-10 sm:space-y-6  relative z-10 '>
                    <div className='mx-5 bg-gradient-to-br text-transparent w-1em from-[#3a6164] to-[#00c3ff] to-[170%] bg-clip-text font-bold font-title sm:text-center fluid-title leading-tight'>{water.title}</div>
                    <div className='mx-5 grid grid-rows-[min-content_1fr] gap-y-3 sm:gap-y-6'>
                        <Reveals increment={0.15} variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>
                                <div className='border-subtle font-semibold font-primary fluid-sub text-white rounded-xl sm:rounded-3xl after:rounded-2xl bg-no-repeat bg-center bg-cover relative waterCardBlue after:bgOverlay after:z-[-10] z-10 p-10 pb-16 sm:p-14 sm:pl-20 sm:pb-28' style={{ backgroundImage: `url(${water.card[0].img})` }}>
                                    <div >{water.card[0].lead[0]}</div>
                                    <div className=' max-w-[17em] opacity-75 font-medium'>{water.card[0].lead[1]}</div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='border-subtle font-semibold font-primary fluid-modal text-black rounded-xl sm:rounded-3xl lg:px-20 lg:p-14 lg:pb-28 lg:pt-20 p-10 sm:py-16 sm:px-20 lg:py-16 bg-gradient-to-br from-white to-[#79ABAF] from-[50%] to-[145%] relative overflow-hidden'>
                                    <div className='text-[#0A7D86] relative z-10'>{water.card[1].label}</div>
                                    <div className='max-w-[17em] relative z-10 mt-4 sm:mt-0'>{water.card[1].body}</div>
                                    <div className="absolute right-[-5em] 2xl:right-14 h-max w-max top-5">
                                        {React.cloneElement(water.card[1].icon[0], { className: 'hidden md:block h-[10em] fill-[#0A7D86]' })}
                                    </div>
                                    <div className="absolute right-[-1em] lg:right-[-1em] xl:right-[1em] 2xl:right-[7.5em] h-max w-max bottom-[-3em]">
                                        {React.cloneElement(water.card[1].icon[1], { className: 'h-[8em] md:h-[10em] fill-[#0A7D86]' })}
                                    </div>
                                </div>
                            </Reveal>
                        </Reveals>
                    </div>
                </div>

                <div className='space-y-10 sm:space-y-6  relative z-10'>
                    <div className='mx-5 bg-gradient-to-br text-transparent from-[#E36305] to-[#BC0202] to-[300%] bg-clip-text font-bold font-title fluid-title sm:text-center leading-tight'>{phase.title}</div>
                    <div className="mx-5 grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-1 sm:gap-6 gap-3">
                        <Reveals increment={0.15} variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal >
                                <div className='border-subtle font-semibold font-primary fluid-title bg-gradient-to-br rounded-xl sm:rounded-3xl from-white to-[#B49781] from-[50%] to-[145%] p-10 sm:p-14 flex h-full'><div className="xl:max-w-[419px] max-w-[350px] mt-auto leading-tight">{phase.card[0].lead}</div></div>
                            </Reveal>
                            <Reveal style='h-full'>
                                <div className='border-subtle font-semibold font-primary fluid-modal bg-gradient-to-br rounded-xl sm:rounded-3xl from-white to-[#B49781] from-[50%] to-[145%] p-10 sm:py-10 sm:px-16 h-full'>
                                    <div className='text-[#E36305] max-w-[17em]'>{phase.card[1].label}</div>
                                    <div className='max-w-[17em]'>{phase.card[1].body}</div>
                                    <img className='mx-auto w-[10em] mt-7' src={phase.card[1].img} alt="" />
                    
                                </div>
                            </Reveal>
                        </Reveals>
                    </div>
                </div>
                <div className='sm:block hidden absolute w-max h-max left-[-46em] top-[-70px]'>
                    <BlueBlob className=" h-[73em]" />
                </div>
                <div className='sm:block hidden absolute w-max h-max bottom-[6em] right-[-30em]'>
                    <OrangeBlob className=" h-[57em]" />
                </div>
            </DivBox>
            <Trivia isHome={true} />
            <DivBox container='max-w-[90em] mx-auto px-5 relative' div='bg-[#f1f1f1] overflow-hidden' id='explore'>
                <div className='space-y-24 py-[5em] lg:py-[10em]'>
                    <div className='sm:text-center'>
                        <div className='font-bold fluid-pr font-label uppercase text-[#00548B] mt-3'>{explore.label}</div>
                        <div className='font-bold font-title fluid-title leading-tight'>{explore.title}</div>
                        <div className='font-semibold font-primary fluid-modal mt-6 leading-tight'>{explore.body}</div>
                    </div>
                    <div className='grid sm:grid-cols-2 grid-rows-subgrid lg:gap-y-10 gap-2 lg:gap-x-7'>
                        <Reveals variants={{
                            start: { y: 75, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            {explore.card.map((i, index) => (
                                <Reveal>
                                    <div className={`font-primary fluid-title text-white rounded-3xl after:rounded-2xl bg-no-repeat bg-center bg-cover relative ${i.label.toUpperCase() == 'WATER' ? 'waterCardBlue' : 'waterCardOrange'} ${index === explore.card.length - 2 ? 'order-last sm:order-none' : ''} after:bgOverlay px-10 py-14 lg:p-16 z-10 after:z-[-10] space-y-5 h-[13em]`} style={{ backgroundImage: `url(${i.img})` }}>
                                        <div className='font-primary uppercase fluid-pr text-[#f1f1f1] font-semibold'>{i.label}</div>
                                        <div className='font-title fluid-sub font-bold max-w-[12em] leading-tight'>{i.title}</div>
                                        <div className='font-primary fluid-pr font'>{i.body}</div>
                                        {/* BUTTON HERE */}
                                        <HashLink smooth={true} className='text-[18px] uppercase font-primary mt-6 bg-primary rounded-xl p-2 px-4 w-max font-semibold' to={i.to} role='button'>SHOW ME</HashLink>
                                    </div>
                                </Reveal>
                            ))}
                        </Reveals>
                    </div>
                </div>
                <div className='absolute w-max h-max right-[-47em] top-[-10em] rotate-[127.5deg]'>
                    <BlueBlob className=" h-[70em]" />
                </div>
                <div className='absolute w-max h-max bottom-[6em] left-[-20em] rotate[-61.91deg]'>
                    <OrangeBlob className=" h-[57em]" />
                </div>
            </DivBox>
        </div>
    )
}