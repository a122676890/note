# React

1.  React 的 Components，Elements 和 Instances
2.  React 的 vitual-dom
3.  React 的声明周期
4.  React Core
5.  React Renderers
6.  Fiber Reconciler

### 16

1.  render 函数支持返回数组和字符串

    * 终于不需要再将多个同级元素包裹在一个冗余的 DOM 元素中了，但每个同级元素还是需要唯一的 key 值方便 react 进行更新。而且在未来，react 可能还会提供一个特殊的 jsx 片段来支持无 key 值的 DOM 元素。

2.  更好的异常处理
    * 在老版本的 react 中，某个组件在 render 阶段的运行错误可能会 break 掉整个应用，而且抛出的异常信息含义也非常模糊，难以确定错误的发生位置。在 v16.0 中，如果某个组件在执行 render 或其他生命周期函数时出错，整个组件将被从根节点上移除掉，方便开发者快速定位异常组件。在定位到异常组件后，开发者可以为该组件添加 componentDidCatch 方法，并在这个方法中为组件定义一个备用视图用于渲染异常状态下的组件。当然，在这个新的生命周期函数中，开发者也可以获得更加有帮助的错误信息进行 debug。这被称作组件的错误边界，大家可以理解为组件层面的 try catch 声明。
3.  新的组件类型 portals

    * ReactDOM.createPortal(child, container) 可以将子组件直接渲染到当前容器组件 DOM 结构之外的任意 DOM 节点中，这将使得开发对话框，浮层，提示信息等需要打破当前 DOM 结构的组件更为方便。

4.  新的核心架构 Fiber

    * 新版本将使用 Fiber 作为底层架构。正是得益于 FIber，上述提到的支持返回数据及错误边界等功能才变得可能。Fiber 相较于之前最大的不同是它可以支持异步渲染（async rendering），这意味着 React 可以在更细的粒度上控制组件的绘制过程，从最终的用户体验来讲，用户可以体验到更流畅交互及动画体验。而因为异步渲染涉及到 React 的方方面面甚至未来，在 16.0 版本中 React 还暂时没有启用，并将在未来几个月陆续推出。
