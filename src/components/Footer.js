import { Link } from "react-router-dom"
import { footer } from "../constants/footer"
import DivBox from "./DivBox"
import logo from '../assets/flux.png'
import { HashLink } from "react-router-hash-link"

function Footer() {
    return (
        <>
        <DivBox container='container' div='bg-dark mt-1'>
            <div className="divide-y-[1px] divide-[#34343A] text-white">
                <div className="space-y-6 p-16">
                    <div className="fluid-sub font-title font-bold">{footer[0].title}</div>
                    <div className="flex flex-row flex-wrap gap-3">
                        {footer[0].tags.map((i)=>(
                            <div className="cursor-pointer p-1.5 px-5 w-max bg-[#303034] rounded-full fluid-pr font-primary line-clamp-1"><HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to={i.to}>{i.name}</HashLink></div>
                        ))}
                    </div>
                </div>
                <div className="p-12 flex flex-row justify-between flex-wrap gap-y-12 gap-x-6">
                    <div className="space-y-6 basis-full lg:basis-auto">
                        <img className="w-auto h-[5em]" src={logo} alt="" srcset="" />
                        <div className="font-primary fluid-pr max-w-[15em] text-secondary">{footer[1].logoDescription}</div>
                    </div>
                    {footer[1].section.map((i)=>(
                        <div className="space-y-5 fluid-pr font-primary w-max ">
                            <div className="font-bold">{i.title}</div>
                            <div className="flex flex-col">{i.links.map((link)=>(<div className="text-secondary"><HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to={link.to}>{link.name}</HashLink></div>))}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </DivBox>
        <div className="bg-[#131317]">
            <div className="text-[#9e9e9e] font-primary  container px-6 py-6 text-center text-[11px]">2024 - STEM 11-3, OUR LADY OF FATIMA UNIVERSITY</div>
        </div>
        </>
    )
}

export default Footer