import { motion, useAnimation, useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"

const viewVars = {
    start: { opacity: 0, },
    visible: { opacity: 1, }
}
export default function Reveal({ children, style, delay, variants = viewVars, ...props }) {
    const view = useRef(null)
    const isView = useInView(view, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isView) {
            mainControls.start("visible")


        }
    }, [isView, mainControls])

    return (
        <motion.div {...props} ref={view} className={`${style} `} variants={variants}
            initial="start"
            animate={mainControls}
            transition={{ duration: 0.5, delay: delay }}>

            {children}

        </motion.div>
    )
}
export function Reveals({ children, increment, variants }) {
    const childrenArray = React.Children.toArray(children);
    return (
        <>
            {React.Children.map(childrenArray, (child, index) => {
                // Calculate delay for each child based on increment
                const delay = index * increment;
                // Clone child element with updated delay prop
                return React.cloneElement(child, { delay, variants });
            })}
        </>
    );
}

export function RevealImage({ src, delay, variants, ...props }) {
    const view = useRef(null)
    const isView = useInView(view, { once: true })
    const mainControls = useAnimation()


    useEffect(() => {
        if (isView) {
            mainControls.start("visible")


        }
    }, [isView, mainControls])
    return (
        <motion.img variants={variants}
            ref={view}
            initial="start"
            animate={mainControls}
            transition={{ duration: 0.5, delay: delay }}
            src={src} />
    )
}