//HTML logic above object variables

//html variables
let htmlCastle = document.querySelector('.cstle')
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
let lvlUp = document.querySelector('.lvl-up')
let addCottageBtn = document.querySelector('.add-cottage')
let addFarmBtn = document.querySelector('.add-farm')
let addSawmillBtn = document.querySelector('.add-sawmill')
let addQuarryBtn = document.querySelector('.add-quarry')
let addMineBtn = document.querySelector('.add-mine')

function updateHtml() {
    htmlCastle.value = castle.level
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
lvlUp.addEventListener('click', () => {
    checkCastleLvl()
})
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

function messageBoard(message) {
    const logging = document.createElement('p');
    const messageBody = document.querySelector('#messageBoard');
    logging.innerText = message;
    document.getElementById('messageBoard').appendChild(logging);
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}



//Objects
let kingdom = {
    population: {
        start: 4,
        occupied: 0,
        total: 0
    },
    castle: {
        start: 1,
        level: 0,
        lvlUpCost: {
            level2: {
                food: 500,
                wood: 500,
                stone: 700
            },
            level3: {
                food: 1500,
                wood: 1500,
                stone: 1700,
                ore: 200
            },
            level4: {
                food: 2500,
                wood: 2500,
                stone: 2700,
                ore: 700
            },
            level5: {
                food: 3500,
                wood: 3500,
                stone: 3700,
                ore: 1200
            },
            level6: {
                food: 4500,
                wood: 4500,
                stone: 4700,
                ore: 1700
            },
            level7: {
                food: 5500,
                wood: 5500,
                stone: 5700,
                ore: 2700
            },
            level8: {
                food: 6500,
                wood: 6500,
                stone: 6700,
                ore: 3700
            },
            level9: {
                food: 7500,
                wood: 7500,
                stone: 7700,
                ore: 4700
            },
            level10: {
                food: 8500,
                wood: 8500,
                stone: 8700,
                ore: 5700
            }
        },
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
        modifier: 13,
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
        modifier: 14,
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
        modifier: 7,
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
        modifier: 5,
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
    level1: {
        warrior: {
            name: "Warrior",
            level: 1,
            hp: 10,
            atk: 6,
            def: 7,
            size: 1,
            type: "grunt",
            weakness: "calvery"
        },
        slinger: {
            name: "Slinger",
            level: 1,
            hp: 7,
            atk: 8,
            def: 6,
            size: 1,
            type: "range",
            weakness: "grunt"
        },
        light_calvery: {
            name: "Light Calvery",
            level: 1,
            hp: 12,
            atk: 10,
            def: 9,
            size: 1,
            type: "calvery",
            weakness: "range"
        }
    },
    level2: {
        swordsmen: {
            name: "Swordsmen",
            level: 2,
            hp: 13,
            atk: 9,
            def: 10,
            size: 1,
            type: "grunt",
            weakness: "calvery"
        },
        archer: {
            name: "Archer",
            level: 2,
            hp: 10,
            atk: 11,
            def: 9,
            size: 1,
            type: "range",
            weakness: "grunt"
        },
        heavy_calvery: {
            name: "Light Calvery",
            level: 2,
            hp: 15,
            atk: 13,
            def: 12,
            size: 1,
            type: "calvery",
            weakness: "range"
        }
    },
    level3: {
        swordsmen: {
            name: "Swordsmen",
            level: 3,
            hp: 16,
            atk: 12,
            def: 13,
            size: 1,
            type: "grunt",
            weakness: "calvery"
        },
        archer: {
            name: "Archer",
            level: 3,
            hp: 13,
            atk: 14,
            def: 2,
            size: 1,
            type: "range",
            weakness: "grunt"
        },
        heavy_calvery: {
            name: "Light Calvery",
            level: 3,
            hp: 18,
            atk: 16,
            def: 15,
            size: 1,
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
let randomCastleResponse = [
    'You leveled up your Castle! Much awe! Castle lvl +1',
    'Your villagers are pleased with the growth of the kingdom! Castle lvl +1',
    'The villagers are saying that it might actually be worth living here soon. Possibly...Castle lvl +1',
    'Your starting to get the hang of this! Keep up the good work my liege!'
]
let randomCottageResponse = [
    "Realtor asks his employee why he quit his last job selling duct tape after three months, the employee said he just couldnt stick with it. Cottage +1",
    "Yup, you did it. You purchased the last one. All outta cottages now. Just kidding! :D Cottage +1",
    "Here, have a Cottage! Cottage +1",
    "ALRIGHT! Take the cottage and go! Cottage +1"
]
let randomFarmResponse = [
    'Ohhh so you wanted a farm huh, well you shall have it! Farm +1',
    'They do say food is the way to a mans heart, one farm coming up! Farm +1',
    'Yea yea, heres your farm. Farm +1',
    'YOU SHALL NOT PASS!, but you can have a farm. Farm +1'
]
let randomSawmillResponse = [
    'FOREST KILLER! Sawmill +1',
    'Welp, goodbye forests! Sawmill +1',
    'How do trees get online? They just log in, Sawmill +1',
    'Whats a trees favorite dating app?, Timber. Sawmill +1'
]
let randomQuarryResponse = [
    'What do you call an underage kid that works in a quarry? A miner. Quarry +1',
    'Did you hear about the quarry over in Kingdom 3? It went bankrupt. They said it hit rock bottom. Quarry +1',
    'When were rock puns the funniest? Durning the stone age. Quarry +1'
]
let randomMineResponse = [
    'What state do miners avoid? Ore gon. Mine +1',
    'Why are miners good accomplices? They mine thier own business. Mine +1',
    'Yea Im outta mining pun, just take you mine and begone. Mine +1',
    'high oh, high oh, off to work we go. Mine +1'
]
//Game logic below objects variables

//Function to populate the webpage with starting vaules
let startGame = () => {
    updateHtml()
}

//Function to separate 
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
let castle = kingdom.castle
let cost = castle.lvlUpCost
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
castle.level += castle.start
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

function checkCastleLvl() {
    let currentLevel = castle.level
    let nextLevel = currentLevel + 1
    lvlUpCastle(nextLevel)

}

function lvlUpCastle(lvl) {
    if (lvl === 2) {
        if (food.total >= cost.level2.food && wood.total >= cost.level2.wood && stone.total >= cost.level2.stone) {
            food.total -= cost.level2.food
            wood.total -= cost.level2.wood
            stone.total -= cost.level2.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 3) {
        if (food.total >= cost.level3.food && wood.total >= cost.level3.wood && stone.total >= cost.level3.stone) {
            food.total -= cost.level3.food
            wood.total -= cost.level3.wood
            stone.total -= cost.level3.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 4) {
        if (food.total >= cost.level4.food && wood.total >= cost.level4.wood && stone.total >= cost.level4.stone) {
            food.total -= cost.level4.food
            wood.total -= cost.level4.wood
            stone.total -= cost.level4.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 5) {
        if (food.total >= cost.level5.food && wood.total >= cost.level5.wood && stone.total >= cost.level5.stone) {
            food.total -= cost.level5.food
            wood.total -= cost.level5.wood
            stone.total -= cost.level5.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 6) {
        if (food.total >= cost.level6.food && wood.total >= cost.level6.wood && stone.total >= cost.level6.stone) {
            food.total -= cost.level6.food
            wood.total -= cost.level6.wood
            stone.total -= cost.level6.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 7) {
        if (food.total >= cost.level7.food && wood.total >= cost.level7.wood && stone.total >= cost.level7.stone) {
            food.total -= cost.level7.food
            wood.total -= cost.level7.wood
            stone.total -= cost.level7.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 8) {
        if (food.total >= cost.level8.food && wood.total >= cost.level8.wood && stone.total >= cost.level8.stone) {
            food.total -= cost.level8.food
            wood.total -= cost.level8.wood
            stone.total -= cost.level8.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 9) {
        if (food.total >= cost.level9.food && wood.total >= cost.level9.wood && stone.total >= cost.level9.stone) {
            food.total -= cost.level9.food
            wood.total -= cost.level9.wood
            stone.total -= cost.level9.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
    if (lvl === 10) {
        if (food.total >= cost.level10.food && wood.total >= cost.level10.wood && stone.total >= cost.level10.stone) {
            food.total -= cost.level10.food
            wood.total -= cost.level10.wood
            stone.total -= cost.level10.stone
            castle.level++
            updateHtml()
            randomString(randomCastleResponse)
        } else {
            messageBoard("You need more resources to levelup your Castle!")
        }
    }
}

function addCottage() {
    if (food.total >= cottages.cost.food && wood.total >= cottages.cost.wood && stone.total >= cottages.cost.stone) {
        food.total -= cottages.cost.food
        wood.total -= cottages.cost.wood
        stone.total -= cottages.cost.stone
        cottages.units++
        population.total += cottages.modifier
        randomString(randomCottageResponse)
    } else {
        messageBoard("You need more resources! Cottages require: 20 Food, 50 wood, and 25 stone.")
    }
}

function addFarm() {
    let populationReq = farms.populationRequired
    if (population.total >= populationReq) {
        if (food.total >= farms.cost.food && wood.total >= farms.cost.wood && stone.total >= farms.cost.stone) {
            food.total -= farms.cost.food
            wood.total -= farms.cost.wood
            stone.total -= farms.cost.stone
            population.total -= 2
            farms.units++
            randomString(randomFarmResponse)
        } else {
            messageBoard("You need more resources! Farms require: 20 Food, 25 wood, and 40 stone.")
        }
    } else {
        messageBoard('Your population is low! Try adding more cottages.')
    }
}

function addSawmill() {
    let populationReq = sawmills.populationRequired
    if (population.total >= populationReq) {
        if (food.total >= sawmills.cost.food && wood.total >= sawmills.cost.wood && stone.total >= sawmills.cost.stone) {
            food.total -= sawmills.cost.food
            wood.total -= sawmills.cost.wood
            stone.total -= sawmills.cost.stone
            population.total -= 3
            sawmills.units++
            randomString(randomSawmillResponse)
        } else {
            messageBoard("You need more resources! Sawmills require: 25 Food, 50 wood, and 25 stone.")
        }
    } else {
        messageBoard('Your population is low! Try adding more cottages.');
    }
}

function addQuarry() {
    let populationReq = quarrys.populationRequired
    if (population.total >= populationReq) {
        if (food.total >= quarrys.cost.food && ore.total >= quarrys.cost.ore) {
            food.total -= quarrys.cost.food
            ore.total -= quarrys.cost.ore
            population.total -= 4
            quarrys.units++
            randomString(randomQuarryResponse)
        } else {
            messageBoard("You need more resources! Quarrys require: 50 Food and 10 ore.")
        }
    } else {
        messageBoard('Your population is low! Try adding more cottages.');
    }
}

function addMine() {
    let populationReq = mines.populationRequired
    if (population.total >= populationReq) {
        if (food.total >= mines.cost.food && wood.total >= mines.cost.wood && ore.total >= mines.cost.ore) {
            food.total -= mines.cost.food
            wood.total -= mines.cost.wood
            ore.total -= mines.cost.ore
            population.total -= 4
            mines.units++
            randomString(randomMineResponse)
        } else {
            messageBoard("You need more resources! Mines require: 50 Food, 30 wood, and 10 ore.")
        }
    } else {
        messageBoard('Your population is low! Try adding more cottages.');
    }
}

setInterval(function () {
    food.total += farms.units * farms.modifier
    wood.total += sawmills.units * sawmills.modifier
    stone.total += quarrys.units * quarrys.modifier
    ore.total += mines.units * mines.modifier
    updateHtml()
}, 18000);

function randomString(id) {
    let randomIndex = Math.floor(Math.random() * id.length)
    let randomMsgString = id[randomIndex]
    messageBoard(randomMsgString)
}

startGame()