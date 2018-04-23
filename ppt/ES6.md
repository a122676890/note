# es6 简单说明

1.  let + Const
    var 即变量可以在声明之前使用，值为 undefined
    let 不存在变量提升 let 命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错
    const 声明一个只读的常量。一旦声明，常量的值就不能改变
    // 定义常量
    const REG_GET_INPUT = /^\d{1,3}$/;
    // 定义配置项
    let config = {
    isDev : false,
    pubDir: './admin/'
    }

很多人看完概念之后，第一印象都是：“const 是表示不可变的值，而 let 则是用来替换原来的 var 的。”
一段代码中出现大量的 let，只有部分常量用 const 去做定义，这样的使用方式是错误的。
const 的定义是不可重新赋值的值，与不可变的值(immutable value)不同；const 定义的 Object，在定义之后仍可以修改其属性。使用场景很广，包括常量、配置项以及引用的组件、定义的 “大部分” 中间变量等，都应该以 const 做定义。反之就 let 而言，他的使用场景应该是相对较少的，我们只会在 loop(for，while 循环)及少量必须重定义的变量上用到他。

Template Strings（字符串模板）字符串模板是我刚接触 ES6 时最喜欢的特性之一，他语法简洁，语义明确，而且很好的解决了之前字符串拼接麻烦的问题。因为他并不是 “必须” 的，而且原有的字符串拼接思维根深蒂固，导致我们很容易忽视掉他。

使用实例我们先来看看他的一般使用场景：

const start = 'hi all';

const getName = () => {
return 'jelly';
};

const conf = {
fav: 'Coding'
};

// 模板
const msg = `${start}, my name is ${getName()}, ${conf.fav} is my favourite`;
你可能不知道的事
// 1. 与引号混用
const wantToSay = `I'm a "tbfed"`;

// 2. 支持多行文本
const slogan =
`I have a dream today!`;

// 比较适合写 HTML
const resultTpl =
`

  <section>
    <div>...</div>
  </section>
`;

Arrows and Lexical This（箭头函数）箭头函数是 ES6 中的一个新的语法特性，他的用法简单，形态优雅，备受人们青睐。

大多数同学初识这个特性时，更多的仅仅用它作为函数定义的简写，这其实就有些屈才了。

// 未使用箭头函数的写法
{
...

addOptions: function (options) {

    var self = this;

    options.forEach(function(name, opts){

      self[name] = self.addChild(name, opts);

    });

}
}

// 使用箭头函数后的写法
{
...

addOptions: function (options) {
options.forEach((name, opts) => {
this[name] = this.addChild(name, opts);
});
}
}
可以注意到上下两段代码的区别。

在未使用箭头函数前，我们在过程函数中使用父级 this，需要将其显式缓存到另一个中间变量中，因为过程函数有独立的 this 变量，会覆盖父级；使用箭头函数后，不但简写了一个过程函数（ forEach 的参数），还省略掉了 this 的中间变量的定义。

原因：箭头函数没有独立执行上下文（ this ），所以其内部引用 this 对象会直接访问父级。

插播：原来我们定义这个中间变量还有一个有趣的现象，就是明明千奇百怪，例如 self, that, me, \_that, \_me, Self...，快站出来说说你用过哪个，还是哪几个~

当然，从这块我们也可以看出，箭头函数是无法替代全部 function 的使用场景的，例如我们需要有独立 this 的函数。

你可能不知道的事箭头函数不但没有独立 this，他也没有独立的 arguments，所以如果需要取不定参的时候，要么使用 function，要么用 ES6 的另一个新特性 rest（具体在 rest 中会有详解）。箭头函数语法很灵活，在只有一个参数或者只有一句表达式做方法体时，可以省略相应括号。
// 完整写法
const getOptions = (name, key) => {
...
}

// 省略参数括号
const getOptions = key => {
...
}

// 省略参数和方法体括号
const getOptions = key => console.log(key);

// 无参数或方法体，括号不能省略
const noop = () => {};
有个简单小栗子，这一灵活的语法在写连续的 Promise 链式调用时，可以使代码更加优雅

gitPromise
.then(() => git.add())
.then(() => git.commit())
.then(() => git.log())
.then((msg) => {
...
})
.then(() => git.push())
.catch((err) => {
utils.error(err);
});

Destructuring（解构）解构这个特性可以简单解读为分别定义，用于一次定义多个变量，常常用于分解方法返回对象为多个变量，分别使用。使用过 ES6 的同学应该或多或少接触过这个特性，但是你可能不知道它如下几个用法：

你可能不知道的事
const bookSet = ['UED', 'TB fed', 'Not find'];
const bookCollection = () => {
return {book1: 'UED', book2: 'TB fed'};
};

// 1. 解构也可以设置默认值
const {book1, book3 = 'Not find'} = bookCollection();

