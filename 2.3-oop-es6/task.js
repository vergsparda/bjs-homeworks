`use strict`

//  задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state *= 1.5;
  }

  set state(number) {
    return number > 100 ? this._state = 100 : number ? this._state = number : this._state = 0;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, relaeseDate, pagesCount) {
    super();
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, relaeseDate, pagesCount) {
    super(name, relaeseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, relaeseDate, pagesCount) {
    super(author, name, relaeseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, relaeseDate, pagesCount) {
    super(author, name, relaeseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, relaeseDate, pagesCount) {
    super(author, name, relaeseDate, pagesCount);
    this.type = 'detective';
  }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) this.books.push(book)
    else console.log(`Книга ${book.name} не может быть добавлена в библиотеку`);
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) return book;
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let index in this.books) {
      if (this.books[index].name === bookName) {
        let result = this.books[index];
        this.books.splice(index, 1);
        return result;
      }
    }
    return null
  }
}

const library = new Library(`Библиотека имени Ленина`);

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

//  Задача №3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (subject) {
      if (!this.grades[subject]) this.grades[subject] = [];
      grade >= 1 && grade <= 5 ? this.grades[subject].push(grade) : console.log(`Оценка в журнал не вносится. Введите оценку в диапазоне от 1 до 5`)
      return this.grades[subject].length;
    } else return console.log('Введите корректное название предмета');
  }

  getAverageBySubject(subject) {
    if (this.grades[subject].length === 0) return 0;
    else {
      let sum = 0;
      for (let i = 0; i < this.grades[subject].length; i++) {
        sum += this.grades[subject][i];
      }
      return (sum / this.grades[subject].length);
    }
  }

  getTotalAverage() {
    let sum = 0;
    let count = 0;
     for ( let subject in this.grades) {
       for (let mark of this.grades[subject]) {
         sum += mark;
         count++;
       }
     }
     return count ? sum / count : 0;
  }
}

const log = new StudentLog('Олег Никифоров');
