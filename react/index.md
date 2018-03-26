# react

    1. 设计理念
    2. 基本知识
        + [React组件，它们的实例和元素之间的差异](http://example.com/)。
    3. 组织结构
        + React
            包涵所有高阶api

            <!-- 就是以js对象的形式表示dom,包括createElement,cloneElement,Component,PureComponent,statelessComponent -->
        + render模块
            最核心的模块了，包括首次render以及diff，这个过程中又使用到了
            props模块(给dom设置css属性)
            event模块(我们的合成事件抹平浏览器差异,统一绑定在document等)
            ref模块(如果有ref function或string应该在哪回调)
            context模块(context该怎样向下传递diff之后怎么区分新老context等)
            PropTypes模块(组件取context需要先判断类型)
            Children模块(提供操作children的方法)
            options模块(也可叫调度模块,因为我们不可避免使用到队列来处理diff或各种回调,以及一些插件如redux也需要一些钩子函数)
        +

    https://github  .com/sven36/MayReact

# react-router

# react-redux
