function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
   // Ваш код
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
    //ваш код
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = mark;
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((sum, current) => sum + current) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}