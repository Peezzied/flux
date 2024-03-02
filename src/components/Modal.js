import React, { useEffect, useLayoutEffect } from "react"
import ReactDOM from "react-dom"
import x from '../assets/x.svg'
import { useSharedVals } from "../App"

export const Modal = ({ children, img = null, video = null, label = null, icon = null }) => (

    <div className="bg-[#fafafa] w-full rounded-[28px] fluid-modal leading-tight font-pr font-medium overflow-hidden ">
        <div className={`lg:px-24 lg:py-14 px-7 py-14 space-y-5 leading-tight `}>
            {icon && React.cloneElement({ icon }, { className: 'fill-labelBlue' })}
            {label && <div className=" text-labelBlue">{label}</div>}
            {children}
        </div>
        {img && <img className="object-cover w-full sm:rounded-[28px] overflow-hidden " src={img} alt="" />}
        {video && <div className="relative">
            {React.cloneElement(video, { className: 'video rounded-t-none sm:rounded-t-[28px]' })}
        </div>}
    </div>
)



export default function Modals({ children, head, close }) {
    const {hidden, setHidden} = useSharedVals()
    useLayoutEffect(()=>{
        document.body.style.overflowY = 'hidden'

            setHidden(true)
        
        return ()=>{
            document.body.style.overflowY = 'auto'
        }
    }, [])
    return ReactDOM.createPortal(
        <div className="w-[100vw] h-[100vh] fixed top-0 right-0 z-[999] overflow-y-auto">
            <div className="max-w-[70em] mx-auto bg-white rounded-[18px] sm:translate-y-10 h-max relative overflow-y-auto">
                <div className="absolute right-3 top-3" onClick={close}>
                    <img src={x} alt="" />
                </div>
                <div className=" pt-[5em] space-y-24">
                    <div className="space-y-4 lg:mx-[4em]  mx-[2.7em] ">
                        <div className="font-title fluid-pr font-semibold uppercase">Phase Changes</div>
                        <div className="font-semibold font-title fluid-title leading-tight">{head}</div>
                    </div>
                    <div className="sm:mx-[4em]  mx-[1.7em]  space-y-6">{children}</div>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}