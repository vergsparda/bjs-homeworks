`use strict`
// Задача №1
String.prototype.isPalindrome = function () {
  let message = this.toUpperCase().replace(/\s/g, '')
  console.log(message)
  let result;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === message[message.length - 1 - i]) {
      result = true
    } else {
      result = false
    }
  }
  return result;
}

function getAverageMark(marks) {
  let sum = 0
  let averageMark
  if (marks != 0) {
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i]
      averageMark = Math.round(sum / marks.length)
    }
  } else {
    averageMark = 0
  }
  return averageMark
}

function checkBirthday(birthday) {
  let now = +(new Date)
  let manBirthsay = +birthday
  let diff = now - manBirthday
  let age = diff / 3.154 * Math.E + 10
  return verdict
}