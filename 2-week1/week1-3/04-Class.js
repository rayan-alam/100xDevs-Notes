
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  static myType(){
    console.log("Animal");
  }
  speak() {
    console.log("hi there  " + this.speaks)
  }
}

// a static function can be called without creating an object
console.log(Animal.myType());
// console.log(Animal.speak()); - this won't work and throw and error
// object that is created
// a normal function can only be called only after an object is created
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 8, "meow meow");  
cat.speak();
