class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("hello" + this.name);
  }

  static see() {
    console.log("how are you" + this.name);
  }
}

class lily extends People {
  constructor(name, age) {
    super(name, age);
  }
  goodbye() {
    console.log("goodbye");
  }
}
let people = new People(11, 12);
let ly = new lily(22, 44);

console.log(people, ly);
people.say();
ly.say();

People.see();
lily.see();
