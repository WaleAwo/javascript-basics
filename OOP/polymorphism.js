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

const hsbcChild = new HSBC();
console.log(hsbcChild.roi());

const monzoChild = new Monzo();
console.log(monzoChild.roi());
