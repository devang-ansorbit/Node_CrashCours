class Person  {
    constructor(name,age,email) {
        this.name  = name;
        this.age = age;
        this.email = email;
    }

    greeting() {
        console.log(`My name is ${this.name} and I amd ${this.age} year old and my email ID : ${this.email}`)
    }
}

console.log('DirName :',__dirname,'FileName is :', __filename);
module.exports = Person;
