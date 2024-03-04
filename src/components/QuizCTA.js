import { LazyLoadComponent } from "react-lazy-load-image-component";
import DivBox from "./DivBox";
import Reveal, { Reveals } from "./RevealAnimate";
import { AnimatePresence } from "framer-motion";
import Modals, { Modal } from "./Modal";
import { useCallback, useState } from "react";
import { useSharedVals } from "../App";

export default function QuizCTA() {
    const [modalHead, setModalHead] = useState([])
    const [modalData, setModalData] = useState([])
    const { isOpen, setIsOpen } = useSharedVals()
    const closeModal = useCallback(() => {
        setIsOpen(false)
    })
    const openModal = useCallback((i, h) => {
        console.log('modal data', i)
        setModalHead(h)
        setModalData(i)
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
                            <button onClick={()=>{openModal({video: })}} className="rounded-lg bg-primary hover:bg-[#00548b] uppercase font-primary fluid-pr font-bold p-3 px-10 text-white inline-block">Start Now</button>
                        </Reveal>
                    </Reveals>
                </div>
                <AnimatePresence mode="wait">

                    {isOpen && <Modals head={modalHead} close={closeModal}>
                        {modalData.map((i) =>
                            (<Modal img={i.img} video={i.video} label={i.label} icon={i.icon}>{i.lead}</Modal>)
                        )}
                    </Modals>}
                </AnimatePresence>
            </DivBox>
        </LazyLoadComponent>
    )
}