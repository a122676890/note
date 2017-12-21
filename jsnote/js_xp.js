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
  for (let i = arr.length - 1; i > 0; i--) {
    let key = Math.floor(Math.random() * len--)
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
for (let k = 0; k < 100000; k++) {
  fun(initData)
}
console.log(tj)
