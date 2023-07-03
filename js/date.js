const checkInInput = document.getElementById('CheckIn-input');
const checkOutInput = document.getElementById('CheckOut-input');

// ✅ Using the visitor's timezone
checkInInput.value = checkInDate();
checkOutInput.value = checkOutDate();

console.log(checkInDate());
console.log(checkOutDate());

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function checkInDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate() + 2),
  ].join('-');
}

function checkOutDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate() + 4),
  ].join('-');
}