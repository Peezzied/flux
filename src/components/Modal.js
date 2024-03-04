import React, { useEffect, useLayoutEffect, useRef } from "react"
import ReactDOM from "react-dom"
import x from '../assets/x.svg'
import { useSharedVals } from "../App"
import { motion } from "framer-motion"
import { TextFocus } from "./TextFocus"
import { LazyLoadImage } from "react-lazy-load-image-component"

export const Modal = ({ children, img = null, video = null, label = null, icon = null }) => (

    <div className="bg-[#fafafa] w-full rounded-[28px] fluid-modal leading-tight font-primary font-semibold overflow-hidden ">
        {children && <div className={`lg:px-24 lg:py-14 px-7 py-14 space-y-5 leading-tight `}>
            {icon && React.cloneElement({ icon }, { className: 'fill-labelBlue' })}
            {label && <div className=" text-labelBlue mb-3  ">{label}</div>}
            <TextFocus data={children} styles={{ odd: 'text-[#818185]', even: 'text-black'}}/>
        </div>}
        {img && <LazyLoadImage className="object-cover w-full sm:rounded-[28px] overflow-hidden " src={img} alt="" />}
        {video && <div className="relative">
            {React.cloneElement(video, { className: 'video rounded-t-none sm:rounded-t-[28px]' })}
        </div>}
    </div>
)

const backdrop = {
    initial: {
        opacity: 0,
        backdropFilter: 'blur(0px)'
    },
    animate: {
        opacity: 1,
        backdropFilter: 'blur(4px)'

    },
    exit: {
        opacity: 0,
        backdropFilter: 'blur(0px)'
    }
}

export default function Modals({ children, head, close }) {
    const { hidden, setHidden } = useSharedVals()
    const modalRef = useRef()

    useLayoutEffect(() => {
        document.body.style.overflowY = 'hidden'
        setHidden(true)

        const handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                close()
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
            document.body.style.overflowY = 'auto'
        }
    }, [close, setHidden])
    return ReactDOM.createPortal(
        <>
            <motion.div key={1} variants={backdrop} initial='initial' animate='animate' exit='exit' transition={{
                duration: .3,
                type: 'tween'
            }} className="fixed top-0 right-0 bg-black/50 w-[100vw] h-[100vh] z-[49]" onClick={() => { console.log('overlayclicked') }}></motion.div>
            <motion.div key={2} variants={backdrop} initial='initial' animate='animate' exit='exit' transition={{
                duration: .3,
                type: 'tween'
            }} className="inset-0 fixed  z-[50] overflow-y-auto">
                <div className="max-w-[70em] mx-auto my-12 bg-white rounded-[18px] h-max relative" ref={modalRef}>
                    <div className="sticky float-end top-3 mr-3 mt-3" onClick={close}>
                        <LazyLoadImage src={x} alt="" className=" cursor-pointer" />
                    </div>
                    <div className=" py-[5em] space-y-24">
                        <div className="space-y-4 lg:mx-[4em]  mx-[2.7em] ">
                            <div className="font-title fluid-pr font-semibold uppercase">Phase Changes</div>
                            <div className="font-semibold font-title fluid-title leading-tight">{head}</div>
                        </div>
                        <div className="sm:mx-[4em]  mx-[1.7em]  space-y-6">{children}</div>
                    </div>
                </div>

            </motion.div>

        </>
        ,
        document.getElementById('modal')
    )
}