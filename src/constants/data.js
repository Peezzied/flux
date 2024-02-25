import { Drop, Frozen, Gauge } from "../components/SvgComponents"

export const menuItems = [
    {
        name: 'explore',
        route: '/#explore'
    },
    {
        name: 'home',
        route: '/'
    },
    {
        name: 'about',
        route: '/about'
    },
    {
        name: 'references',
        route: '/references'
    },

]
export const contentNavigator = [
    {
        title: 'Phase Changes',
        child: [
            {
                title: 'Overview',
                to: '/phase-changes'
            },
            {
                title: 'Sub topic 2',
                to: '/phase-changes#'
            },
            {
                title: 'Sub topic 3',
                to: '/phase-changes#'
            },
        ]
    },
    {
        title: 'Water',
        child: [
            {
                title: 'Overview',
                to: '/water'
            },
            {
                title: 'Sub topic 2',
                to: '/water#'
            },
            {
                title: 'Sub topic 3',
                to: '/water#'
            },
        ]
    }
]
export const headerData = [
    {
            name: 'home',
            label: {
                main: 'flux presents:',
                typed: ['^1500 explained', 'explore', 'discover', 'a deep dive.']
            },
            heading: 'Phase Changes, Structure and Properties of Water',
            subheading: 'A Flux 5 Special sailing through the scientific odyssey of Phase Changes from the interaction between energy and matter while unraveling the Structure and Properties of water along the voyage.',
            start: {
                label: 'Start Journey',
                to: '#'
            }
    },
    {       
            name: 'water',
            label: "let's talk about",
            heading: 'Structure and Properties of Water',
            subheading: ''
    },
    {
            name: 'phase',
            label: "let's talk about",
            heading: 'Phase Changes',
            subheading: ''
    }
]


