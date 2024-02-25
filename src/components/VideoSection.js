import DivBox from "./DivBox";

export default function VideoSection({data, isReversed=false, isBoxed, background=null, isBig, gradient}){
    return(
        <DivBox div={background ? `h-full bg-no-repeat bg-center bg-cover relative after:${gradient} after:bgOverlay` : "bg-gradient-to-l to-[#59BDFF] from-[#F8F8F8] to-[230%] from-[50%]"} container={isBoxed && 'container relative'} style={background && {backgroundImage: `url(${data.img})`}}>
            <div className={`flex items-center justify-center p-12 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="max-w-[29em]">
                    <div className="font-label fluid-pr font-bold text-labelBlue uppercase">{data.label}</div>
                    <div className={`font-title font-bold ${isBig ? 'fluid-title' : 'fluid-sub'}`}>{data.title}</div>
                    <div className="fluid-pr font-primary">{data.body}</div>
                </div>
                <div className="">
                    {data.video}
                </div>
            </div>
        </DivBox>
    )
}