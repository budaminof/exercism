class School {
  constructor() {
    this.students = { };
  }

  roster() {
    return this.students;
  }

  add(name, grade) {
    if (this.students[grade]) {
      this.students[grade].push(name);
      this.students[grade].sort();
    }
    else this.students[grade] = [name];
    return
  }

  grade(gradeNum) {
    if (!this.students[gradeNum]) return [];
    return this.students[gradeNum];
  }

}

module.exports = School;
