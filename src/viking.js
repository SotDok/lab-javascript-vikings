// Soldier
class Soldier{
  constructor(health, strength) {
  this.health = health;
  this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.damage = damage;
    this.health = this.health - damage;
    }
}

// Viking

class Viking extends Soldier{
  constructor(name, health, strength) {
    super (health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
    }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
 



// Saxon
class Saxon extends Soldier{
  constructor (health, strength){
    super (health, strength);
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  addViking(aViking){
  this.vikingArmy.push(aViking);
  }
  addSaxon(aSaxon){
  this.saxonArmy.push(aSaxon);
  }
  vikingAttack(){
// I know that I have to use  math.random but I do not know what the variables I need to use are. Same on the saxon attack.
// Also I have to invoke the receive Damage function here?
  }
  saxonAttack(){

  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingsArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

}




