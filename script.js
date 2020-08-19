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
        population_required: 0,
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
        population_required: 2,
        cost: {
            food: 20,
            wood: 25,
            stone: 40
        },
        occupied: 0,
        modifier: 10,
    },
    sawmills: {
        units: 1,
        population_required: 3,
        cost: {
            food: 25,
            wood: 50,
            stone: 20,
            ore: 10
        },
        occupied: 0,
        modifier: 10,
    },
    quarrys: {
        units: 0,
        population_required: 4,
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
        population_required: 4,
        cost: {
            food: 50,
            wood: 30,
            stone: 0,
            ore: 10
        },
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
kingdom.cottages.total += kingdom.cottages.start
kingdom.farms.total += kingdom.farms.start
kingdom.sawmills.total += kingdom.sawmills.start
kingdom.quarrys.total += kingdom.quarrys.start
kingdom.mines.total += kingdom.mines.start

//Kingdom variables
let population = kingdom.population.total
//let cottages = kingdom.cottages
//let farms = kingdom.farms
//let sawmills = kingdom.sawmills
//let quarrys = kingdom.quarrys
//let mines = kingdom.mines
//Resource variables
let food = resources.food.total
let wood = resources.wood.total
let stone = resources.stone.total
let ore = resources.ore.total
//html button variables
let addCottageBtn = document.querySelector('.add-cottage')
let addFarmBtn = document.querySelector('.add-farm')
let addSawmillBtn = document.querySelector('.add-sawmill')
let addQuarryBtn = document.querySelector('.add-quarry')
let addMineBtn = document.querySelector('.add-mine')

addCottageBtn.addEventListener('click', () => {
    addCottage()
})
addFarmBtn.addEventListener('click', () => {
    addFarm()
})
addSawmillBtn.addEventListener('click', () => {
    addSawmill()
})
addQuarryBtn.addEventListener('click', () => {
    addQuarry()
})
addMineBtn.addEventListener('click', () => {
    addMine()
})
/*
let checkPopulation = (building) => {

    let populationRequired = kingdom.building.population_required

    if (population >= populationRequired) {
        return true
    } else {
        return false
    }
}
*/
let checkPopulation = (building) => {
    if (building == 'cottages') {
        let populationRequired = kingdom.cottages.population_required
        if (!population >= populationRequired) {
            return
        } else {
            console.log("Your population is low! Consider building more houses!")
        }
    } else
    if (building == 'farms') {
        let populationRequired = kingdom.farms.population_required
        if (!population >= populationRequired) {
            return
        } else {
            console.log("Your population is low! Consider building more houses!")
        }
    } else
    if (building == 'quarrys') {
        let populationRequired = kingdom.quarrys.population_required
        if (!population >= populationRequired) {
            return
        } else {
            console.log("Your population is low! Consider building more houses!");
        }
    } else
    if (building == 'mines') {
        let populationRequired = kingdom.mines.population_required
        if (!population >= populationRequired) {
            return
        } else {
            console.log("Your population is low! Consider building more houses!");
        }
    }

}

let addCottage = () => {
    if (!checkPopulation('cottages')) {
        if (food >= 20 && wood >= 50 && stone >= 25) {
            kingdom.cottages.units++
            kingdom.population.total += kingdom.cottages.modifier
            document.querySelector('.cott').value = kingdom.cottages.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Cottages require: 20 Food, 50 wood, and 25 stone.")
        }
    }
}
let addFarm = () => {
    if (!checkPopulation('farms')) {
        if (food >= 20 && wood >= 25 && stone >= 40) {
            kingdom.farms.units++
            kingdom.population.total -= 2
            document.querySelector('.frm').value = kingdom.farms.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Farms require: 20 Food, 25 wood, and 40 stone.")
        }
    }
}
let addSawmill = () => {
    if (!checkPopulation('sawmills')) {
        if (food >= 25 && wood >= 50 && stone >= 25) {
            kingdom.sawmills.units++
            kingdom.population.total -= 3
            document.querySelector('.swml').value = kingdom.sawmills.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Sawmills require: 25 Food, 50 wood, and 25 stone.")
        }
    }
}
let addQuarry = () => {
    if (!checkPopulation('quarrys')) {
        if (food >= 50 && ore >= 10) {
            kingdom.quarrys.units++
            kingdom.population.total -= 4
            document.querySelector('.qurys').value = kingdom.quarrys.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Quarrys require: 50 Food and 10 ore.")
        }
    }
}
let addMine = () => {
    if (!checkPopulation('mines')) {
        if (food >= 50 && wood >= 30 && ore >= 10) {
            kingdom.mines.units++
            kingdom.population.total -= 4
            document.querySelector('.nms').value = kingdom.mines.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Quarrys require: 50 Food, 30 wood, and 10 ore.")
        }
    }
}

let startGame = () => {
    document.querySelector('.fd').value = resources.food.total
    document.querySelector('.wd').value = resources.wood.total
    document.querySelector('.stn').value = resources.stone.total
    document.querySelector('.or').value = resources.ore.total
    document.querySelector('.pop').value = kingdom.population.total
    document.querySelector('.cott').value = kingdom.cottages.units
    document.querySelector('.frm').value = kingdom.farms.units
    document.querySelector('.swml').value = kingdom.sawmills.units
    document.querySelector('.qurys').value = kingdom.quarrys.units
    document.querySelector('.nms').value = kingdom.mines.units
}
startGame()