import { headerData } from "../constants/data";
import { TopicHeader } from "./PhaseChanges";
import about from "../assets/about.jpg"
import DivBox from "../components/DivBox";
import { front, info, members, visionMission } from "../constants/about";
import { Arrow, Atom, ExternalLink, ToLink } from "../components/SvgComponents";
import logo from "../assets/flux.png"
import dost from "../assets/dost.svg"
import Reveal, { RevealImage, Reveals } from "../components/RevealAnimate";
import { HashLink } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

const variants = {
    start: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}

function Section({ isReversed, data }) {
    return (
        <div className={`flex ${isReversed ? 'lg:flex-row-reverse ' : 'lg:flex-row'} flex-col items-center sm:items-start sm:justify-around gap-y-6`}>
            <div className="w-[17em]"><RevealImage variants={variants} className="w-full" src={data.img} alt="" /></div>
            <div className="max-w-[30em] flex flex-col justify-center space-y-3">
                <Reveals variants={{
                    start: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}>
                    <Reveal>
                        <div className={`fluid-title font-title font-bold text-primary`}>{data.title}</div>
                    </Reveal>
                    <Reveal>
                        <div className={`fluid-pr font-primary  `}>{data.body}</div>
                    </Reveal>
                </Reveals>
            </div>
        </div>
    )
}
export default function About() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Learn about flux."
                />
                <title>Flux - About</title>
            </Helmet>
            <TopicHeader src={about} data={headerData} name='about' img={true} size="fluid-title-xl" />
            <DivBox container='container max-w-6xl mx-auto' div='bg-[#17171b] px-6 overflow-hidden'>
                <div className="font-primary grid items-center relative z-10">
                    <div className=" h-[100dvh] items-center flex flex-col justify-center w-full gap-x-7 max-w-[50em] mx-auto gap-y-14 ">
                        <div className="flex flex-col col-span-2 items-center h-auto">
                            <div className=" space-y-2">
                                <RevealImage variants={variants} src={logo} alt="" className="mx-auto px-[3em]" />
                                <Reveal variants={variants}>
                                    <div className="text-white fluid-pr text-center">{front[0].label}</div>
                                </Reveal>
                            </div>
                        </div>
                        <div className="flex flex-row gap-12">
                            <Reveals increment={0.15} variants={{
                                start: { y: 100, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}>
                                <Reveal style="text-white fluid-title font-title font-bold text-center hidden lg:flex items-center ">
                                    {front[0].title}
                                </Reveal>
                                <Reveal style="text-[#C0C0C0] fluid-pr lg:text-start col-span-2 lg:col-span-1 max-w-[33em] lg:max-w-[20em] text-center justify-self-center lg:justify-self-start">
                                    {front[0].body}
                                </Reveal>
                            </Reveals>
                        </div>

                    </div>

                    <div className=" h-[100dvh] flex flex-col justify-center lg:flex-row gap-x-[5em] mx-auto gap-y-6 items-center">
                        <Reveals increment={0.15} variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <Reveal>
                                <div className="text-[#C0C0C0] fluid-pr flex text-justify lg:text-start h-max max-w-[34em] lg:max-w-[27em]" >{front[1].lead}</div>
                            </Reveal>
                            <Reveal>
                                <div className="max-w-[20em] divide-y-2 divide-solid divide-[#343434] justify-self-center h-max">
                                    {front[1].link.map((i) => (
                                        <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to={i.to} className="grid grid-cols-[1fr_auto]">
                                            <div className="space-y-2 py-7">
                                                <div className="text-white text-[24px] font-semibold leading-tight ">{i.title}</div>
                                                <div className="text-[#C0C0C0] fluid-pr font-semibold">{i.body}</div>
                                            </div>
                                            <div className="my-auto">
                                                <Arrow className="fill-white rotate-180 w-14" />
                                            </div>
                                        </HashLink>
                                    ))}
                                </div>
                            </Reveal>
                        </Reveals>
                    </div>

                    <div className=" h-[100dvh] flex-col lg:flex-row flex max-w-[33em] lg:max-w-[54em] gap-6 lg:gap-x-[7em] mx-auto justify-center">
                        <Reveals increment={0.15} variants={{
                            start: { y: 100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}>
                            <div className="flex justify-center lg:justify-end max-w-[10em] mx-auto"><RevealImage variants={variants} src={dost} alt="" srcset="" /></div>
                            <Reveal style="text-[#C0C0C0] fluid-pr h-max lg:my-auto text-center lg:text-start">
                                {front[2].lead}
                            </Reveal>
                        </Reveals>
                    </div>

                    {/* bg icons */}
                    <div className="absolute 
                        2xl:top-[25em] 
                        2xl:-left-[40em]
                        top-[25em] 
                        -left-[35em]
                        w-[50em] rotate-45 -z-10">
                        <Atom className="fill-[#1D1D22]" />
                    </div>
                    <div className="absolute 
                        2xl:-top-[10em] 
                        2xl:-right-[30em]
                        -top-[10em] 
                        -right-[25em]
                        lg:-right-[20em]
                        w-[40em] -z-10">
                        <Atom className="fill-[#212129]" />
                    </div>
                    <div className="absolute 
                        2xl:top-[50em] 
                        2xl:-right-[50em]
                        top-[50em] 
                        -right-[40em]
                        hidden
                        sm:block
                        w-[50em] rotate-12 -z-10">
                        <Atom className="fill-[#212129]" />
                    </div>
                    <div className="absolute 
                        2xl:top-[90em] 
                        2xl:-left-[30em] 
                        sm:top-[90em]
                        top-[100em]  
                        -left-[25em] 
                        w-[40em] -z-10">
                        <Atom className="fill-[#1D1D22]" />
                    </div>
                    <div className="absolute 
                        2xl:top-[140em] 
                        2xl:-right-[30em]
                        sm:top-[140em] 
                        top-[157em]
                        sm:-right-[30em]
                        -right-[15em]
                        w-[30em]
                        sm:w-[50em] -z-10">
                        <Atom className="fill-[#1D1D22]" />
                    </div>
                </div>
            </DivBox>
            <DivBox container='container max-w-6xl mx-auto' div='px-6'>
                <div className="space-y-12 divide-y-2 divide-[#E5E5E5] my-[7em] sm:my-[15em]">
                    <div className="mx-auto max-w-xl lg:max-w-5xl space-y-16 lg:space-y-14 my-[4em] lg:my-[7em]">
                        {visionMission.map((i, index) => (
                            <Section isReversed={index % 2 === 0 ? false : true} data={i} />
                        ))}
                    </div>

                    <div>
                        <div className="mx-auto my-[4em] lg:my-[7em] space-y-6  lg:space-y-12  ">
                            <div className="fluid-title font-bold font-title text-center text-primary">{members.title}</div>
                            <div className=" divide-y-2 divide-[#E5E5E5] ">

                                {members.list
                                    .slice()
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((i, index) => (
                                        <div className="flex flex-row gap-6 py-6 max-w-xl mx-auto" key={index}>
                                            <div className="min-w-[4.7em] flex"><LazyLoadImage className="w-full mb-auto" src={i.avatar} alt="" /></div>
                                            <div className="font-primary max-w-full text-[#4B4B4B] space-y-1">
                                                <Reveal variants={{
                                                    start: { y: 100, opacity: 0 },
                                                    visible: { y: 0, opacity: 1 }
                                                }}>
                                                    <div className="fluid-pr2 font-bold">{i.name}</div>
                                                </Reveal>
                                                <Reveal variants={{
                                                    start: { y: 100, opacity: 0 },
                                                    visible: { y: 0, opacity: 1 }
                                                }}>
                                                    <div className="fluid-pr">{i.description}</div>
                                                </Reveal>
                                            </div>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </div>

                </div>
            </DivBox>
            <DivBox container='container max-w-2xl mx-auto' div='bg-[#fafafa] px-6'>
                <div className="flex justify-center flex-col my-20">
                    <div className="space-y-6">
                        <div className="fluid-title text-primary font-title font-bold text-center leading-tight">{info.title}</div>
                        <div className="fluid-pr text-[#4B4B4B] font-primary text-center max-w-xl mx-auto">{info.body}</div>
                    </div>

                    <a href={info.to} className=' mx-auto text-[16px] uppercase font-primary mt-12 bg-primary rounded-xl p-2 px-4 w-max font-semibold text-white' role='button'>SOURCE CODE</a>

                </div>
            </DivBox>
        </>
    )
}