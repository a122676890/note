/**
 * Promist 队列执行的一种简单实现
 */

let testPromise = (index, listIndex) => {
  return new Promise(resolve => {
    let delay = Math.random() * 1000
    setTimeout(() => {
      console.log(index, delay)
      resolve({
        index,
        listIndex
      })
    }, delay)
  })
}

let initConnect = 10
let current = 3
let promiseList = []
let successIndex = 0

let createPromise = (i, v) => {
  initConnect--
  return testPromise(i, v).then(data => {
    successIndex = data.listIndex
  })
}
let initPromise = () => {
  let index = 0
  while (promiseList.length < current) {
    promiseList.push(createPromise(initConnect, index++))
  }
}
let after = () => {
  if (initConnect > 0) {
    Promise.race(promiseList).then(() => {
      promiseList[successIndex] = createPromise(initConnect, successIndex)
      after()
    })
  }
}
initPromise()
after()
