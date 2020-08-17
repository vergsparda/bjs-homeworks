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
  let sum = 0;
  console.log(marks.length)

  function getSumMarks() {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
  }

  if (marks.length === 0) {
    averageMark = 0;
  } else if (marks.length > 5) {
    console.log('оценок больше пяти')
    marks.splice(5, 999);
    console.log(marks);
    getSumMarks(marks.length);
  } else if (marks.length <= 5) {
    console.log(marks);
    getSumMarks(marks.length);
  }
  let averageMark = sum / marks.length;

  return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
