// parent class
class ParentClass {
  a = 100;
  display() {
    console.log(this.a);
  }
}

// child class
class ChildClass extends ParentClass {
  b = 200;
  show() {
    console.log(this.b);
  }
}

const childObject = new ChildClass();
childObject.display(); // inherited parent method
childObject.show();
