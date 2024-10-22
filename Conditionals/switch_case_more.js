const codeStatus = 500;

switch (codeStatus) {
  case 200:
    console.log("OK");
    break;
  case 400:
    console.log("User Error");
  case 500:
    console.log("Server Error");
    break;
  default:
    console.log("Unknown status");
}
