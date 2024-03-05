import { Frozen, Hygine, Temp, Drop, Gauge, WaterMolecule } from '../components/SvgComponents'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export const headingWaterData = [
    {
        icon: <Frozen/>,
        title: 'Water freezes at 0 degrees Celsius',
        label: 'Solid'
    },
    {
        icon: <Drop/>,
        title: 'Water remained liquid at room temperature',
        label: 'Liquid'
    },
    {
        icon: <Gauge/>,
        title: 'Water boils at 100 Degrees At Standard Pressure',
        label: 'Gas'
    },
]
export const waterHero = [
    "Water is",
    "all around us.",
    "This makes up",
    "71% of our earth's surface",
    "while",
    "60% of water",
    "is in our bodies.",
    "Water is",
    "tasteless and colorless",
    "type of liquid."
]
export const water = {
    label: 'DISCOVER',
    title: 'Water.',
    body: 'Water is also known as the "universal solvent". Why is it known as a universal solvent? Because water is capable of dissolving other substances than any liquid forms.',
    video: (<LiteYouTubeEmbed id='PXdbwMc4d0M'/>)
}

export const properties = {
    label: 'Zoom in',
    title: 'Structure and Properties of Water',
    img: (<WaterMolecule/>),
    video: (<LiteYouTubeEmbed id='0eNSnj4ZfZ8'/>),
    content: [
        'Water at molecular level.',
        ['Water molecule',
        'consists of two hydrogen atoms',
        'with',
        'partial positive charges bonded to an',
        'oxygen atom',
        'with partial negative charges and its',
        'overall structure is bent']
    ]
}

export const ice = {
    label: 'discover',
    title: 'Why Ice Floats?',
    body: 'Solid water is less dense and floats in liquid water, How can it be possible? A boulder or anything denser than water will sink to the bottom. An object needs to displace fluid with a weight equal to its own in order to float.',
    video: (<LiteYouTubeEmbed id='pSh8X-R9mxQ'/>),
    img: require('../assets/water/water.png')
}

export const conclusion = [
    {
        icon: (<Hygine/>),
        title: 'Importance',
        body: 'The significance of this topic lies in its crucial role in maintaining a stable climate, temperature, and environment on our planet. Additionally, water is a basic human necessity in order to live.'
    },
    {
        icon: (<Temp />),
        title: 'Daily Life Applications',
        body: 'We can incorporate cleanliness and proper hygiene into our daily lives by regularly cleaning our homes. Water plays a crucial role in this process, as it helps to dissolve cleaning products and make them more effective. Additionally, water is essential for our personal hygiene routines, such as bathing, handwashing, and oral care.'
    },
    {
        img: [
            require('../assets/water/fall.png'),
            require('../assets/water/shower.png'),
            require('../assets/water/ice.png')
        ]
    }
]