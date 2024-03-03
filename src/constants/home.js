import { Atom, AtomGradient } from '../components/SvgComponents'

export const overview = {
    lead: ['An Exceptional Lookout.', "Let’s have the bigger picture of Phase Changes and Water first."],
    label: 'Start Exploring',
    to: '/#explore',
    img: require('../assets/blue-hero.jpg')
}

export const water = {
    title: 'Structure and Properties of Water',
    card: [
        {
            img: require('../assets/waterBg.png'),
            lead: ["“The river flows in you”", 'Water is also known for universal solvent.']
        },
        {
            label: 'Water Molecule',
            body: 'Water is two hydrogen atoms with partial positive charges bonded to a bent oxygen atom with negative charges.',
            icon: [(<Atom/>), (<AtomGradient/>)]
        }
    ]
}

export const phase = {
    title: 'Phase Changes',
    card: [
        {
            lead: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.'
        },
        {
            label: 'The Holy Grail',
            body: 'here is the process of phase changes.',
            img: require('../assets/home/states.png')
        }
    ]
}

export const explore = {
    label: 'explore',
    title: 'Let’s begin learning, shall we?',
    body: 'Explore, discover - an informational voyage.',
    card: [
        {
            label: 'Water',
            title: 'Wondering Why Ice Floats?',
            body: 'let’s delve into the reason of why ice floats on water. ',
            to: '/water/#ice',
            img: require('../assets/home/ice.png')
        },
        {
            label: 'Phase changes',
            title: 'Why Phase Change Happens?',
            body: '',
            to: '',
            img: require('../assets/home/atom.png')
        },
        {
            label: 'phase changes',
            title: 'The Processes of Phase Changes',
            body: '',
            to: '',
            img: require('../assets/home/phase.png')
        },
        {
            label: 'water',
            title: 'The Science behind Water',
            body: 'taking a closer look on what makes water a water.',
            to: '',
            img: require('../assets/home/fall.png')
        }
    ]
}