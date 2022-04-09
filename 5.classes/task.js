
//Создайте базовый класс PrintEditionItem со следующими свойствами:
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  //создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число).
  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  //Создайте «геттер», который позволит читать значение свойства state
  get state() {
    return this._state;
  }

}

//Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только явно указанным типом. Значение свойства type должно быть равно "magazine".

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
    this.state = 100;
  }
}

//Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. Значение свойства type должно быть равно "book".
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
    this.state = 100;
  }
}

//Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type должны быть равны "novel", "fantastic" и "detective" соответственно.

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//Задача 2
//Создайте класс Library со следующими свойствами:

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  //Реализуйте метод addBook(book), который будет в качестве аргумента принимать объект (книгу или журнал). Метод должен добавлять книгу в хранилище books, только если состояние state книги больше 30
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }
  //Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ, по которому будет производиться поиск (тип, автор, название, год выпуска и пр.) и искомое значение. Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null
  }
  //Создайте метод giveBookByName(bookName), который будет в качестве аргумента принимать название книги, запрошенной читателем. Если запрошенная книга найдена, метод должен удалять книгу из хранилища books, и возвращать её. Если книга не была найдена, метод должен возвращать null.
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const result = this.books[i];
        this.books.splice(i, 1);
        return result;
      }
    }
    return null;
  }
}


//Задача 3
class Student {
  constructor(name) {
    this.name = name;
   
  }
}