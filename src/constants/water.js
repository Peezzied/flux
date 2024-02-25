import { Frozen, Hygine, Temp, Drop, Gauge } from '../components/SvgComponents'

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

export const water = {
    label: 'DISCOVER',
    title: 'Water.',
    body: 'Water is also known as the "universal solvent". Why is it known as a universal solvent? Because water is capable of dissolving other substances than any liquid forms.',
    video: (<iframe className="aspect-video w-full" src="https://www.youtube.com/embed/PXdbwMc4d0M?si=XaKSl_ODRxiw5sH2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
}

export const properties = {
    label: 'Zoom in',
    title: 'Properties of Water',
    img: '',
    video: (<iframe width="560" height="315" src="https://www.youtube.com/embed/0eNSnj4ZfZ8?si=jwuW4L7fR75c52Ux&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>),
    source: 'ChemTalk. https://chemistrytalk.org/properties-water-physical-chemical/',
    content: [
        'Water at molecular level.',
        'Water molecule consists of two hydrogen atoms with partial positive charges bonded to an oxygen atom partial with negative charges and its overall structure is bent.'
    ]
}

export const ice = {
    label: 'discover',
    title: 'Why Ice Floats?',
    body: 'Water is also known as the "universal solvent" Why is it known as a universal solvent? because water is capable of dissolving other substances than any liquid forms.',
    video: (<iframe className="aspect-video w-full" src="https://www.youtube.com/embed/pSh8X-R9mxQ?si=mh1UQHr5qj3qGVqq&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>)
}

export const conclusion = [
    {
        icon: (<Hygine/>),
        title: 'Importance',
        body: 'The significance of this topic lies in its crucial role in maintaining a stable climate, temperature, and environment on our planet.'
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