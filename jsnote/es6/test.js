// console.log(NaN === NaN) //false
// let arr = [2, 3, 5, 4, 5, 2, 2]
// let set=new Set()
// arr.forEach(x => set.add(x))
// console.log(set)
// console.log([...set])
// console.log(set.keys())

var pro = function(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("success" + time);
    }, time);
  });
};

var gen = function*() {
  var f1 = yield pro(200);
  var f2 = yield pro(400);
  console.log(f1.toString());
  console.log(f2.toString());
};
run(gen);
function run(gen) {
  let g = gen();
  function next(data) {
    let result = g.next(data);
    if (result.done) {
      return result.value;
    }
    result.value.then(data => {
      next(data);
    });
  }
  next();
}
// g.next().value.then(data => {
//   console.log(data)
//   g.next(data).value.then(function(data) {
//     console.log(data)
//     g.next(data)
//   })
// })