// 2. 解构数组时候是可以跳过其中某几项的
const [book1,,book3] = bookSet; // book1 = 'UED', book3 = 'Not find'

// 3. 解构可以取到指定对象的任何属性，包括它包含的方法
const {length: setLength} = bookSet; // setLength = 3
Rest + Spread
Rest 和 Spread 主要是应用 ... 运算符，完成值的聚合和分解。

你可能不知道的事

// 1. rest 得到的是一个真正的数组而不是一个伪数组
const getOptions = function(...args){
console.log(args.join); // function
};

// 2. rest 可以配合箭头函数使用，达到取得所有参数的目的
const getOptions = (...args) => {
console.log(args); // array
};

// 3. spread 可以用于解构时，聚合所得的值
const [opt1, ...opts] = ['one', 'two', 'three', 'four'];

// 4. spread 可以用于数组定义
const opts = ['one', 'two', 'three', 'four'];
const config = ['other', ...opts];

Classes
ES6 中实现的一个语法糖，用于简化基于原型集成实现类定义的场景。虽然有很多人不太喜欢这个特性，认为它作为一个简单增强扩展，并没有其他语言 class 应有的特点。但是就我自己观点来看，还是感觉这样一种写法确实比原有的原型继承的写法语义更清晰、明确，而且语法更简单。

同样，可能有些用法是你之前容易忽略掉的，在此做个补充。

你可能不知道的事

// 1. 静态变量
// ES6 的类定义实现了静态方法的定义，但静态变量呢？
// 可以用如下方式实现:
class TbFedMembers{
static get HuaChen(){
return 'jelly';
}
}
TbFedMembers.HuaChen; // "化辰"

// 2. 私有属性（私有属性有多种实现方式，只谈及其中一种）
// 闭包
const TbFedMembers = (() => {
const HuaChen = 'jelly';

return class{
getOneMemberName(){
return HuaChen;
}
};
})();

Promises
Promise 不只是一个对象、一个语法，他更是一种异步编程方式的变化相信使用过 ES6 的同学都已经开始尝试了 Promise，甚至在不支持 ES6 的时候，已经开始使用一些基于 Promise 思想的开源框架。

那么我们之前用 Promise 究竟用的对么？有什么需要注意的点呢？

你可能不知道的事

// 1. 多个异步任务同时执行用 Promise.all，顺序执行使用链式调用
// Promise.all
Promise
.all([jsBuildPromise, cssBuildPromise])
.then(() => {
...
});

// chain
jsBuildPromise
.then(() => cssBuildPromise)
.then(() => {
...
});

// 2. Promise 的链式调用需要每一个过程返回一个 Promise 对象才能保证顺序执行
gitPromise
.then(() => git.add()) // 正确，箭头函数简写
.then(() => {
git.commit(); // 错误，函数返回 undefined，会立即执行下一过程
})
.then(() => {
return git.log(); // 正确
});

// 3. Promise 需要调用 catch 方法来捕获错误，而且过程内的错误不会阻塞后续代码执行
new Promise(() => {
f; // not define error !
})
.catch((err) => {
console.log(err) // show 'f is not define'
});
console.log('error test'); // 此行可以被正常执行

Module
模块化是个进行了很久的话题，发展历程中出现过很多模式，例如 AMD, CommonJS 等等。
Module 是 ES6 的新特性，是语言层面对模块化的支持。与之前模块加载机制不同，Module 是动态的加载，导入的是变量的 只读引用 ，而不是拷贝
// 1. export default 可以做默认导出
// a.js
export default 5; // 默认导出
// b.js
import b, {a} from './a.js'; // 默认导入，不需要加花括号
// 2. 动态的加载机制
// a.js
export let a = 10;
export let b = 10;
export function add() {
a = 15;
b = 20;
return a+b;
};

// b.js
import {a, b, add} from './a.js';
a+b; // 20
add(); // 35
a+b; // 35

Iterator + For..Of
ES6 中除了新特性外，还有一个新的规范，那就是关于迭代的规范，他包括两部分分别是 “可迭代规范（iterable protocol）” 和 “迭代器规范（iterator protocol）”。任何实现了前者的对象，都可以进行 for…of 循环。

String, Array, Map, Set 等是原生可迭代对象，因为他们都在原型（prototype）对象中实现了 Symbol.iterator 键对应的方法

for…of 是对象迭代器的遍历，而 for…in 是对象中 可枚举 值的遍历

下面用代码来解释一下两个规范：

// 1. 迭代器规范
const iter = {
counter: 0,
next(){ // 迭代器是实现了 "next()" 函数的对象
if(++this.counter < 10){
return { // 返回一个含有两个键值对的对象，Object {done => boolean, value => any}
done: false,
value: this.counter
}
}else{
this.counter = 0;
return { // done = true 时，value 非必须
done: true
}
}
}
};

