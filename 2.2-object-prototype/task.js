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

// Задача №2

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

//  Задача №3

function checkBirthday(birthday) {
  const now = +(new Date())
  const manBirthday = +(new Date(birthday))
  const age = ((now - manBirthday) / 31536000000).toFixed(0)
  return (age > 18) ? true : false
}