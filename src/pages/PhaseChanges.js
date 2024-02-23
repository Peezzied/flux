import { Heading } from "../components/Header"
import phase from '../assets/phase.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate"
import { headerData } from "../constants/data"

export const TopicHeader = ({src, data, name})=>(
    <Heading src={src} container='justify-center'>
    {data.map((i)=>(
        i.name === name &&
        <div className="max-w-[47em] flex flex-col gap-5 px-10 items-center">
            <Reveals increment={0.15} variants={{
                        start: {y: 75, opacity: 0},
                        visible: {y:0, opacity: 1}
                    }}>
                <Reveal>
                    <div className="fluid-pr uppercase font-label font-semibold">{i.heading}</div>
                </Reveal>
                <Reveal>
                    <div className='  leading-[1.1] font-bold font-title text-center fluid-title'>{i.heading}</div>
                </Reveal>
                <Reveal>
                    <div className='font-primary fluid-pr text-neutral-200 text-center mt-7'>{i.subheading}</div>
                </Reveal>
            </Reveals>
        </div>
    ))}
    </Heading>
)

export default function PhaseChanges() {
    return(
        <TopicHeader src={phase} data={headerData} name='phase' />
    )
}