function solveEquation(a, b, c) {
  let arr = [] ; 
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;

  if (d === 0) {
    x1 = -b / (2 * a); //1 корень
    arr = [x1];
  // } else if (d < 0) {
  //   arr = []; // выводит пустой массив
  } else if (d > 0 ){
    x1 = (-b + Math.sqrt(d)) / (2 * a); //2 корня
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }else{
    arr = [];
  }

  return arr; 
 
};


function calculateTotalMortgage(percent, contribution, amount, date) { 

  let totalAmount;
 
  // код для задачи №2 писать здесь



  return totalAmount;
}
