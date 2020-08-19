console.log('Beam me up, Scotty!');

let kingdom = {
    population: {
        start: 0,
        occupird: 0,
        total: 0
    },
    castle: {
        level: 0,
        buff: 0,
        lvlcap: 10
    },
    cottages: {
        units: 0,
        occupied: 0,
        total: 0
    },
    farms: {
        units: 250,
        buff: 0,
        total: 250
    },
    sawmills: {
        units: 50,
        buff: 0,
        total: 50
    },
    forges: {
        units: 0,
        occupied: 0,
        total: 0
    },
    soldiers: {
        types: []
    }
}

let resources = {
    food: {
        start: 250, //Always 250, its the amount you start with
        modifier: 0
        total: 0
    },
    wood: {
        start: 250, //Always 250, its the amount you start with
        modifier: 0
        total: 0
    },
    iron: {
        start: 15, //Always 250, its the amount you start with
        modifier: 0
        total: 0
    },
    stone: {
        start: 150, //Always 250, its the amount you start with
        modifier: 0
        total: 0
    }
}