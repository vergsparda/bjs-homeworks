`use strict`

//  Задача №1

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(a) {
  return weapons.filter(weapon => weapon.durability > a).length;
}

function hasReliableWeapons(a) {
  return weapons.some(weapon => weapon.durability > a);
}

function getReliableWeaponsNames(a) {
  let names = [];
  weapons.forEach(weapon => {
    if (weapon.durability > a) {
      names.push(weapon.name);
    }
  });
  return names;
}

function getTotalDamage() {
  return weapons.reduce((acc, weapon) => acc += weapon.attack, 0);
}

// Необязательно. Напишите функцию, которая принимает массив чисел и значение суммы, а возвращает значение количества чисел, которое необходимо суммировать до получения переданной суммы. Если набранной суммы не хватает, то возвращает общее количество элементов.

function getValuestCountToSumValues(arr, number) {
  let result = arr.length;
  arr.reduce(function (acc, item, index) {
    if (acc >= number) {
      result = index;
      return;
    } else return acc += item;
  }, 0);
  return result;
}

console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 10));
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 50));

// Задача №2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(200); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((item, index) => item === arr2[index]);
}

function memorize(fn, limit) {
  let memory = [];
  return function (...args) {
    const oldResult = memory.find(item => compareArrays(args, item.args));
    if (oldResult) return oldResult.result;
    const newResult = fn(...args);
    if (memory.length === limit) memory.shift();
    memory.push({
      args: args,
      result: newResult
    });
    return newResult;
  }
}

const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти
sum(3, 4); // 7
// разница только в том, что mSum запоминает результат (7)
// и повторно не делает вычисления
mSum(3, 4); // 7
