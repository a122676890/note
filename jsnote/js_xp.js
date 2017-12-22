/**
 * 洗牌算法＋测试
 * 对于　１，２　，３
 */
let initData = [1, 2, 3]
let result = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
let tj = []
let arraycompare = (a, b) => {
  return a.toString() == b.toString()
}
let fun = arr => {
  let len = arr.length
  // 判断条件注意下　这样是生成 n!的组合
  for (let i = arr.length - 1; i > 0; i--) {
    let key = Math.floor(Math.random() * (i + 1))
    let temp = arr[key]
    arr[key] = arr[i]
    arr[i] = temp
  }

  let findIndex = result.find((ele, index) => {
    if (arraycompare(ele, arr)) {
      tj[index] = tj[index] ? tj[index] + 1 : 1
      return true
    }
  })
}
/**
 */
for (let k = 0; k < 10000000; k++) {
  fun(initData)
}
console.log(tj)
