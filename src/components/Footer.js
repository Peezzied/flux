import { Link } from "react-router-dom"
import { footer } from "../constants/footer"
import DivBox from "./DivBox"
import logo from '../assets/chemphase.png'

function Footer() {
    return (
        <DivBox container='container' div='bg-dark mt-1'>
            <div className="divide-y-[1px] divide-[#34343A] text-white">
                <div className="space-y-6 p-16">
                    <div className="fluid-sub font-title font-bold">{footer[0].title}</div>
                    <div className="flex flex-row flex-wrap gap-3">
                        {footer[0].tags.map((i)=>(
                            <div className="p-1.5 px-5 w-max bg-[#303034] rounded-full fluid-pr font-primary">{i}</div>
                        ))}
                    </div>
                </div>
                <div className="p-12 flex flex-row justify-between flex-wrap">
                    <div className="space-y-1">
                        <img className="w-auto h-[10em]" src={logo} alt="" srcset="" />
                        <div className="font-primary fluid-pr max-w-[15em]">{footer[1].logoDescription}</div>
                    </div>
                    {footer[1].section.map((i)=>(
                        <div className="space-y-5 fluid-pr font-primary w-max">
                            <div className="font-bold">{i.title}</div>
                            <div className="flex flex-col">{i.links.map((link)=>(<div className="text-secondary"><Link to={link.to}>{link.name}</Link></div>))}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-[#131317] font-primary fluid-pr">2024 - STEM 11-3, OUR LADY OF FATIMA UNIVERSITY</div>
        </DivBox>
    )
}

export default Footer