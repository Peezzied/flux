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
                title: 'Sub topic 1',
                to: '/water'
            },
            {
                title: 'Sub topic 2',
                to: '/sad'
            },
            {
                title: 'Sub topic 3',
                to: '/sad'
            },
        ]
    },
    {
        title: 'Water',
        child: [
            {
                title: 'Sub topic 1',
                to: '#'
            },
            {
                title: 'Sub topic 2',
                to: '#'
            },
            {
                title: 'Sub topic 3',
                to: '#'
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