// 2. 可迭代规范，实现 "Symbol.iterator => func()" 键值对；而 "func()" 返回一个 迭代器对象
const iterObj = {};
for(var i of iterObj){}; // TypeError: iterObj is not iterable
iterObj[Symbol.iterator] = function() {
return iter;
};
for(var i of iterObj){
console.log(i); // 1,2,3,4,5,6,7,8,9
};
关于集合原来我们使用集合，多数情况下会直接用 Object 代替，ES6 新增了两个特性，Map 和 Set，他们是对 JavaScript 关于集合概念的补充。

Map
刚刚看到这个概念的同学会有几个常见的疑问，为什么我们需要 Map 这种数据结构？直接用 Object 不好么？ 是不是 Map 可以完全取代 Object 用于数据存取？

Map 与 Object 的区别

Map 与 Object 都可以存取数据，Map 适用于存储需要 常需要变化（增减键值对）或遍历 的数据集，而 Object 适用于存储 静态 （例如配置信息）数据集
Object 的 key 必须是 String 或 Symbol 类型的，而 Map 无此限制，可以是任何值
Map 可以很方便的取到键值对数量，而 Object 需要用额外途径
// 1. Map 的构造函数可以传入一个 “可迭代的对象（例如数组）”，其中包含键值对数组
const first = new Map([['a', 1], [{'b': 1}, 2]]); // Map {"a" => 1, Object {b: 1} => 2}

// 2. Map 的键可以是任何值，甚至是 undefined 或 null
first.set(null, 1).set(undefined, 0); // Map {"a" => 1, Object {b: 1} => 2, null => 1, undefined => 0}
Set
Set 作为最简单的集合，有着如下几个特点：

Set 可以存储任何类型的值，遍历顺序与 插入顺序相同
Set 内无重复的值
// 1. Set 的构造函数可以传入一个 “可迭代的对象（例如数组）”，其中包含任意值
const first = new Set(['a', 1, {'b': 1}, null]); // Set {"a", 1, Object {b: 1}, null}

// 2. Set 无法插入重复的值
first.add(1); // Set {"a", 1, Object {b: 1}, null}
WeakMap + WeakSet
WeakMap 与 WeakSet 作为一个比较新颖的概念，其主要特点在于弱引用。

相比于 Map 与 Set 的强引用，弱引用可以令对象在 “适当” 情况下正确被 GC 回收，减少内存资源浪费。

但由于不是强引用，所以无法进行遍历或取得值数量，只能用于值的存取（WeakMap）或是否存在值得判断（WeakSet）

在弱引用的情况下，GC 回收时，不会把其视作一个引用；如果没有其他强引用存在，那这个对象将被回收

// 1. WeakMap 键必须是对象
const err = new WeakMap([['a',1]]); // TypeError: Invalid value used as weak map key

// 2. WeakMap/WeakSet 的弱引用
const wm = new WeakMap([[{'a':1},1]]); // Object {'a': 1} 会正常被 GC 回收

const ws = new WeakSet();
ws.add({'a':1}); // Object {'a': 1} 会正常被 GC 回收

const obj = {'b': 1};
ws.add(obj); // Object {'b': 1} 不会被正常 GC 回收，因为存在一个强引用
obj = undefined; // Object {'b': 1} 会正常被 GC 回收异步编程在 ES6 之前，JavaScript 的异步编程都跳不出回调函数这个方式。回调函数方式使用非常简单，在简单异步任务调用时候没有任何问题，但如果出现复杂的异步任务场景时，就显得力不从心了，最主要的问题就是多层回调函数的嵌套会导致代码的横向发展，难以维护；ES6 带来了两个新特性来解决异步编程的难题。

// 一个简单的多层嵌套回调函数的例子 (Node.js)
const git = require('shell').git;
const commitMsg = '...';

git.add('pattern/for/some/files/\*', (err) => {
if(!err){
git.commit(commitMsg, (err) => {
if(!err){
git.push(pushOption);
}else{
console.log(err);
}
});
}else{
console.log(err);
}
});
Promise
Promise 是 ES6 的一个新特性，同为异步编程方式，它主要有如下几个特点：

本质还是回调函数区分成功和失败的回调，省去嵌套在内层的判断逻辑可以很轻松的完成回调函数模式到 Promise 模式的转化代码由回调函数嵌套的横向扩展，变为链式调用的纵向扩展，易于理解和维护
Promise 虽然优势颇多，但是代码结构仍与同步代码区别较大

// 上例用 Promise 实现
// 假定 git.add, git.commit, git.push 均做了 Promise 封装，返回一个 Promise 对象
const git = require('shell').git;
const commitMsg = '...';

git.add('pattern/for/some/files/\*')
.then(() => git.commit(commitMsg))
.then(git.push)
.catch((err) => {
console.log(err);
});
Generator
Generator 作为 ES6 的新特性，是一个语言层面的升级。它有以下几个特点：

