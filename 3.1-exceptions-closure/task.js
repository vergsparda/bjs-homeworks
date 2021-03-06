`use strict`

// Задача №1

function parseCount(number) {
  //добавлена переменная для одного действия парсинга.
  let parsed = Number.parseInt(number);
  if (isNaN(parsed)) throw new Error(`Невалидное значение`);
  else return parsed;
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
    else this.sides = [a, b, c];
  }

  getPerimeter() {
    return this.sides.reduce((a, b) => a + b);
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    return Number((Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]))).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch {
    return {
      getArea: () => ('Ошибка! Треугольник не существует'),
      getPerimeter: () => ('Ошибка! Треугольник не существует'),
    }
  }
}
