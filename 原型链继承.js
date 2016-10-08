const print = require('./print.js');

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        print('I am at grade ' + this.grade);
    }
}

let a = new PrimaryStudent({
    name: 'tst',
    grade: 100
})

// print(Student.prototype.isPrototypeOf(a));
// print(Student.isPrototypeOf(a));
// print(a instanceof Student);

var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

print(o2.isPrototypeOf(o3));
print(o1.isPrototypeOf(o3));