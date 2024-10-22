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

const hsbcChild = new HSBC();
console.log(hsbcChild.roi());
