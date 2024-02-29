import DivBox from "./DivBox";
import think from '../assets/svg/thinking.svg'
import volcano from '../assets/volcano.png'
import { Hygine } from "./SvgComponents";

export default function Trivia({isHome=false}){
    return(
    <DivBox container={`${isHome ? 'py-[3em] container' : 'grid grid-cols-1 lg:grid-cols-2 justify-items-center relative items-start'}`} div={`bg-dark ${isHome ? '' : ''} my-3`}>
        <div className={isHome ? `mx-auto max-w-[75em] relative ` : "w-full flex lg:justify-center justify-center"} >
            <div className={`sm:p-5 lg:px-24 sm:pb-10 ${isHome ? 'sm:pl-24' : 'my-[3em]'} p-16 space-y-3  inline-block w-full max-w-[38em]`}>
                <Hygine className='h-9 fill-primary' />
                <div className="fluid-sub font-title font-bold text-white inline-block">Did you know?</div>
                <div className="fluid-pr text-darkText font-primary font-semibold">{/* ADD TRIVIA DATA HERE <<< */}The significance of this topic lies in its crucial role in maintaining a stable climate, temperature, and environment on our planet.</div>
            
            </div>
            {isHome ?
                    <img className="absolute 2xl:top-[-11em] 2xl:right-[-5em] xl:top-[-11em] xl:right-0 xl:scale-100 lg:top-[-9em] lg:right-[-4.5em] lg:scale-[0.80] hidden lg:block" src={think}/>
                :
                    null
                }
        </div>
        <div className="h-[100%] w-full relative hidden lg:block">
            <img src={volcano} alt="" className="absolute h-full w-full object-cover object-center" />
        </div>
    </DivBox>
    )
}