**Things To-Do**



**Kingdom List**

1. Build Kingdom list of units(**objects**) in the kingdom

Keep in mind you have to account for **population(**starting count, occupied count **[**how many are working in farms etc**])**, **castle(**level, buffs, lvlcap**)**, **cottages(**how many, how many are occupied, and total**)**, **farms**, **sawmills**, and **forges** setup the same way as cottages.



```js
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
```



**Resource List**

1. Build a resource list of whats being used/consumed to build the kingdom

Keep it basic — 4 resources is enough. (Food, Wood, Stone, and Ore)



```js
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
```



**List of Soldiers**

1. Create a list of soldiers contains their rank, name, level, hp, atk, def, size(number in unit), type, and weakness.

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