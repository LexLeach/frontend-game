How to play

The goal of the game is to see how fast you can reach max-level catle. (Level 10 Castle)

You start with some basic resources and 1 of each building. Cottages provide 4 villagers to your population. Since you start with 1 cottage, you start with 4 villagers in your population.

Each building has a resource cost attached to it.

1. Cottages cost: 20 food, 50 wood, 25 stone, and 0 ore
2. Farms cost: 20 food, 25 wood, 40 stone, and 0 ore
3. Sawmills cost: 25 food, 50 wood, 20 stone, and 0 ore
4. Quarrys cost: 50 food, 0 wood, 0 stone, and 10 ore
5. Mines cost: 50 food, 30 wood, 0 stone, and 10 ore

Each building has a total output it will produce every 30 seconds multiplied by the total number of buildings in a single type. Ex: Each farm produces 13 food every 30s, 2 farms will produce 26 food every 30s and so forth.

Your castle can be leveled up but each levelup cost a certain amount of resources. You start with a level 1 castle

* Level 2 cost: 500 food, 500 wood, and 700 stone
* Level 3 cost: 1500 food, 1500 wood, 1700 stone, and 200 ore
* Level 4 cost: 2500 food, 2500 wood, 2700 stone, and 700 ore
* Level 5 cost: 3500 food, 3500 wood, 3700 stone, and 1200 ore
* Level 6 cost: 4500 food, 4500 wood, 4700 stone, and 1700 ore
* Level 7 cost: 5500 food, 5500 wood, 5700 stone, and 2700 ore
* Level 8 cost: 6500 food, 6500 wood, 6700 stone, and 3700 ore
* Level 9 cost: 7500 food, 7500 wood, 7700 stone, and 4700 ore
* Level 10 cost: 8500 food, 8500 wood, 8700 stone, and 5700 ore

Stay tuned for future content updates including:

* Armies!
* Crafting!
* Currency!
* Marketplace to buy or trade(Thanks Tim for suggest a trading option!) resources and other fun items or buffs!
* Random encounters!
* Bandit brawls!
* Achievements!
* Buffs and debuffs!
* Interactive map!
* And much much more!

Just because this is a class project doesn’t mean it ends here. I’m already to invested and enjoying every minute of it!



Below is my current progress and To-Do list. Feel free to add an issue with bugs or if you just want to suggest a feature!



**Things To-Do**



**Basic HTML layout**



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 4</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <header>Project 4 - Front_End Game: A Learning Experience to rememeber.</header>
        <Div class="conatiner">
            <div class="grid-bar">
                <div class="rss-flex">
                    <h3>Resources Count</h3>
                    <div class="food">
                        <p>Food:&nbsp;<input class="fd" readonly type="text" value="0"></p>
                    </div>
                    <div class="wood">
                        <p>Wood:&nbsp;<input class="wd" readonly type="text" value="0"></p>
                    </div>
                    <div class="stone">
                        <p>Stone:&nbsp;<input class="stn" readonly type="text" value="0"></p>
                    </div>
                    <div class="ore">
                        <p>Ore:&nbsp;<input class="or" readonly type="text" value="0"></p>
                    </div>
                    <div class="soldiers">
                        <p>Soldiers:&nbsp;<input class="sldrs" readonly type="text" value="¯\_(ツ)_/¯"></p>
                    </div>
                </div>
            </div>
            <div class="grid-content">
                <h3>Kingdom</h3>
                <div class="kingdom-flex">
                    <div class="population">
                        <p>population:&nbsp;<input class="pop" readonly type="text" value="0"></p>
                    </div>
                    <div class="cottages">
                        <p>Cottages:&nbsp;<input class="cott" readonly type="text" value="0"></p>
                    </div>
                    <div class="farm">
                        <p>Farms:&nbsp;<input class="frm" readonly type="text" value="0"></p>
                    </div>
                    <div class="Sawmill">
                        <p>Sawmills:&nbsp;<input class="swml" readonly type="text" value="0"></p>
                    </div>
                    <div class="quarrys">
                        <p>Quarrys:&nbsp;<input class="qurys" readonly type="text" value="0"></p>
                    </div>
                    <div class="mines">
                        <p>Mines:&nbsp;<input class="nms" readonly type="text" value="0"></p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="add-cottage">Add a Cottage</button>
                    <button class="add-farm">Add a Farm</button>
                    <button class="add-sawmill">Add a Sawmill</button>
                    <button class="add-quarry">Add a Quarry</button>
                    <button class="add-mine"> Add a mine</button>
                </div>
            </div>
        </Div>
    </div>
    <script src="script.js"></script>
</body>

</html>
```



**Basic CSS styles**



```css
body {
    margin: 0;
}

.conatiner {
    display: grid;
    grid-template-areas:
        "header header header"
        "stats game game";
    grid-template-columns: 10rem;
}

header {
    grid-area: header;
    border-bottom: 0.1px solid rgba(123, 123, 123, 0.6);
    background: #515151;
    height: 100px;
}

