class Test {
  static a = 10;
  b = 20;

  static methodOne() {
    console.log("Method one is static");
  }

  methodTwo() {
    console.log("Method two is non-static");
  }
}

// access variables/methods via class name
console.log(Test.a);
console.log(Test.b); // non-static variable can't be accessed via the class

console.log(Test.methodOne);
console.log(Test.methodTwo); // non-static methods can't be accessed via the class
