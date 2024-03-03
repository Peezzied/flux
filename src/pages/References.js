import { headerData } from "../constants/data";
import { TopicHeader } from "./PhaseChanges";
import reference from "../assets/library.jpg"
import { references } from "../constants/references";
import DivBox from "../components/DivBox";
import { ExternalLink } from "../components/SvgComponents";

function Medias({ data }) {
    return (
        <div className="space-y-3 ">
            <div className="fluid-sub max-w-4xl px-6 mx-auto text-[#4B4B4B] font-semibold font-title">Medias</div>
            <div className="ml-[calc(((100vw-896px)/2)+24px)] overflow-x-auto" >
                <div className="grid grid-cols-[max-content] grid-flow-col gap-3 ">
                    {data.map((i) => (
                        <div className="w-[30em] relative group overflow-hidden cursor-pointer">
                            <img className="w-full object-center object-cover" src={i.img} alt="" />
                            <a href={i.to} className="absolute bottom-6 right-6 z-20 w-10 group-hover:translate-y-0 translate-y-16 transition-transform duration-500 ease-out" role="button">
                                <ExternalLink className="fill-white" />
                            </a>
                            <div className="absolute top-0 right-0 w-full h-full z-10 bg-gradient-to-t from-[#17171b] group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Section({ data }) {
    return (
        <DivBox div='overflow-hidden'>
            <div className="fluid-title font-title font-bold bg-[#fafafa] text-center p-14">{data.title}</div>
            <div className="space-y-12 my-24 lg:my-32">

                <Medias name="Images" data={data.images} />
                <div className="space-y-3 max-w-4xl px-6 mx-auto">
                    <div className="fluid-sub text-[#4B4B4B] font-semibold font-title">Sources</div>
                    <div className=" border-2 border-[#E5E5E5] divide-y-2 divide-[#E5E5E5] rounded-[20px]">
                        {data.sources.map((i) => (
                            <div className="flex flex-row gap-6 p-3 px-6">
                                <a className="flex justify-center" role="button" href={i.to}>
                                    <ExternalLink className="w-7 fill-primary" />
                                </a>
                                <div className="font-primary">
                                    <div className="font-semibold fluid-pr2 text-[#4B4B4B]">{i.title}</div>
                                    <div className="fluid-pr text-[#4B4B4B]">{i.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DivBox>
    )
}

export default function References() {
    return (
        <>
            <TopicHeader src={reference} data={headerData} name='references' img={true} size="fluid-title-xl" />
            <div className="space-y-16">
                <Section data={references[0]} />
                <Section data={references[1]} />
            </div>
        </>
    )
}//3w