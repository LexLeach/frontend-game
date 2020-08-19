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
        population_required: 4,
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
        population_required: 6,
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
        units: 1,
        population_required: 8,
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
        units: 1,
        population_required: 8,
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
let cottages = kingdom.cottages
let farms = kingdom.farms
let sawmills = kingdom.sawmills
let quarrys = kingdom.quarrys
let mines = kingdom.mines
let population = kingdom.population
//Resource variables
let food = resources.food
let wood = resources.wood
let stone = resources.stone
let ore = resources.ore
//html button variables
let htmlFood = document.querySelector('.fd')
let htmlWood = document.querySelector('.wd')
let htmlStone = document.querySelector('.stn')
let htmlOre = document.querySelector('.or')
let htmlPopulation = document.querySelector('.pop')
let htmlCottages = document.querySelector('.cott')
let htmlFarms = document.querySelector('.frm')
let htmlSawmills = document.querySelector('.swml')
let htmlQuarrys = document.querySelector('.qurys')
let htmlMines = document.querySelector('.nms')
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

let checkPopulation = (building) => {
    if (building == 'cottages') {
        let populationRequired = kingdom.cottages.population_required
        if (!population >= populationRequired) {
            return
        }
    }
    if (building == 'farms') {
        let populationRequired = kingdom.farms.population_required
        if (!population >= populationRequired) {
            kingdom.population.total -= 2
            return
        }
    }
    if (building == 'quarrys') {
        let populationRequired = kingdom.quarrys.population_required
        if (!population >= populationRequired) {
            kingdom.population.total -= 4
            return
        }
    }
    if (building == 'mines') {
        let populationRequired = kingdom.mines.population_required
        if (!population >= populationRequired) {
            kingdom.population.total -= 4
            return
        }
    }

}
/*
let checkResources = () => {
    if (building == 'cottages') {
        let bcost = kingdom.cottages.cost.food
        if (!food >= bcost) {
            food -= 20
        } else {
            return
        }
        if ()
    }
}
*/



let addCottage = () => {
    if (!checkPopulation('cottages')) {
        if (food.total >= 20 && wood.total >= 50 && stone.total >= 25) {
            food.total -= cottages.cost.food
            htmlFood.value = food.total
            wood.total -= cottages.cost.wood
            htmlWood.value = wood.total
            stone.total -= cottages.cost.stone
            htmlStone.value = stone.total
            cottages.units++
            population.total += cottages.modifier
            htmlCottages.value = cottages.units
            htmlPopulation.value = population.total
        } else {
            console.log("You need more resources! Cottages require: 20 Food, 50 wood, and 25 stone.")
        }
    }
}
let addFarm = () => {
    if (!checkPopulation('farms')) {
        if (food >= 20 && wood >= 25 && stone >= 40) {
            kingdom.farms.units++

            document.querySelector('.frm').value = kingdom.farms.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Farms require: 20 Food, 25 wood, and 40 stone.")
        }
        console.log('Your population is low! Try adding more cottages.');
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
        console.log('Your population is low! Try adding more cottages.');
    }
}
let addQuarry = () => {
    if (!checkPopulation('quarrys')) {
        if (food >= 50 && ore >= 10) {
            kingdom.quarrys.units++
            document.querySelector('.qurys').value = kingdom.quarrys.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Quarrys require: 50 Food and 10 ore.")
        }
        console.log('Your population is low! Try adding more cottages.');
    }
}
let addMine = () => {
    if (!checkPopulation('mines')) {
        if (food >= 50 && wood >= 30 && ore >= 10) {
            kingdom.mines.units++
            document.querySelector('.nms').value = kingdom.mines.units
            document.querySelector('.pop').value = kingdom.population.total
        } else {
            console.log("You need more resources! Quarrys require: 50 Food, 30 wood, and 10 ore.")
        }
        console.log('Your population is low! Try adding more cottages.');
    }
}

let startGame = () => {
    htmlFood.value = food.total
    htmlWood.value = wood.total
    htmlStone.value = stone.total
    htmlOre.value = ore.total
    htmlPopulation.value = population.total
    htmlCottages.value = cottages.units
    htmlFarms.value = farms.units
    htmlSawmills.value = sawmills.units
    htmlQuarrys.value = quarrys.units
    htmlMines.value = mines.units
}
startGame()