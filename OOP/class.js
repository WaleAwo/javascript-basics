// create a class

class Student {
  // constructor to initializes object values at creation
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  getDetails() {
    console.log("Id:" + this.id + " Name:" + this.name + " Age:" + this.age);
  }
}

const studentOne = new Student(101, "Ben", 33); // create an object of a class
studentOne.getDetails(); // call object method
