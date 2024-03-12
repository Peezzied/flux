import { Gas, Hygine, Ice, IceCream, Snow, Temp, Frozen } from "../components/SvgComponents";
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
        icon: (<Frozen />),
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
        body: "Stage adjustments happen when issue shifts in between states because of modifications in power or stress. Water's residential properties, like its differing boiling factor with stress, display this sensation. Its high induction heat makes it valuable for cooling down plus environment small amounts. "
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
            description: 'Leaving an ice in low temperature.',
            to: '',
            head: 'Freezing. From liquid to solid.',
            img: require('../assets/home/ice.png'),
            style: 'row-span-3 lg:row-span-5 lg:col-start-1 lg:h-[612px] lg:my-auto',
            modal: [
                {
                    lead: ['Freezing is the process that causes a substance to change from a liquid to a solid.', 'Freezing occurs when the molecules of a liquid slow down enough that their attractions cause them to arrange themselves into fixed positions as a solid.'],
                    video: (<LiteYouTubeEmbed id="zSAcQpIrOSA" />)
                },
                {
                    lead: ['By slowing down microbial growth and enzymatic activity,', 'freezing significantly extends the shelf life of perishable foods, reducing waste and ensuring year-round access to nutritious options.'],
                    label: 'Food and Agriculture.',
                    img: require('../assets/phase/food and agri.png')
                },
                {
                    lead: ['Cryonics.', 'The practice or technique of deep-freezing the bodies of people who have just died, in the hope that scientific advances may allow them to be revived in the future.'],
                    label: 'Huge if True.',
                    img: require('../assets/phase/cryonics.png')
                },
                {
                    lead: ['Biological Sample Preservation.', 'Freezing helps preserve biological samples like DNA, RNA, and cell cultures for future research and analysis.'],
                    label: 'Science and Research.',
                    img: require('../assets/phase/science and research.png')
                },
                {
                    lead: ["The freezing process is not just a simple cooling method;", "it's a transformative tool with profound implications for food preservation, safety, convenience, scientific research, and even environmental sustainability. Its impact on our daily lives is undeniable, making it a crucial element of our modern world."],
                    label: 'Importance'
                },
                {
                    lead: ['From preserving food to enabling scientific advancements, freezing has a lasting impact.', 'In food and agriculture, it extends shelf life and reduces waste. In medicine, cryonics explores freezing bodies for potential future revival. In science, freezing is vital for preserving biological samples like DNA and cell cultures for research.'],
                    label: 'Application'
                },

            ]
        },
        {
            title: 'Melting',
            description: 'An ice cream on a hot summer day.',
            to: '',
            img: require('../assets/phase/iceCream.png'),
            head: 'Melting. From solid to liquid.',
            style: 'lg:row-span-3 lg:mt-auto lg:h-[312px]  row-span-2',
            modal: [
                {
                    lead: ['A process that causes a substance to change from a solid to a liquid.', 'Melting occurs when the molecules of a solid speed up enough that the motion overcomes the attractions so that the molecules can move past each other as a liquid.'],
                    video: (<LiteYouTubeEmbed id="uBn5DFyR5-I"/>) 
                },
                {
                    label: 'Metalworking.',
                    lead: ['Casting:', 'Molten metal is poured into molds to create desired shapes, such as engine blocks, car parts, and sculptures.'],
                    img: require('../assets/phase/metalworking.png')
                },
                {
                    label: 'Plastic Manufacturing',
                    lead: ['Plastic is made by melting polymers and then shaping them into desired forms.'],
                    img: require('../assets/phase/plastic.png')
                },
                {
                    lead: ["Melting is important because it allows for change, transformation, and adaptation in various aspects of nature, daily life, and science.", "It's a fundamental process that shapes our world in countless ways."],
                    label: 'Importance.'
                },
                {
                    lead: ["Melting serves various purposes in daily life, from cooking (butter, chocolate, cheese, ice cream) to industrial applications like plastic manufacturing (shaping melted polymers) and metalworking through casting (creating shapes like engine blocks and sculptures by pouring molten metal into molds)."],
                    label: 'Application.'
                },
            ]
        },
        {
            title: 'CONDENSATION',
            description: 'A glass of ice-cold soda sitting outside on a hot summer day.',
            to: '',
            head: 'Condensation. From gas to liquid.',
            img: require('../assets/phase/sweaty.png'),
            style: 'lg:row-span-2 row-span-2',
            modal: [
                {
                    lead: ['Condensation is a phase within the water cycle in which the gaseous form of water transitions into the liquid state.', 'Evaporation is the opposite phase to condensation; it is when water in its liquid state transitions into a gas'],
                    video: <LiteYouTubeEmbed id="Y9cASQn_SEw"/>
                },
                {
                    lead: ["The water cycle is a process that shows how water moves throughout its different states within the Earth's atmosphere.", "Water vapor is the gaseous form of water and is one of three different states that water can take within our atmosphere."],
                    img: require('../assets/phase/condensation.png')
                },
                {
                    lead: ['Condensation happens one of two ways:', 'Either the air is cooled to its dew point (temperature) or it becomes so saturated with water vapor that it cannot hold any more water.'],
                    img: require('../assets/phase/vapor.png')
                },
                {
                    lead: ['Cloud condensation nuclei (CCN) are microscopic bits of clay, salt, or solid pollutants such as ash from smoke.', 'Water in clouds condenses around these condensation nuclei to form raindrops.'],
                    label: 'Importance.'
                },
                {
                    lead: ['Condensation is vital for water collection in air wells and fog fences, distillation processes, climate control systems, and preventing dampness and mold in buildings.'],
                    label: 'Application.'
                }
            ]
        },
        {
            title: 'DEPOSITION',
            description: 'Water vapor turns directly to solid, like frost',
            to: '',
            head: 'Deposition. From gas to solid.',
            img: require('../assets/phase/frost.png'),
            style: 'lg:row-span-2 row-span-2 lg:col-span-2 lg:row-start-1 lg:col-end-5',
            modal: [
                {
                    lead: ['Deposition is a process reverse to the sublimation, which means the gaseous phase directly converting or changing into the solid state without entering into the liquid. '],
                    video: (<LiteYouTubeEmbed id="UNxnkW6ZAN4"/>)
                },
                {
                    label: 'The Intersection.',
                    lead: ['Sublimation and Deposition are phase changes.', 'Sublimation is an endothermic process and deposition is an exothermic process.'],
                    video: (<LiteYouTubeEmbed id="6pA7WyuJjEg"/>)
                },
                {
                    label: 'Importance.',
                    lead: ['Deposition, the process of adding material gradually to a landform over time, is one of the primary ways that creates and modifies landscape features - it can turn a meander into an oxbow lake for instance!']
                },
                {
                    label: 'Application',
                    lead: ["Sublimation is primarily used for chemical purification, freeze drying, killing cockroaches with napthelene balls, and printing on materials. It separates and purifies compounds under milder conditions, preserves food items, and is used in various industries, including printing."]
                }
            ]
        },
        {
            title: 'VAPORIZATION',
            description: 'Like when boiling a hot water.',
            to: '',
            img: require('../assets/phase/boil.png'),
            head: 'Vaporization. From liquid to gas.',
            style: 'lg:row-span-4 row-span-3 lg:col-start-3 lg:row-start-3',
            modal: [
                {
                    lead: ['Vaporization is the transformation of a liquid into vapor due to increased temperature, leading to higher molecular kinetic energy and reduced intermolecular attraction, causing the molecules to escape as vapors.'],
                    video: (<LiteYouTubeEmbed id="G8R5SESF5H4"/>)
                },
                {
                    label: 'Vaporization vs Evaporation',
                    lead: ["Vaporization is defined as the phase transition of a compound or an element that occurs during the boiling or sublimation process. Evaporation is nothing but a type of vaporization which mostly occurs at temperatures below the boiling point. Vaporization can change the state of matter from a solid or liquid to a gas."],
                    img: require('../assets/phase/vaporization vs evaporation.png')
                },
                {
                    label: 'Importance.',
                    lead:[ "Vaporization is really important because it helps us do a lot of things. It helps cool stuff down. You know when you sweat and feel cooler? That's because the sweat on your skin is evaporating, turning into vapor and taking away some heat."],

                },
                {
                    label: 'Application.',
                    lead: ["Vaporization is a vital part of cooking when boiling water for pasta, rice, or vegetables. As water heats up, it turns into steam, carrying heat energy that cooks the food. The steam also transports flavors and aromas, elevating the overall taste of the dish."]
                }
            ]
        },
        {
            title: 'SUBLIMATION',
            description: 'A solid dry ice turning to gas.',
            to: '',
            head: 'Sublimation. From solid to gas.',
            img: require('../assets/phase/dryIce.png'),
            style: 'lg:row-span-2 row-span-2',
            modal: [
                {
                    lead: ['Sublimation, in chemistry, conversion of a substance from the solid to the gaseous state without its becoming liquid.'],
                    video: (<LiteYouTubeEmbed id="lZTTzAkeSFQ"/>)
                },
                {
                    label: 'The Intersection.',
                    lead: ['Sublimation and Deposition are phase changes.', 'Sublimation is an endothermic process and deposition is an exothermic process.'],
                    video: (<LiteYouTubeEmbed id="6pA7WyuJjEg"/>)
                },
                {
                    label: 'Importance.',
                    lead: ['Sublimation can be important in the recovery of compounds that are suspended or dissolved in a fluid or a solid like dry ice.', 'The compounds can be recovered, at least in crude form, by allowing the suspending matrix to sublimate away.']
                },
                {
                    label: 'Application',
                    lead: ["Sublimation is a process used for chemical purification, freeze drying, killing cockroaches, and printing on materials. It separates and purifies compounds under mild conditions, preserving food items, and is used in napthelene balls and printers. Sublimation is also used in solid air fresheners and dry ice, creating a pleasant scent."]
                }
            ]
        }
    ]
]

export const phaseChange = {
    label: 'Discover',
    title: 'Visualizing Phase Change',
    body: "Phase Diagram is a graphical representation of a substance's equilibrium phases as a function of pressure and temperature. Phase diagrams are useful for predicting the transitions between different phases of a material. It is essential to comprehend how materials behave in various temperature and pressure environments.",
    video: (<LiteYouTubeEmbed id="zn8MzCiVCCc"/>),
    img: require('../assets/trail.png')
}

export const diagram = {
    label: 'zoom in',
    title: 'Behold - The Phase Diagram',
    cards: [
        {
            title: 'Triple Point',
            description: 'The factor on a stage diagram at which the 3 states of issue: gas, fluid, and also strong coexist.'
        },
        {
            title: 'Critical Point',
            description: 'The substance is indistinguishable between liquid and gaseous states. At this stage, solids cannot exits.'
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
        body: 'Phase changes in water are crucial for controlling body temperature, cooling power plants, and climate modification. Phase change materials are used in industries like waste heat recovery, solar cooling, and pharmaceutical and food preservation.'
    },
    {
        img: [
            require('../assets/phase/polar.png'),
            require('../assets/phase/thermal.png'),
            require('../assets/phase/nuclear.png')
        ]
    }
]