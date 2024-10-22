let employee = {
  name: "scott",
  id: 2,
  job: "Engineer",
  salary: 10000,

  // methods
  bonus: function () {
    return (this.salary * 10) / 100;
  },
};

// access
console.log("Employee bonus: " + employee.bonus());
