import { LazyLoadComponent } from "react-lazy-load-image-component";
import DivBox from "./DivBox";
import Reveal, { Reveals } from "./RevealAnimate";
import { AnimatePresence } from "framer-motion";
import Modals, { Modal } from "./Modal";
import { useCallback, useState } from "react";
import { useSharedVals } from "../App";

function QuizEmbed() {
    return (
        <>
            <iframe className="w-full h-[30em] p-3" frameborder="0" id="spFrame65e5c4d1d84c1" src="https://www.sporcle.com/framed/?v=9&pm&gid=2f6d18ba9d82&fid=65e5c4d1d84c1" ></iframe><script type="text/javascript" src="https://www.sporcle.com/embed/embed.js?v=65e5c4d1d84c1"></script>
        </>
    )
}

export default function QuizCTA() {
    const [ isOpen, setIsOpen ] = useState()
    const closeModal = useCallback(() => {
        setIsOpen(false)
    })
    const openModal = useCallback(() => {
        setIsOpen(true)
    })
    return (
        <LazyLoadComponent>

            <DivBox id='quiz' container='container' div='bg-[#1D1D1D]'>
                <div className="space-y-10 sm:space-y-5 p-14 pb-24">
                    <Reveals variants={{
                        start: { y: 100, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                    }}>
                        <Reveal>
                            <div className="font-title font-bold fluid-title text-white leading-tight">Done Reading? Test your knowledge.</div>
                        </Reveal>
                        <Reveal>
                            <button onClick={openModal} className="rounded-lg bg-primary hover:bg-[#00548b] uppercase font-primary fluid-pr font-bold p-3 px-10 text-white inline-block">Start Now</button>
                        </Reveal>
                    </Reveals>
                </div>
                <AnimatePresence mode="wait">
                    {isOpen && <Modals head='Test your Knowledge.' close={closeModal}>
                        <Modal video={(<QuizEmbed />)} />
                    </Modals>}
                </AnimatePresence>
            </DivBox>
        </LazyLoadComponent>
    )
}