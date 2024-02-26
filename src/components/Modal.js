import { useEffect } from "react"
import ReactDOM from "react-dom"
import ex from '../assets/blue-hero.jpg'

export const ModalContent =({children, img=null})=>(
    
                <div className="bg-[#fafafa] w-full rounded-[28px] space-y-16 fluid-modal leading-tight font-pr font-semibold">
                    <div className={`${img ? '' : 'pb-16'} px-24 pt-16 space-y-5`}>
                        {children}
                    </div>
                    {img && <img className="object-cover w-full rounded-[38px]" src={img} alt="" />}
                </div>
            
)

export default function Modal({children, isOpen}){
    if (!isOpen) return null

    
    return ReactDOM.createPortal(
        <div className="w-[100vw] h-[100vh] fixed top-0 right-0 z-[999] overflow-y-scroll">
            <div className="max-w-[70em] mx-auto bg-white rounded-[18px] p-[4em] pt-[5em] translate-y-10 h-max">
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}