import { Gas, Hygine, Ice, IceCream, Snow, Temp } from "../components/SvgComponents";
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export const phaseDarkSection = [
    {
        icon: (<Ice />),
        title: 'Liquid to Solid',
        label: 'Freezing'
    },
    {
        icon: (<IceCream />),
        title: 'Solid to Liquid',
        label: 'Melting'
    },
    {
        icon: (<Gas />),
        title: 'Liquid to Gas',
        label: 'Vaporization'
    },
    {
        icon: (<Gas />),
        title: 'Gas to Liquid',
        label: 'Condensation'
    },
    {
        icon: (<Gas />),
        title: 'Gas to Solid',
        label: 'Deposition'
    },
    {
        icon: (<Snow />),
        title: 'Solid to Gas',
        label: 'Sublimation'
    },
]

export const properties = [
    {
        label: 'Discover',
        title: 'Phase Changes',
        body: "Stage adjustments happen when issue shifts in between states because of modifications in power or stress. Water's residential properties, like its differing boiling factor with stress, display this sensation. Its high induction heat makes it valuable for cooling down plus environment small amounts. Supercritical liquids a state past gas as well as fluid have sensible applications in modern-day innovation."
    },
    {
        title: 'Zoom In.',
        description: 'Watch the video to further expand your understanding.',
        video: {
            title: 'Phases of Matter & Phase Changes',
            modal: [
                {
                    video: (<LiteYouTubeEmbed id="CMUmQRgJAo0"/>)
                }
            ]
        }
    },
    [
        {
            title: 'freezing',
            description: 'Leaving a ice in low temperature.',
            to: '',
            head: 'Freezing. Leaving a ice in low temperature.',
            img: require('../assets/home/ice.png'),
            style: 'row-span-3 lg:row-span-5 lg:col-start-1 lg:h-[612px] lg:my-auto',
            modal: [
                {
                    lead: 'Freezing is the process that causes a substance to change from a liquid to a solid. Freezing occurs when the molecules of a liquid slow down enough that their attractions cause them to arrange themselves into fixed positions as a solid.',
                    video: (<LiteYouTubeEmbed id="zSAcQpIrOSA" />)
                },
                {
                    lead: 'Freezing is the process that causes a substance to change from a liquid to a solid. Freezing occurs when the molecules of a liquid slow down enough that their attractions cause them to arrange themselves into fixed positions as a solid.'
                },
            ]
        },
        {
            title: 'Melting',
            description: 'An ice cream on a hot summer day.',
            to: '',
            img: require('../assets/phase/iceCream.png'),
            style: 'lg:row-span-3 lg:mt-auto lg:h-[312px]  row-span-2'
        },
        {
            title: 'CONDENSATION',
            description: 'A glass of ice-cold soda sitting outside on a hot summer day.',
            to: '',
            img: require('../assets/phase/sweaty.png'),
            style: 'lg:row-span-2 row-span-2'
        },
        {
            title: 'DEPOSITION',
            description: 'Water vapor turns directly to solid, like frost',
            to: '',
            img: require('../assets/phase/frost.png'),
            style: 'lg:row-span-2 row-span-2 lg:col-span-2 lg:row-start-1 lg:col-end-5'
        },
        {
            title: 'VAPORIZATION',
            description: 'When boiling a hot water.',
            to: '',
            img: require('../assets/phase/boil.png'),
            style: 'lg:row-span-4 row-span-3 lg:col-start-3 lg:row-start-3'
        },
        {
            title: 'SUBLIMATION',
            description: 'A solid dry ice turning to gas.',
            to: '',
            img: require('../assets/phase/dryIce.png'),
            style: 'lg:row-span-2 row-span-2'
        }
    ]
]

export const phaseChange = {
    label: 'Discover',
    title: 'Visualizing Phase Change',
    body: 'A stage layout is an illustration made use of in physical chemistry, design, mineralogy together with products scientific research. It shows the problems under which distinctive stages of a material coexist in stability offering useful understandings right into stage shifts together with stage security throughout various temperature level plus stress arrays.',
    video: (<LiteYouTubeEmbed id="zn8MzCiVCCc"/>),
    img: require('../assets/trail.png')
}

export const diagram = {
    label: 'zoom in',
    title: 'Behold - The Phase Diagram',
    cards: [
        {
            title: 'Triple Point',
            description: 'the factor on a stage diagram at which the 3 states of issue: gas, fluid, and also strong coexist.'
        },
        {
            title: 'Critical Point',
            description: 'the factor on a stage representation at which the compound is the same in between fluid as well as gaseous states.'
        },
    ],
    img: require('../assets/home/diagram.png')
}


export const curve = {
    label: 'Discover',
    title: 'Heating Curve',
    body: 'The home heating contour is a visual depiction of the connection in between warmth input together with the temperature level of a compound. It can be utilized to establish the melting factor and also the boiling factor of a compound.',
    video: (<LiteYouTubeEmbed id="hklSXPv2vrQ"/>),
    img: require('../assets/volcano.png')
}

export const conclusion = [
    {
        icon: <Hygine />,
        title: 'Importance',
        body: 'The importance of phase change process is related to numerous engineering applications such as casting, welding, thermal energy storage, development of polar regions, temperature control and so on. There are also many natural phenomena that can be analyzed with the aids of the phase change processes.'
    },
    {
        icon: <Temp />,
        title: 'Daily Life Applications',
        body: ''
    },
    {
        img: [
            require('../assets/water/fall.png'),
            require('../assets/water/shower.png'),
            require('../assets/water/ice.png')
        ]
    }
]