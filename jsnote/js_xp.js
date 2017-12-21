/**
 * 洗牌算法＋测试
 */
let initData = [1, 2, 3]
let result = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
let tj = []
let arraycompare = (a, b) => {
  return a.toString() == b.toString()
}
let fun = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let key = Math.ceil(Math.random() * 300) % 3
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
 * 1000 次生成的结果　[ 172, 159, 177, 172, 167, 153 ]
 * 10000次生成的结果　[ 1623, 1716, 1630, 1682, 1700, 1649 ]
 * 100000次生成的结果　[ 16512, 16474, 16604, 16774, 16786, 16850 ]
 */
for (let k = 0; k < 100000; k++) {
  fun(initData)
}
console.log(tj)
