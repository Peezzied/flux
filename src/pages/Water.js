import { Heading } from "../components/Header";
import vbg from '../assets/water.mp4'
import Reveal, { Reveals } from "../components/RevealAnimate";
import { TopicHeader } from "./PhaseChanges";
import { headerData } from "../constants/data";

export default function Water() {
    return(
        <TopicHeader src={vbg} data={headerData} name='water' />
    )
}   