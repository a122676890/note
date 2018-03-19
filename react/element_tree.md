## 关于 Components，Elements 和 Instances

### JSX

写 react 其实大部分时间在写 JSX，其中 JSX 本身是对 JavaScript 语法的一个扩展(这个并非一种模版而是 js 的扩展),形似 HTML，描述 UI 就更直观了，也极大地方便了开发。

我们写的 JSX 最终会变成什么， 例如下面的 JSX

```html
<div>
  <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(' ')}
    </h3>
</div>;
```

借助插件上面的代码会被转译为

```js
React.createElement(
    'div',
    null,
    React.createElement('img', { src: 'avatar.png', className: 'profile' }),
    React.createElement('h3', null, [user.firstName, user.lastName].join(' '))
)
```

经过 React.createElement 最终返回一个对象类似

```json
{
    type,
    key,
    props: {
        children
    }
}
```

从 JSX 最终得到一个 Elment Tree，其中 react 核心都是围绕 Element Tree 进行的。

### 传统传统面向对象 UI 编程的缺点

管理实例创建一个类来声明 Button 组件，当应用运行时，屏幕上可能会有多个 Button 的实例，每个都有自己的属性和私有状态。你必须自己负责创建和销毁子组件的实例。

其中每个组件实例必须保存自己的 DOM nodes 和子组件实例的引用，并在对的时间创建，更新，销毁它们。组件越多越难以维和，访问子组件也变得困难。

### React 用 Elements Tree 描述 UI

JSX 形似 HTML, 用来描述 UI，JSX 最终的到一个 Elements Tree，所以说 React 用 Elements Tree 描述 UI。

一个元素（element）就是一个纯对象，描述了一个组件实例或 DOM node，以及它需要的属性。它仅仅包含这些信息：组件类型，属性（properties），及子元素。

元素不是实例，是一种需要在屏幕显示的一种方式。它就是一个有 2 个数据域（field）的不可变描述对(immutable description object)

```json
{
    type: string | ReactClass,
    props: Object
}
```

当元素的 type 是 string 时，那么这个元素就表示一个 DOM node（type 的值就是 tagName，props 就是 attributes）。 这 node 就是 React 将渲染的。比如：

```json
{
    type: "button",
    props: {
        className: "button button-blue",
        children: {
            type: "b",
            props: {
                children: "OK!"
            }
        }
    }
}
```

将被渲染成：

```html
<button class="button button-blue">
  <b>OK!</b>
</button>
```

当我们想创建元素树时，我们设置 children 属性。

元素树只是描述并不是实例也没有被渲染出来。当你创建它们的时候，它们并不指向屏幕上的任何东西。它们只是对象。相比 DOM 树就轻量多啦。

元素的 type 也可以是 function 或者 class（即对应的 React Component）：

```json
{
    type: Button,
    props: {
        color: "blue",
        children: "OK!"
    }
}
```

可以看到一个组件描述依然  是一个元素和 DOM node 的  元素并没有什么区别。它们可以互相嵌套和混合。

```js
const DeleteAccount = () => ({
    type: 'div',
    props: {
        children: [
            {
                type: 'p',
                props: {
                    children: 'Are you sure?'
                }
            },
            {
                type: DangerButton,
                props: {
                    children: 'Yep'
                }
            },
            {
                type: Button,
                props: {
                    color: 'blue',
                    children: 'Cancel'
                }
            }
        ]
    }
})
```

或者

```js
const DeleteAccount = () => (
    <div>
        <p>Are you sure?</p>
        <DangerButton>Yep</DangerButton>
        <Button color="blue">Cancel</Button>
    </div>
)
```

这种混合搭配帮助组件可以彼此解耦，因为它们可以仅仅通过组合（composition）就能表达 is-a 和 has-a 的关系：

*   Button 是有特定属性（specific properties）的 DOM 元素
*   DangerButton 是有特定属性的 Button
*   DeleteAccount 在<div>里包含了 Button 和 DangerButton

###  组件如何生成 Element tree

当 React 碰到 type 是 function|class 时，它就知道这是个组件了，它会问这个组件："给你适当的 props，你返回什么元素（树）？"。比如当它看到：

```json
{
    type: Button,
    props: {
        color: "blue",
        children: "OK!"
    }
}
```

React 会传给 Button props，Button 返回：

```json
{
    type: "button",
    props: {
        className: "button button-blue",
        children: {
            type: "b",
            props: {
                children: "OK!"
            }
        }
    }
}
```

React 会重复这种过程，直到获取页面上所有的组件想渲染出什么 DOM nodes。也就是完整的 Element tree。对 React 组件来说，props 是输入，元素树（Elements tree）是输出。

我们用元素描述  实例，让 React  来  负责  创建，更新，销毁 实例，也就是 React 来管理实例

### 声明组件的 3 种方式：

1.  class，推荐。
2.  React.createClass，不推荐， 早期的写法
3.  function，类似只有 render 的 class。纯函数推荐

### 一个 Form 组件的创建过程

```js
// class 创建组件，推荐
ReactDOM.render(
    {
        type: Form,
        props: {
            isSubmitted: false,
            buttonText: 'OK!'
        }
    },
    document.getElementById('root')
)
const Form = ({ isSubmitted, buttonText }) => {
    if (isSubmitted) {
        return {
            type: Message,
            props: {
                text: 'Success!'
            }
        }
    }
    return {
        type: Button,
        props: {
            children: buttonText,
            color: 'blue'
        }
    }
}
```

当你调用 ReactDOM.render 时，React 会问 Form 组件，给定这些 props，它要返回什么元素。过程如下所示：

```js
// React: You told me this...
{
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: "OK!"
  }
}
// React: ...And Form told me this...
{
  type: Button,
  props: {
    children: "OK!",
    color: "blue"
  }
}
// React: ...and Button told me this!
{
  type: "button",
  props: {
    className: "button button-blue",
    children: {
      type: "b",
      props: {
        children: "OK!"
      }
    }
  }
}
```

上面是被 React 叫做 reconciliation 的过程的一部分。每当你调用 ReactDOM.render()或 setState()时，都会开始 reconciliation 过程。在 reconciliation 结束时，React 知道了结果的 DOM 树，一个如 react-dom 或 react-native 的 renderer 会应用必须的最小变化来更新 DOM nodes。

这种渐进式的提炼（refining）过程也是 React 应用可以容易优化的原因。如果组件树的某部分大太了，你可以让 React 跳过这部分的 refining，如果相关 props 没有变化。如果 props 是 immutable 的话，非常容易比较它们是否变化， 所以 React 可以和 immutability 搭配一起并提高效率。

另外在 React 中实例没那么重要。仅仅以类声明的组件才有实例，并且你从来不会直接创建它——React 为你创建它。尽管有父组件实例访问子组件实例的机制，但这只是在必要的情况下才使用，通常应该避免。

## 总结

元素（Element）是 React 的一个核心概念。一般情况下，我们用 JSX 来创建元素。
