class PromiseLists {
  constructor(urls, current, allConnect) {
    if (!urls || !this.isUrls(urls)) {
      throw Error('urls is required')
    } else {
      this.urls = urls
    }
    // 默认发送urls与总的次数相等
    this.allConnect = allConnect ? allConnect : this.urls.length
    // simle is number
    this.current = current && !isNaN(current) ? current : 3
    this.promiseList = []
    //init promiseList success index
    this.successIndex = 0
    //init callback
    this.callBack = data => {
      console.log('callBack:', data.url)
    }
  }
  isUrls(urls) {
    // 判断是否是数组且是urls数组
    return true
  }
  /**
   * create promise
   * @param {*} url promise urls
   * @param {*} listIndex  promiseList Index
   */
  createPromise(url, listIndex) {
    // 创建一个　减少一个
    console.log('createPromise:', url)
    this.allConnect--
    return new Promise(resolve => {
      let delay = Math.random() * 6000
      setTimeout(() => {
        resolve({
          url,
          listIndex
        })
      }, delay)
    }).then(data => {
      this.successIndex = data.listIndex
      this.callBack(data)
    })
  }
  initPromise() {
    let index = 0
    while (this.promiseList.length < this.current && this.allConnect > 0) {
      this.promiseList.push(
        //　倒着创建
        this.createPromise(this.getPromiseUrl(), index++)
      )
    }
    this.continueConnect()
  }
  getPromiseUrl() {
    return this.urls[this.allConnect - 1]
  }
  /**
   * 生成剩余的promise
   */
  continueConnect() {
    if (this.allConnect > 0) {
      Promise.race(this.promiseList).then(() => {
        this.promiseList[this.successIndex] = this.createPromise(
          this.getPromiseUrl(),
          this.successIndex
        )
        this.continueConnect()
      })
    }
  }
}
let urls = Array(10)
  .fill('urls')
  .map((v, i) => {
    return `${v}.${i}`
  })
let plist = new PromiseLists(urls)
plist.initPromise()
