var Base = function() {
  this.a = 'test'
}
Base.prototype.a = 3

var p_1 = Object.create(Base)
var p_2 = new Object()
p_2.__proto__ = Base // p_1 p_2 一样
console.log(p_2.prototype)
var p_3 = new Base()
var p_4 = new Object()
p_4.__proto__ = Base.prototype
Base.call(p_4)
console.log(p_3, p_4)

// Object.mycreate=function()

// console.log(new Base())
//
// Object.mycreate = function (o) {
//   var F = new Object()
//   F.__proto__ = o.prototype
//   return F
// }
// console.log(Object.mycreate(Base))

//  Object.create
// 1.  创建空对象{}
// 2.  指定空对象{}的原型为Object.create()的参数。
// new 的过程
// 1.创建实例对象person1
// 2. 调用构造函数(Person)初始化person1成员变量（firstname
// 3. 指定实例对象的原型为Person.prototype对象。即person1.__proto__指向Person.prototype。
