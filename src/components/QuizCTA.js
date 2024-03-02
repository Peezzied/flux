import DivBox from "./DivBox";
import Reveal, { Reveals } from "./RevealAnimate";

export default function QuizCTA() {
    return (
        <DivBox container='container' div='bg-[#1D1D1D]'>
            <div className="space-y-10 sm:space-y-5 p-14 pb-24">
                <Reveals variants={{
                    start: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}>
                    <Reveal>
                        <div className="font-title font-bold fluid-title text-white leading-tight">Done Reading? Test your knowledge.</div>
                    </Reveal>
                    <Reveal>
                        <div className="rounded-lg bg-primary uppercase font-primary fluid-pr font-bold p-3 px-10 text-white inline-block">Start Now</div>
                    </Reveal>
                </Reveals>
            </div>
        </DivBox>
    )
}