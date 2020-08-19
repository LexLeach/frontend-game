console.log('Beam me up, Scotty!');

let kingdom = {
    population: {
        start: 4,
        occupied: 0,
        total: 0
    },
    castle: {
        level: 0,
        buff: 0,
        lvlcap: 10
    },
    cottages: {
        units: 1,
        cost: {
            food: 20,
            wood: 50,
            stone: 25
        },
        occupied: 0,
        modifier: 4, //Adds 4 peeps to population
    },
    farms: {
        units: 1,
        cost: {
            food: 20,
            wood: 25,
            stone: 50
        },
        occupied: 0,
        modifier: 10,
    },
    sawmills: {
        units: 0,
        cost: {
            food: 25,
            wood: 50,
            stone: 25,
            ore: 10
        },
        occupied: 0,
        modifier: 10,
    },
    quarrys: {
        units: 0,
        cost: {
            food: 50,
            wood: 0,
            stone: 0,
            ore: 10
        },
        occupied: 0,
        modifier: 10,
    },
    mines: {
        units: 0,
        occupied: 0,
        modifier: 10,
    },
    soldiers: {
        types: []
    }
}

let resources = {
    food: {
        start: 250, //Always 250, its the amount you "start" with
        modifier: 0,
        total: 0,
    },
    wood: {
        start: 250,
        modifier: 0,
        total: 0
    },
    ore: {
        start: 15,
        modifier: 0,
        total: 0
    },
    stone: {
        start: 50,
        modifier: 0,
        total: 0
    }
}

let troops = {
    level_1: {
        warrior: {
            name: "Warrior",
            level: 1,
            hp: 10,
            atk: 6,
            def: 7,
            size: 2,
            type: "grunt",
            weakness: "calvery"
        },
        slinger: {
            name: "Slinger",
            level: 1,
            hp: 7,
            atk: 8,
            def: 6,
            size: 2,
            type: "range",
            weakness: "grunt"
        },
        light_calvery: {
            name: "Light Calvery",
            level: 1,
            hp: 12,
            atk: 10,
            def: 9,
            size: 2,
            type: "calvery",
            weakness: "range"
        }
    },
    level_2: {
        swordsmen: {
            name: "Swordsmen",
            level: 2,
            hp: 13,
            atk: 9,
            def: 10,
            size: 3,
            type: "grunt",
            weakness: "calvery"
        },
        archer: {
            name: "Archer",
            level: 2,
            hp: 10,
            atk: 11,
            def: 9,
            size: 3,
            type: "range",
            weakness: "grunt"
        },
        heavy_calvery: {
            name: "Light Calvery",
            level: 2,
            hp: 15,
            atk: 13,
            def: 12,
            size: 3,
            type: "calvery",
            weakness: "range"
        }
    },
    level_3: {
        swordsmen: {
            name: "Swordsmen",
            level: 3,
            hp: 16,
            atk: 12,
            def: 13,
            size: 4,
            type: "grunt",
            weakness: "calvery"
        },
        archer: {
            name: "Archer",
            level: 3,
            hp: 13,
            atk: 14,
            def: 2,
            size: 4,
            type: "range",
            weakness: "grunt"
        },
        heavy_calvery: {
            name: "Light Calvery",
            level: 3,
            hp: 18,
            atk: 16,
            def: 15,
            size: 4,
            type: "calvery",
            weakness: "range"
        }
    }
}
/*
let buffs = {
    placeholder: {
        placeholder:,
        placeholder:,
        placeholder:,
        placeholder:
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: ,
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    }
}

let deBuffs = {
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    }
}

let random_encounter = {
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    },
    placeholder: {
        placeholder: ,
        placeholder: ,
        placeholder: ,
        placeholder: 
    }
}
*/

resources.food.total += resources.food.start
resources.wood.total += resources.wood.start
resources.stone.total += resources.stone.start
resources.ore.total += resources.ore.start
kingdom.population.total += kingdom.population.start
//Rss html variables
//let soldiers = document.querySelector('.sldrs').value
//html button variables
let addCottage = document.querySelector('.add-cottage')
let addFarm = document.querySelector('.add-farm')
let addSawmill = document.querySelector('.add-sawmill')
let addQuarry = document.querySelector('.add-quarry')
let addMine = document.querySelector('.add-mine')

addCottage.addEventListener('click', () => {
    kingdom.cottages.units++
    kingdom.population.total += kingdom.cottages.modifier
    document.querySelector('.cott').value = kingdom.cottages.units
    document.querySelector('.pop').value = kingdom.population.total
    console.log(kingdom.population.total)
})
addFarm.addEventListener('click', () => {
    kingdom.farms.units++
    kingdom.population.total -= 2
    document.querySelector('.frm').value = kingdom.farms.units
    document.querySelector('.pop').value = kingdom.population.total
    console.log("Pop Total");
    console.log(kingdom.population.total)
})
addSawmill.addEventListener('click', () => {
    kingdom.sawmills.units++
    kingdom.population.total -= 3
    document.querySelector('.swml').value = kingdom.sawmills.units
    document.querySelector('.pop').value = kingdom.population.total
})
addQuarry.addEventListener('click', () => {
    kingdom.quarrys.units++
    kingdom.population.total -= 4
    document.querySelector('.qurys').value = kingdom.quarrys.units
    document.querySelector('.pop').value = kingdom.population.total
})
addMine.addEventListener('click', () => {
    kingdom.mines.units++
    kingdom.population.total -= 4
    document.querySelector('.nms').value = kingdom.mines.units
    document.querySelector('.pop').value = kingdom.population.total
})

let startGame = () => {
    document.querySelector('.fd').value = resources.food.total
    document.querySelector('.wd').value = resources.wood.total
    document.querySelector('.stn').value = resources.stone.total
    document.querySelector('.or').value = resources.ore.total
    document.querySelector('.pop').value = kingdom.population.total
}
startGame()