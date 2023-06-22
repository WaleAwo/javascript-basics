// parent class
class Bank {
  roi() {
    return 0;
  }
}

class HSBC extends Bank {
  // overridden method
  roi() {
    return 10.5;
  }
}

class Monzo extends Bank {
  // overridden method
  roi() {
    return 7.5;
  }
}

hsbcChild = new HSBC();
console.log(hsbcChild.roi());

monzoChild = new Monzo();
console.log(monzoChild.roi());
