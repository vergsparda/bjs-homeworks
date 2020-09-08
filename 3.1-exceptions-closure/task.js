`use strict`

// Задача №1

function parseCount(number) {
  if (isNaN(Number.parseInt(number))) throw new Error(`Невалидное значение`);
  else return Number.parseInt(number);
}

function validateCount(number) {
  try {
    return parseCount(number)
  } catch (e) {
    return e;
  }
}

// Задача №2
class Triangle {
  constructor(a, b, c) {
    if ((a + b < c || b + c < a) || c + a < b) throw new Error(`Треугольник с такими сторонами не существует`);
  }

  getPerimeter() {
    return a + b + c;
  }

  getArea() {
    const p = (a + b + c) / 2;
    return (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
  return new Triangle(a, b, c)
  } catch (e) {

  }
}

const triangle = new Triangle(2,5,5);
