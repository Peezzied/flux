import Lenis from '@studio-freight/lenis'
import Header from '../components/Header'
import { useEffect } from 'react'
export default function Home() {
    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])
    return(
        <div>
            <Header />
            <div className="h-[100vh]"></div>
            <div className="h-[100vh]"></div>
            <div className="h-[100vh]"></div>
        </div>
    )
}