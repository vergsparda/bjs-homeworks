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
  let averageMark;
  console.log(marks.length)

  function getSumMarks() {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
  }

  if (marks.length === NaN) {
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
    averageMark = sum / marks.length;

  return averageMark;
}

function askDrink(name,dateOfBirthday){
  let userName = name;
  let userBirthYear = dateOfBirthday.getFullYear();
  let now = new Date();
  let currentYear = now.getFullYear();
  let userAge = currentYear - userBirthYear;
  let drink;
  if (userAge >= 18) {
    drink = `Не желаете ли олд-фэшн, ${userName}?`
  } else if(userAge < 18) {
    drink= `Сожалею, ${userName}, но я не могу вам продать алкоголь. 
    Зато могу предложить вам замечательный клюквенный компот!`
  }
  return drink;
}