可以通过 yield 关键字，终止执行并返回（内到外）可以通过 next(val) 方法调用重新唤醒，继续执行（外回内）运行时（包括挂起态），共享局部变量
Generator 执行会返回一个结果对象，结果对象本身既是迭代器，同时也是可迭代对象（同时满足两个迭代规范），所以 Generator 可以直接用于 自定义对象迭代器由于具备以上特点（第四点除外），Generator 也是 JavaScript 对 协程（coroutine）的实现，协程可以理解为 “可由开发人员控制调度的多线程”

协程按照调度机制来区分，可以分为对称式和非对称式

非对称式：被调用者（协程）挂起时，必须将控制权返还调用者（协程）

对称式：被调用者（协程）挂起时，可将控制权转给 “任意” 其他协程

JavaScript 实现的是 非对称式协程（semi-coroutine）；非对称式协程相比于对称式协程，代码逻辑更清晰，易于理解和维护

协程给 JavaScript 提供了一个新的方式去完成异步编程；由于 Generator 的执行会返回一个迭代器，需要手动去遍历，所以如果要达到自动执行的目的，除了本身语法外，还需要实现一个执行器，例如 TJ 大神的 co 框架。

// 上例用 Generator 实现
// 假定 git.add, git.commit, git.push 均做了 Promise 封装，返回一个 Promise 对象
const co = require('co');
const git = require('shell').git;

co(function\* (){
const commitMsg = '...'; // 共享的局部变量

yield git.add('pattern/for/some/files/\*');
yield git.commit(commitMsg);
yield git.push();
}).catch((err) => {
console.log(err);
});
Generator 是一个 ES6 最佳的异步编程选择么？显然不是，因为除了基本语法外，我们还要额外去实现执行器来达到执行的目的，但是它整体的代码结构是优于回调函数嵌套和 Promise 模式的。

Async-Await
这并不是一个 ES6 新特性，而是 ES7 的语法，放在这里是因为它将是 JavaScript 目前支持异步编程最好的方式

// 上例用 async-await 实现
// 假定 git.add, git.commit, git.push 均做了 Promise 封装，返回一个 Promise 对象
const git = require('shell').git;

(async function(){
const commitMsg = '...'; // 共享的局部变量

try{
await git.add('pattern/for/some/files/\*');
await git.commit(commitMsg);
await git.push();
}catch(err){
console.log(err);
}
})();
元编程元编程是指的是开发人员对 “语言本身进行编程”。一般是编程语言暴露了一些 API，供开发人员来操作语言本身的某些特性。ES6 两个新特性 Proxy 和 Reflect 是 JavaScript 关于对象元编程能力的扩展。

Proxy
Proxy 是 ES6 加入的一个新特性，它可以 “代理” 对象的原生行为，替换为执行自定义行为。

这样的元编程能力使得我们可以更轻松的扩展出一些特殊对象。

任何对象都可以被 “代理”
利用 Proxy.revocable(target, handler) 可以创建出一个可逆的 “被代理” 对象
// 简单 element 选择控制工具的实现
const cacheElement = function(target, prop) {
if(target.hasOwnProperty(prop)){
return target[prop];
}else{
return target[prop] = document.getElementById(prop);
}
}

const elControl = new Proxy(cacheElement, {
get: (target, prop) => {
return cacheElement(target, prop);
},
set: (target, prop, val) => {
cacheElement(target, prop).textContent = val;
},
apply: (target, thisArg, args) => {
return Reflect.ownKeys(target);
}
});

elControl.first; // div#first
elControl.second; // div#second
elControl.first = 5; // div#first => 5
elControl.second = 10; // div#second => 10
elControl(); // ['first', 'second']
Reflect
ES6 中引入的 Reflect 是另一个元编程的特性，它使得我们可以直接操纵对象的原生行为。Reflect 可操纵的行为与 Proxy 可代理的行为是一一对应的，这使得可以在 Proxy 的自定义方法中方便的使用 Reflect 调起原生行为。

// 1. Proxy 的自定义方法中，通过 Reflect 调用原生行为
const customProxy = new Proxy({
'custom': 1
}, {
get: (target, prop) => {
console.log(`get ${prop} !`);
return Reflect.get(target, undefined, prop);
}
});

customProxy.custom; // get custom, 1

// 2. 与 Object 对象上已经开放的操作原生行为方法相比，语法更加清晰易用（例如：Object.hasOwnProperty 与 Reflect.has）
const symb = Symbol('b');
const a = {
[symb]: 1,
'b': 2
};

if(Reflect.has(a, symb) && Reflect.has(a, 'b')){ // good
console.log('good');
}
Reflect.ownKeys(a); // ["b", Symbol(b)]
