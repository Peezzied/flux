import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import x from '../assets/x.svg'

export const Modal = ({ children, img = null, video = null, label = null, icon = null }) => (

    <div className="bg-[#fafafa] w-full rounded-[28px] fluid-modal leading-tight font-pr font-medium overflow-hidden">
        <div className={`px-24 py-14 space-y-5 leading-tight`}>
            {icon && React.cloneElement({ icon }, { className: 'fill-labelBlue' })}
            {label && <div className=" text-labelBlue">{label}</div>}
            {children}
        </div>
        {img && <img className="object-cover w-full rounded-[28px]" src={img} alt="" />}
        {video && <div className="relative">
            {React.cloneElement(video, { className: 'video rounded-[28px]' })}
        </div>}
    </div>
)



export default function Modals({ children, head, close }) {
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return ()=>{
            document.body.style.overflow = 'unset'
        }
    }, [])
    return ReactDOM.createPortal(
        <div className="w-[100vw] h-[100vh] fixed top-0 right-0 z-[999] overflow-y-scroll">
            <div className="max-w-[70em] mx-auto bg-white rounded-[18px] translate-y-10 h-max relative">
                <div className="absolute right-3 top-3" onClick={close}>
                    <img src={x} alt="" />
                </div>
                <div className="p-[4em] pt-[5em] space-y-24">
                    <div className="space-y-4">
                        <div className="font-title fluid-pr font-semibold uppercase">Phase Changes</div>
                        <div className="font-semibold font-title fluid-title leading-tight">{head}</div>
                    </div>
                    <div className="space-y-6">{children}</div>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}