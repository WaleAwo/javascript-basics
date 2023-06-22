class Student {
  constructor() {
    let id, firstName;
  }

  setId(id) {
    this.id = id;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }
}

let studentOne = new Student();

// use getters and setter methods to set the object properties
studentOne.setId(100);
studentOne.setFirstName("Jane");

console.log(studentOne.getId());
console.log(studentOne.getFirstName());
