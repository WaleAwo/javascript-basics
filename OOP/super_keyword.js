class Animal {
  constructor(color) {
    this.color = color;
  }

  printColor() {
    console.log(this.color);
  }
}

class Dog extends Animal {
  constructor(color, age) {
    super(color); // calls the constructor from the parent class
    this.age = age;
  }

  getAge() {
    console.log("The age of the dog is: " + this.age);
  }
}

dogOne = new Dog("Brown", 16);
dogOne.getAge();
dogOne.printColor();
