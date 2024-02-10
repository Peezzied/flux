import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { useRevealContext } from "./RevealFactor"


export default function Reveal({children, style}){
     const view = useRef(null)
     const isView = useInView(view, {once: true})
     const mainControls = useAnimation()
     const {delayFactor, setIncrement} = useRevealContext();

     const viewVars = {
        start:{ opacity: 0, },
        visible:{ opacity: 1,}
     }

     useEffect(()=>{
        if(isView){
            mainControls.start("visible")
            

        }
     }, [isView])

    return(
        <div ref={view} className={`${style} overflow-hidden`}>
            <motion.div
                variants={viewVars}
                initial="start"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delayFactor}}
            >
                {children}
            </motion.div>
        </div>
    )
}