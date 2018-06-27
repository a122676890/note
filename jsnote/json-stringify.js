function stringify(schema, obj) {}

JSON.stringify({}) // '{}'
JSON.stringify(true) // 'true'
JSON.stringify('foo') // '"foo"'
JSON.stringify([1, 'false', false]) // '[1,"false",false]'
JSON.stringify({ x: 5 }) // '{"x":5}'

JSON.stringify({ x: 5, y: 6 })
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String('false'), new Boolean(false)])
// '[1,"false",false]'

JSON.stringify({ x: undefined, y: Object, z: Symbol('') })
// '{}'

JSON.stringify([undefined, Object, Symbol('')])
// '[null,null,null]'

JSON.stringify({ [Symbol('foo')]: 'foo' })
// '{}'

JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')])
// '{}'

JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol'
  }
})

// undefined

// 不可枚举的属性默认会被忽略：
JSON.stringify(
  Object.create(null, {
    x: { value: 'x', enumerable: false },
    y: { value: 'y', enumerable: true }
  })
)
