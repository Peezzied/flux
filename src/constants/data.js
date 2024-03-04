import { Drop, Frozen, Gauge } from "../components/SvgComponents"

export const menuItems = [
    {
        name: 'explore',
        route: '/#explore'
    },
    {
        name: 'home',
        route: '/#top'
    },
    {
        name: 'about',
        route: '/about#top'
    },
    {
        name: 'references',
        route: '/references#top'
    },

]
export const contentNavigator = [
    {
        title: 'Phase Changes',
        child: [
            {
                title: 'Overview',
                to: '/phase-changes#top'
            },
            {
                title: 'Phases',
                to: '/phase-changes#phases'
            },
            {
                title: 'Visualizing',
                to: '/phase-changes#visualizing'
            },
            {
                title: 'Diagram',
                to: '/phase-changes#processes'
            },
            {
                title: 'Heating Curve',
                to: '/phase-changes#heating-curve'
            },
            {
                title: 'Conclusion',
                to: '/phase-changes#conclusion'
            },
        ]
    },
    {
        title: 'Water',
        child: [
            {
                title: 'Overview',
                to: '/water#top'
            },
            {
                title: 'What it is?',
                to: '/water#about'
            },
            {
                title: 'Structure',
                to: '/water#structure-properties'
            },
            {
                title: 'Properties',
                to: '/water#structure-properties'
            },
            {
                title: 'Solid Water',
                to: '/water#ice'
            },
            {
                title: 'Conclusion',
                to: '/water#conclusion'
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
        subheading: 'A Flux Chem Special sailing through the scientific odyssey of Phase Changes from the interaction between energy and matter while unraveling the Structure and Properties of water along the voyage.',
        start: {
            label: 'Start Journey',
            to: '#overview'
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
    },
    {
        name: 'about',
        heading: 'About',
    },
    {
        name: 'references',
        heading: 'References',
    }
]


