import { Info } from "./SvgComponents";

export default function GetInfo() {
    return (
        <div className="absolute top-10 z-50 right-10 group-hover:opacity-100 cursor-pointer transition-opacity opacity-0">
            <Info className=' w-7' />
        </div>
    )
}