export const menuItems = [
    {
        name: 'explore',
        route: '/explore'
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
        title: 'Main topic',
        to: '#',
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
    },
    {
        title: 'Main topic 2',
        to: '#',
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
    }
]