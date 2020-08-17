'use strict'

function getResult(a,b,c){
  let discriminant = Math.pow(b, 2) - (4 * a * c);
  let x = [];
  if (discriminant > 0 ) {
    x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    x[1] = (-b - Math.sqrt(discriminant)) / (2 * a)
    } else if (discriminant === 0) {
      x[0] = -b / 2 * a;
    } else if (discriminant < 0) {
      x = [];
    }
  return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
