// json value
let text =
  '{ "employees" :[' +
  '{"firstname":"John","lastname":"Lee"},' +
  '{"firstname":"Andrew","lastname":"Kane"},' +
  '{"firstname":"Sarah","lastname":"Chan"}]}';

// convert from json to javascript
let javaScriptObject = JSON.parse(text);

// extract data
console.log(javaScriptObject.employees[1].firstname);
