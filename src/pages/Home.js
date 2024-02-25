import Lenis from '@studio-freight/lenis'
import Header from '../components/Header'
import quoteFrom from '../assets/mj-logo.png'
import { useEffect } from 'react'
import Trivia from '../components/TriviaBox'
import DivBox from '../components/DivBox'
import { explore, overview, phase, water } from '../constants/home'
import { Link } from 'react-router-dom'


const Hexa = ({...props})=>(
    <svg {...props} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" fill='currentColor' preserveAspectRatio='none'>
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g><g><g><path d="M59.5,19L45,27.1v16.2v16.2l14.8,7.5l14.8,7.5L90,67l15.3-7.6l0-16.1V27.2L90,19c-8.5-4.5-15.6-8.2-15.8-8.1C74,10.9,67.3,14.6,59.5,19z"/><path d="M24.4,76.1L10,84.2v16.1v16.1l14.8,7.4c8.1,4.1,15,7.4,15.3,7.4c0.3,0,7.2-3.3,15.4-7.3l14.9-7.4l-0.1-16.3l-0.1-16.3l-15-7.9C46.9,71.6,39.9,68,39.5,68C39.1,68,32.3,71.7,24.4,76.1z"/><path d="M94,76.1l-14.4,8.1v16.1v16.1l14.8,7.4c8.1,4.1,15,7.4,15.3,7.4c0.2,0,7.2-3.3,15.4-7.3l14.9-7.3v-16.3l0-16.3l-15.1-8c-8.3-4.3-15.4-7.9-15.8-7.9C108.7,68,101.9,71.7,94,76.1z"/><path d="M165,76.1l-14.4,8.1v16v16.1l14.8,7.4c8.1,4.1,15,7.4,15.3,7.4c0.3,0,7.3-3.3,15.4-7.2l14.8-7.3v-16.4l0-16.4l-15.1-8c-8.3-4.3-15.4-7.9-15.8-7.9C179.7,68,172.9,71.7,165,76.1z"/><path d="M130.7,132.9L116,141v16.3v16.2l14.9,7.4l14.8,7.4l15.3-7.5l15.3-7.5v-16.2V141l-15.3-8.1c-8.4-4.4-15.3-8.1-15.5-8.2C145.4,124.7,138.7,128.4,130.7,132.9z"/><path d="M200.3,132.9l-14.7,8.2v16.3v16.2l14.9,7.4l14.8,7.4l15.4-7.5l15.3-7.5v-16.2V141l-15.3-8.1c-8.4-4.4-15.4-8.1-15.5-8.2C215,124.7,208.3,128.4,200.3,132.9z"/><path d="M59.3,133.2l-14.1,8l-0.1,16.3L45,173.8l14.8,7.4l14.9,7.4l15.3-7.6l15.3-7.5l-0.1-16.2l-0.1-16.2l-15.2-8c-8.3-4.4-15.5-8-15.9-8C73.7,125.2,67.1,128.8,59.3,133.2z"/><path d="M24.8,189.6l-14.5,8.2l-0.1,16.1L10,230l15,7.6l15,7.6l15.2-7.5l15.2-7.6v-16.2v-16.2L55,189.5c-8.5-4.5-15.5-8.2-15.6-8.2C39.4,181.4,32.7,185.1,24.8,189.6z"/><path d="M94.3,189.6l-14.6,8.2v16.1l0,16.1l15,7.6l15,7.5l15.1-7.4l15.1-7.5l0.1-16.2l0.1-16.3l-15.4-8.2c-8.5-4.5-15.5-8.2-15.6-8.2C109,181.4,102.3,185.1,94.3,189.6z"/></g></g></g>
    </svg>
)
function Quote(){
    return(
        <div className="min-h-[27em] grid items-center bg-[#17171b] relative overflow-hidden">
            <div className="text-center container grid justify-center justify-items-center px-10">
                <div className='quotes font-label fluid-pr font-bold text-sky-600 uppercase'>Chemistry Says...</div>
                <div className='quotes font-title font-bold fluid-sub text-gray-200 mt-7'>"Old bond break when new ones are formed."</div>
                <div className='quotes mt-5 w-1/2 border-t-[1px] border-gray-500'><img src={quoteFrom} alt="" className='m-8 w-40 h-auto mx-auto'/></div>
                <div className="absolute h-full w-[850px] md:w-[1024px] lg:w-[1280px] xl:w-[1536px] top-0 z-10">
                    <Hexa className="h-auto w-96 text-[#202026] absolute bottom-[-157px] left-[-80px] rotate-180" />
                    <Hexa className="h-auto w-96 text-[#202026] absolute top-[-171px] right-[-80px] rotate-6" />
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    return(
        <div>
            <Header />
            <Quote />
            <DivBox container='container' div='h-max bg-no-repeat bg-center bg-cover relative after:blueHero after:bgOverlay' style={{backgroundImage: `url(${overview.img})`}}>
                <div className=' text-white py-14 grid grid-cols-2 relative z-10'>
                    <div className='max-w-[20em] fluid-title font-title font-bold'>
                        <div>{overview.lead[0]}</div>
                        <div >{overview.lead[1]}</div>
                    </div>
                    <div className='fluid-pr font-primary font-semibold'><Link to={overview.to}>{overview.label}</Link></div>
                </div>
            </DivBox>
            <DivBox container='container' div='bg-[#F1F1F1]'>
                <div>
                    <div className='text-[#0A7D86] font-bold font-title fluid-title'>{water.title}</div>
                    <div>
                        <div className='font-semibold font-primary fluid-title text-white rounded-3xl after:rounded-2xl bg-no-repeat bg-center bg-cover relative after:waterCard after:bgOverlay p-14 pl-20 pb-28' style={{backgroundImage: `url(${water.card[0].img})`}}>
                            <div className='relative z-10'>{water.card[0].lead[0]}</div>
                            <div className='relative z-10 max-w-[17em]'>{water.card[0].lead[1]}</div>
                        </div>
                        <div className=' font-semibold font-primary fluid-sub text-black rounded-3xl pl-20 p-14 pb-28 pt-20 bg-gradient-to-br from-white to-[#79ABAF] from-[50%] to-[145%]'>
                            <div className='text-[#0A7D86]'>{water.card[1].label}</div>
                            <div className='max-w-[17em]'>{water.card[1].body}</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-[#E36305] font-bold font-title fluid-title'>{phase.title}</div>
                    <div className='font-semibold font-primary fluid-title bg-gradient-to-br rounded-3xl from-white to-[#B49781] from-[50%] to-[145%] p-14 w-max flex'><div className="max-w-[419px] mt-auto leading-tight">{phase.card[0].lead}</div></div>
                    <div className='font-semibold font-primary fluid-sub bg-gradient-to-br rounded-3xl from-white to-[#B49781] from-[50%] to-[145%]'>
                        <div className='text-[#E36305] max-w-[17em]'>{phase.card[1].label}</div>
                        <div className='max-w-[17em]'>{phase.card[1].body}</div>
                        <img src={phase.card[1].img} alt="" />
                        {/* AN IMAGE HERE */}
                    </div>
                </div>
            </DivBox>
            <Trivia isHome={true}/>
            <DivBox container='container' div='bg-[#f1f1f1]'>
                <div>
                    <div>
                        <div className='font-bold fluid-pr font-label uppercase text-[#00548B]'>{explore.label}</div>
                        <div className='font-bold font-title fluid-title'>{explore.title}</div>
                        <div className='font-semibold font-primary fluid-sub'>{explore.body}</div>
                    </div>
                    <div>
                        {explore.card.map((i, index)=>(
                            <div className='font-semibold font-primary fluid-title text-white rounded-3xl after:rounded-2xl bg-no-repeat bg-center bg-cover relative after:waterCard after:bgOverlay p-14 pl-20 pb-28 z-10 after:z-[-10] space-y-5' style={{backgroundImage: `url(${i.img})`}}>
                                <div className='font-primary uppercase fluid-pr text-[#f1f1f1]'>{i.label}</div>
                                <div className='font-title fluid-sub font-bold'>{i.title}</div>
                                <div className='font-primary fluid-pr'>{i.body}</div>
                                {/* BUTTON HERE */}
                                <div className='text-[18px] uppercase font-primary mt-6 bg-primary rounded-xl p-2 px-4 w-max'>SHOW ME</div> 
                            </div>
                        ))}
                    </div>
                </div>
            </DivBox>
        </div>
    )
}