const number = 100;

function getSumOfSquares(num = 0) {
  return (num * (num + 1) * (2 * num + 1)) / 6;
}

function getSquareOfSum(num = 0) {
  let conclution = 0;
  for (let i = 1; i <= num; i++) {
    conclution += i;
  }
  return conclution ** 2;
}

(() => {
  setTimeout(() => {
    console.log(getSquareOfSum(number) - getSumOfSquares(number));
  })
})();
