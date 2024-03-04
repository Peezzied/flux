import { headerData } from "../constants/data";
import { TopicHeader } from "./PhaseChanges";
import reference from "../assets/library.jpg"
import { references } from "../constants/references";
import DivBox from "../components/DivBox";
import { ExternalLink } from "../components/SvgComponents";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

function Medias({ data }) {
    const items = useRef()
    const [isMouseDown, setIsMouseDown] = useState(true)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsMouseDown(true)
        setStartX(e.pageX - - items.current.offsetLeft)
        setScrollLeft(items.current.scrollLeft)
    }
    const handleMouseLeave = () => {
        setIsMouseDown(false)
    }
    const handleMouseUp = () => {
        setIsMouseDown(false)
    }
    const handleMouseMove = (e) => {
        if (!isMouseDown) return
        e.preventDefault()
        const x = e.pageX - items.current.offsetLeft
        const walk = (x - startX) * 2
        items.current.scrollLeft = scrollLeft - walk
    }
    return (

        <div className="space-y-3 ">
            <div className="fluid-sub max-w-4xl px-6 mx-auto text-[#4B4B4B] font-semibold font-title">Medias</div>
            <div
                ref={items}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={` ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'} overflow-x-auto scrollable`} >
                <div className="pl-[calc(((100vw-896px)/2)+24px)] grid grid-cols-[max-content] grid-flow-col gap-3 ">
                    {data.map((i) => (
                        <div className="w-[clamp(18.5rem,14.5rem+20vi,30rem)] h-[20em] relative group overflow-hidden ">
                            <LazyLoadImage className="w-full h-full object-center object-cover" src={i.img} alt="" />
                            <a href={i.to} className="cursor-pointer absolute bottom-6 right-6 z-20 w-10 group-hover:translate-y-0 translate-y-16 transition-transform duration-500 ease-out" role="button">
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
                        <LazyLoadComponent>
                            {data.sources
                                .slice()
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((i, index) => (
                                    <div className="flex flex-row gap-6 p-3 px-6" key={index + 1}>
                                        <a className="flex justify-center" role="button" href={i.to}>
                                            <ExternalLink className="w-7 fill-primary" />
                                        </a>
                                        <div className="font-primary">
                                            <div className="font-semibold fluid-pr2 text-[#4B4B4B] line-clamp-1">{i.title}</div>
                                            <div className="fluid-pr text-[#4B4B4B] line-clamp-1">{i.description}</div>
                                        </div>
                                    </div>
                                ))}
                        </LazyLoadComponent>
                    </div>
                </div>
            </div>
        </DivBox>
    )
}

export default function References() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The topics' information sources and medias."
                />
                <title>Flux - References</title>
            </Helmet>
            <TopicHeader src={reference} data={headerData} name='references' img={true} size="fluid-title-xl" />
            <div className="space-y-16">
                <Section data={references[0]} />
                <Section data={references[1]} />
                <Section data={references[2]} />
            </div>
        </>
    )
}//3w