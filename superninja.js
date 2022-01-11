// Create a Ninja class:
class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log('What one programmer can do in one month, two programmers can do in two months');
    }
}

//const ninja1 = new Ninja("Hyabusa", 89, 4, 5);
//ninja1.sayName();
//ninja1.showStats();
//ninja1.drinkSake();
//console.log(ninja1.health);


// Sensei Class

// Extend the Ninja class and create the Sensei 
// class. A Sensei should have 200 Health, 10 speed, 
// and 10 strength by default. In addition, a Sensei 
// should have a new attribute called wisdom, and the 
// default should be 10. Finally, add the speakWisdom() 
// method. speakWisdom() should call the drinkSake() method 
// from the Ninja class, before console.logging a wise message.


// example output
    //const superSensei = new Sensei("Master Splinter");
    //superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
    //superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"copy

// create a class Sensei that inherits from the Ninja class
class Sensei extends Ninja {
    // add an attribute: wisdom - default to 10
    constructor(wisdom) {
        super("Master Splinter", 200, 10, 10, wisdom);
        this.wisdom = 10;
    }

    // create a method: speakWisdom()
    speakWisdom() {
        super.drinkSake()
        //console.log('What one programmer can do in one month, two programmers can do in two months');
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"copy