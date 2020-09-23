'use strict'

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Параметр id не задан');
    }
    if (this.alarmCollection.find(item => item.id == id)) {
      console.error('Будильник с таким id уже существует')
      return false;
    }
    this.alarmCollection.push({
      id,
      time,
      callback
    });
  }

  removeClock(id) {
    let index = this.alarmCollection.indexOf(this.alarmCollection.find(item => item[id] === id));
    this.alarmCollection.splice(index, 1);
    return !this.alarmCollection.some(item => item[id] === id)
  }

  getCurrentFormattedTime() {
    const time = new Date();
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
    return `${hours}:${minutes}`;
  }

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(
        () => this.alarmCollection.forEach(item => this.checkClock(item.id)), 500);
    }
  }

  checkClock(id) {
    const clockTime = this.alarmCollection.find(item => item.id === id);
    if (clockTime.time === this.getCurrentFormattedTime()) {
      clockTime.callback();
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Список будильников`);
    this.alarmCollection.forEach(item => console.log(`id: ${item.id}, time: ${item.time}`))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  const myClock = new AlarmClock();

  myClock.addClock('07:00', () => console.log('Подождите...'), 1);
  myClock.addClock('07:11', () => {
    console.log('Печать и удаление');
    myClock.removeClock(2);
    myClock.printAlarms();
  }, 2);
  myClock.addClock('07:15', () => {
    console.log('Печать, удаление и остановка');
    myClock.clearAlarms();
    myClock.printAlarms();
  }, 3);

  console.log('Ошибка индетификатора');
  myClock.addClock('07:20', () => console.log('Повторение индетификатора'), 3);

  myClock.printAlarms();
  myClock.start();
}

testCase();
