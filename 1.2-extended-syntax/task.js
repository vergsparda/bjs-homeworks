'use strict'

function getResult(a,b,c){
  let discriminant = Math.pow(b, 2) - (4 * a * c);
  let x = [];
  if (discriminant > 0 ) {
    x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    x[1] = (-b - Math.sqrt(discriminant)) / (2 * a)
  } else if (discriminant === 0) {
    x[0] = -b / 2 * a;
  }

  return x;
}

function getAverageMark(marks){
  let sum = 0;
  console.log(marks.length)

  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 5) {
    console.log('оценок больше пяти')
    marks.splice(5);
    console.log(marks);
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return sum / marks.length;
}

function askDrink(name,dateOfBirthday){
  const userAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
  let drink;
  if (userAge >= 18) {
    drink = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    drink = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
  }
  return drink;
}
