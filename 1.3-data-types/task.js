'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  let body = +amount - +contribution;
  let monthTotal = ((date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth()) - new Date().getMonth();
  let monthPercent = (+percent / 100) / 12;
  let monthlyTax = body * (monthPercent + monthPercent/(((1 + monthPercent)**monthTotal) - 1));
  let totalAmount = (monthTotal * monthlyTax).toFixed(2);

  if (Object.is(percent, NaN) || percent === null || percent === undefined){
    return "Параметр 'Процентная ставка' содержит неправильное значениe " + percent;
  } else if (Object.is(contribution, NaN) || contribution === null || contribution === undefined){
    return "Параметр 'Сумма первоночального взноса' содержит неправильное значениe " + contribution;
  } else if (Object.is(amount, NaN) || amount === null || amount === undefined){
    return "Параметр 'Сумма кредита' содержит неправильное значениe " + amount;
  }

    return parseFloat(totalAmount);
}

function getGreeting(name) {
  let greeting;
  if (Object.is(name, NaN) || name === null || name === " " || name === undefined || name === '') {
    greeting = `Привет, мир! Меня зовут Аноним`
  } else {
    greeting = `Привет, мир! Меня зовут ${name}`;
  }
  return greeting;
}