.grid-bar {
    grid-area: stats;
    display: flex;
    justify-content: center;
    border-right: 0.1px solid rgba(94, 93, 93, 0.8);
    background: #2b2b2b;
    height: 100vh;
}

.rss-flex {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

}

.rss-num {
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px;
}

input {
    width: 60px;
    background: grey;
    border-radius: 5px;
}

.rss-flex h3,
p {
    color: white;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
}

.food,
.wood,
.stone,
.ore,
.soldiers {
    margin-right: 15px;
}

.grid-content {
    grid-area: game;
    background: #3d3d3d;
    height: 100vh;
}

.grid-content h3,
.buttons {
    display: flex;
    justify-content: center;
}



.kingdom-flex {
    display: flex;
    justify-content: space-around;
}
```



**Javascript**



**Kingdom List**

1. Build Kingdom list of units(objects) in the kingdom

Keep in mind you have to account for population(starting count, occupied count [how many are working in farms etc]), castle(level, buffs, lvlcap), cottages(how many, how many are occupied, and total), farms, sawmills, and forges setup the same way as cottages.



```js
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
        units: 0,
        cost: {
            food: 20,
            wood: 50,
            stone: 25
        },
        occupied: 0,
        modifier: 4, //Adds 4 peeps to population
    },
    farms: {
        units: 0,
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
```



**Resource List**

1. Build a resource list of whats being used/consumed to build the kingdom

Keep it basic — 4 resources is enough. (Food, Wood, Stone, and Ore)



```js
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
        start: 150,
        modifier: 0,
        total: 0
    },
    stone: {
        start: 50,
        modifier: 0,
        total: 0
    }
}
```



**List of Soldiers**

1. Create a list of soldiers contains their rank, name, level, hp, atk, def, size(number in unit), type, and weakness. (Yea, thats fine, don’t keep it basic…)

```js
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
```



Set some variables tp easily access the webpage



```js
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
```



Add some variables to easily access the games logic



```js
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
```





Set the game start with start rss values



```js
//Function to populate the webpage with starting vaules
let startGame = () => {
    updateHtml()
}
startGame()

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
```



Add event listeners for the buttons to trigger button clicks



```js
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
```



Add functions to check and reflect what the but asks for if conditions are met



```js
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
        if (food.total >= farms.cost.food && wood.total >= farms.cost.wood && stone.total >= farms.cost.stone) {
            food.total -= farms.cost.food
            wood.total -= farms.cost.wood
            stone.total -= farms.cost.stone
            population.total -= 2
            farms.units++
        } else {
            console.log("You need more resources! Farms require: 20 Food, 25 wood, and 40 stone.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.')
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
        } else {
            console.log("You need more resources! Sawmills require: 25 Food, 50 wood, and 25 stone.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.');
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
        } else {
            console.log("You need more resources! Quarrys require: 50 Food and 10 ore.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.');
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
        } else {
            console.log("You need more resources! Mines require: 50 Food, 30 wood, and 10 ore.")
        }
    } else {
        console.log('Your population is low! Try adding more cottages.');
    }
}
```



Add a way to separate html updates from game logic updates



```js
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
//Function that updates all html on the webpage
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
```



Add a set interval to add rss based on how many rss buildings you have multiplied their respective modifier



```js
setInterval(function () {
    food.total += farms.units * farms.modifier
    wood.total += sawmills.units * sawmills.modifier
    stone.total += quarrys.units * quarrys.modifier
    ore.total += mines.units * mines.modifier
    updateHtml()
}, 10000);
```



Add a message board that will replace console logs that the user should be prompted with

HTML

```html
<div class="outer">
                    <div class="border" id="messageBoard"></div>
                </div>
```

CSS

```css
.outer {
    display: flex;
    margin: 20px;
}

#messageBoard {
    display: flex;
    flex-direction: column;
    background-color: rgb(90, 90, 90);
    height: 200px;
    width: 100%;
    line-height: 1px;
    overflow-y: scroll;
    padding: 5px;
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 10px #000000;
    border-radius: 10px;
    text-align: center;
}
```

JS

```js
function messageBoard(message) {
    const logging = document.createElement('p');
    const messageBody = document.querySelector('#messageBoard');
    logging.innerText = message;
    document.getElementById('messageBoard').appendChild(logging);
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}
```



Add soldiers into the game. Let the user use population to build an army!

```js

```





1. Setup a interval that removed food based on population count and population modifier (EX: 1 citizen eats 1 food every so often)
2. Plan out randon encounters - Earth quake has shaken the town, 150 food has spoiled, repairs cost 300 wood, 150 stone, and 30 ore. Stuf like that.

```js
//Interval to remove food based on population consumption
```

```js
//Random event encounter
```



Add img to the html for the kingdom and later on use JS to hide populate more building/add popup dialogue text

Work on PS image for the kingdom, house need better positioning and add a blacksmith\*\*\*

```html
<div class="kingdomImg"></div>
```

CSS

```css
.kingdomImg {
    background-image: url("./images/Kingdom.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    width: 100%;
    box-shadow: inset 0 0 10px #000000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}
```



Add in villager assets and later on use JS to hide populate more villagers/add popup dialogue text

JS

```css

```