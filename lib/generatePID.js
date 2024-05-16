function generateUniquePID() {
  const numbers = [];

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 1000000);
  } while (numbers.includes(randomNumber) || String(randomNumber).length !== 6);

  numbers.push(randomNumber);

  return randomNumber;
}

module.exports.getPID = generateUniquePID
