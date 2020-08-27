'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  const body = +amount - +contribution
  const monthTotal = ((date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth()) - new Date().getMonth()
  const monthPercent = (+percent / 100) / 12
  const monthlyTax = body * (monthPercent + monthPercent / (((1 + monthPercent) ** monthTotal) - 1))
  const totalAmount = (monthTotal * monthlyTax).toFixed(2)

  if (Object.is(percent, NaN) || percent === null || percent === undefined) {
    return "Параметр 'Процентная ставка' содержит неправильное значениe " + percent
  } else if (Object.is(contribution, NaN) || contribution === null || contribution === undefined) {
    return "Параметр 'Сумма первоночального взноса' содержит неправильное значениe " + contribution
  } else if (Object.is(amount, NaN) || amount === null || amount === undefined) {
    return "Параметр 'Сумма кредита' содержит неправильное значениe " + amount
  }

  return parseFloat(totalAmount)
}

function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || 'Аноним'}`
}