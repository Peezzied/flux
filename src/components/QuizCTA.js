import DivBox from "./DivBox";

export default function QuizCTA(){
    return(
        <DivBox container='container' div='bg-[#1D1D1D]'>
            <div className="space-y-3 p-14 pb-24">
                <div className="font-title font-bold fluid-title text-white">Done Reading? Test your knowledge.</div>
                <div className="rounded-lg bg-primary uppercase font-primary fluid-pr font-bold p-3 px-10 text-white inline-block">Start Now</div>
            </div>
        </DivBox>
    )
}