//HTML logic above object variables

//html variables
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

function updateHtml() {
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

//Event listeners
addCottageBtn.addEventListener('click', () => {
    separate('cottage')
})
addFarmBtn.addEventListener('click', () => {
    separate('farm')
})
addSawmillBtn.addEventListener('click', () => {
    separate('sawmill')
})
addQuarryBtn.addEventListener('click', () => {
    separate('quarry')
})
addMineBtn.addEventListener('click', () => {
    separate('mine')
})
//Objects
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
        populationRequired: 0,
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
        populationRequired: 4,
        cost: {
            food: 20,
            wood: 25,
            stone: 40
        },
        occupied: 0,
        modifier: 30,
    },
    sawmills: {
        units: 1,
        populationRequired: 6,
        cost: {
            food: 25,
            wood: 50,
            stone: 20,
            ore: 10
        },
        occupied: 0,
        modifier: 30,
    },
    quarrys: {
        units: 1,
        populationRequired: 8,
        cost: {
            food: 50,
            wood: 0,
            stone: 0,
            ore: 10
        },
        occupied: 0,
        modifier: 15,
    },
    mines: {
        units: 1,
        populationRequired: 8,
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
    stone: {
        start: 150,
        modifier: 0,
        total: 0
    },
    ore: {
        start: 15,
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
//Game logic below objects variables

//Function to populate the webpage with starting vaules
let startGame = () => {
    updateHtml()
}

//Separation Function
let separate = (building) => {
    if (building === 'cottage') {
        addCottage()
    }
    if (building === 'farm') {
        addFarm()
    }
    if (building === 'sawmill') {
        addSawmill()
    }
    if (building === 'quarry') {
        addQuarry()
    }
    if (building === 'mine') {
        addMine()
    }
    updateHtml()
}
//game logic variables
let cottages = kingdom.cottages
let farms = kingdom.farms
let sawmills = kingdom.sawmills
let quarrys = kingdom.quarrys
let mines = kingdom.mines
let population = kingdom.population
let food = resources.food
let wood = resources.wood
let stone = resources.stone
let ore = resources.ore

//Sets starting values to current totals on page load
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
//Function that adds a cottage it conditions are met
function addCottage() {
    if (food.total >= cottages.cost.food && wood.total >= cottages.cost.wood && stone.total >= cottages.cost.stone) {
        food.total -= cottages.cost.food
        wood.total -= cottages.cost.wood
        stone.total -= cottages.cost.stone
        cottages.units++
        population.total += cottages.modifier
    } else {
        console.log("You need more resources! Cottages require: 20 Food, 50 wood, and 25 stone.")
    }
}

function addFarm() {
    let populationReq = farms.populationRequired
    if (population.total >= populationReq) {
        population.total -= 2
        if (food.total >= farms.cost.food && wood.total >= farms.cost.wood && stone.total >= farms.cost.stone) {
            food.total -= farms.cost.food
            wood.total -= farms.cost.wood
            stone.total -= farms.cost.stone
            farms.units++
        } else {
            console.log("You need more resources! Farms require: 20 Food, 25 wood, and 40 stone.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.')
    }
}
let addSawmill = () => {
    let populationReq = sawmills.populationRequired
    if (population.total >= populationReq) {
        population.total -= 3
        if (food.total >= sawmills.cost.food && wood.total >= sawmills.cost.wood && stone.total >= sawmills.cost.stone) {
            food.total -= sawmills.cost.food
            wood.total -= sawmills.cost.wood
            stone.total -= sawmills.cost.stone
            sawmills.units++
        } else {
            console.log("You need more resources! Sawmills require: 25 Food, 50 wood, and 25 stone.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.');
    }
}
let addQuarry = () => {
    let populationReq = quarrys.populationRequired
    if (population.total >= populationReq) {
        population.total -= 4
        if (food.total >= quarrys.cost.food && ore.total >= quarrys.cost.ore) {
            food.total -= quarrys.cost.food
            ore.total -= quarrys.cost.ore
            quarrys.units++
        } else {
            console.log("You need more resources! Quarrys require: 50 Food and 10 ore.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.');
    }
}
let addMine = () => {
    let populationReq = mines.populationRequired
    if (population.total >= populationReq) {
        population.total -= 4
        if (food.total >= mines.cost.food && wood.total >= mines.cost.wood && ore.total >= mines.cost.ore) {
            food.total -= mines.cost.food
            wood.total -= mines.cost.wood
            ore.total -= ore.cost.stone
            mines.units++
        } else {
            console.log("You need more resources! Mines require: 50 Food, 30 wood, and 10 ore.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.');
    }
}

setInterval(function () {
    food.total += farms.units * farms.modifier
    wood.total += sawmills.units * sawmills.modifier
    stone.total += quarrys.units * quarrys.modifier
    ore.total += mines.units * mines.modifier
    updateHtml()
}, 10000);

startGame()