let a = { c: 1 }
Object.defineProperty(a, 'b', {
  get: function() {
    return this.c++
  }
})
console.log(a.b == 1 && a.b == 2 && a.b == 3)
