'use strict'

// Задача №1

function getSolutions(a, b, c) {
  const D = Math.pow(b, 2) - (4 * a * c)
  let x1
  let x2
  const solution = {
    D: D,
    roots: []
  }

  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a)
    x2 = (-b - Math.sqrt(D)) / (2 * a)
    solution.roots[0] = x1
    solution.roots[1] = x2
  } else if (D === 0) {
    x1 = -b / 2 * a
    solution.roots[0] = x1
  }

  return solution
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c)
  console.log(`Вычисляем корни квадратного уровнения ${a}x² + ${b}x + ${c}`)
  console.log(`Значение дискриминанта: ${result.D}`)
  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корнец')
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
}
// Задача №2

const data = {
  algebra: [4, 5, 5, 4],
  geometry: [2, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 5],
  english: [4, 4, 3, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}

function getAverageMark(marks) {
  let sum = 0

  if (marks !== 0) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i]
    }
  } else {
    return 0
  }

  return sum / marks.length
}

function getAverageScore(data) {
  const dataScore = new Object()

  for (let prop in data) {
    const value = getAverageMark(data[prop])
    dataScore[prop] = value
  }
  console.log(dataScore)
  return
}