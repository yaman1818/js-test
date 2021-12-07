function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2020;
if (isLeapYear(checkYear)) {
  console.log(checkYear + `年はうるう年です`);
} else {
  console.log(checkYear + `年はうるう年ではありません`)
}