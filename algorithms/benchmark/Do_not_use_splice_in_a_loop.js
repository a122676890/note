const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

function arrayInsert(target, insertIndex, insertArr) {
  const before = target.slice(0, insertIndex);
  const after = target.slice(insertIndex);
  return before.concat(insertArr, after);
}


// 添加测试
suite
  .add('ha splice', () => {
    const array1 = [1, 2, 3];
    for (let index = 0; index < 3; index++) {
      array1.splice(index, 0, 1);
    }
  })
  .add('no splice', () => {
    let array2 = [1, 2, 3];
    const newarr = [];
    for (let index = 0; index < 3; index++) {
      newarr.push(1);
    }
    array2 = arrayInsert(array2, 0, newarr);
  }).on('cycle', (event) => {
    console.log(String(event.target));
  }).run({ async: true });
