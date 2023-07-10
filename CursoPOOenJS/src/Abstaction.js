//La abstraccion consiste en abstraer los objetos forma real al codigo  
class Atack{
    constructor({
        name,
        damage = 0,
        effect = 'none'
    }){
        this.name = name;
        this.damage = damage;
        this.effect = effect;
    }

    atack(entityAtacked){
        entityAtacked.heal = entityAtacked.heal -this.damage;
        if(entityAtacked.heal<=0){
            console.log(`${entityAtacked.name} is death`);
            Player1.addToInventory(entityAtacked.drop)
        }
    }
}

class Item{
    constructor({
        name,
        type,
        power = 0,
        atacks = 'None',
    }) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.atacks = atacks;
    }
}

class Entity{
    constructor({
        name,
        type = 'Neutal',
        heal,
        drop = [],
    }){
        this.name = name;
        this.type = type;
        this.heal = heal;
        this.drop = drop;
    }
}

class Player{
    constructor({
        username,
        id,
        inventory = [],
        heal = 10,
        hability = [],
    }){
        this.username = username;
        this.id = id;
        this.inventory = inventory;
        this.heal = heal;
        this.hability = hability;  
    }

    addToInventory(Item){
        console.log(`${Item.name} added to Inventory`)
        this.inventory.push(Item);
    }
}

const BlandSword = new Atack({
    name: 'Bland Sword',
    damage: 3,
})


const Emerald = new Item({
    name: 'Emerald',
    type: 'Money',
});

const Sword = new Item({
    name:'Sword of Salem',
    type: 'Mele',
    atacks: BlandSword,
})

const MagicStone = new Item({
    name: 'Philosophal Stone',
    type: 'Magic',
    power: 500,
    atacks: ['levitation']
}) 

const Sheep = new Entity({
    name: 'Sheep',
    type: 'Neutral',
    heal: 10,
    drop: Emerald,
})

const Player1 = new Player ({
    username: 'MichiUwUr',
    id: 1,
    hability: ['Fire magic'],
})

Player1.addToInventory(Emerald);
Player1.addToInventory(Sword);
Player1.addToInventory(MagicStone);





console.log('Sheep heal:' + Sheep.heal)

Sword.atacks.atack(Sheep)
Sword.atacks.atack(Sheep)
Sword.atacks.atack(Sheep)

//Sword.BlandSword.atack(Sheep);
console.log('Sheep heal:' + Sheep.heal)
Sword.atacks.atack(Sheep)
