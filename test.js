function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}
Foo.getName = function() {
  console.log(2)
}
Foo.prototype.getName = function() {
  console.log(3)
}
var getName = function() {
  console.log(5)
}
function getName() {
  console.log(4)
}
// Foo.getName() // 2
// getName() //5
// Foo().getName() //3 undefined
// getName() //5
// new Foo().getName() //3
// new new Foo().getName()
let k = new new Foo()()
console.log(k)
console.log(k.__proto__)
