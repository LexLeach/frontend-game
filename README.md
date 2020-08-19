**Things To-Do**





**Basic HTML layout**



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <header>content</header>
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



Set some variable for the buttons to link to the html



```js
let addCottage = document.querySelector('.add-cottage')
let addFarm = document.querySelector('.add-farm')
let addSawmill = document.querySelector('.add-sawmill')
let addQuarry = document.querySelector('.add-quarry')
let addMine = document.querySelector('.add-mine')
```



Set the game start with start rss values



```js
let startGame = () => {
    document.querySelector('.fd').value = resources.food.total
    document.querySelector('.wd').value = resources.wood.total
    document.querySelector('.stn').value = resources.stone.total
    document.querySelector('.or').value = resources.ore.total
    document.querySelector('.pop').value = kingdom.population.total
}
startGame()
```



Add event listeners for the buttons to trigger button clicks



```js
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
```



















