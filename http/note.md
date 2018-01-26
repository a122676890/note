# http basic info

### HTTP 是无状态，有会话的

1. HTTP 是无状态的：在同一个连接中，两个执行成功的请求之间是没有关系的
2. 把 Cookies 添加到头部中，创建一个会话让每次请求都能共享相同的上下文信息，达成相同的状态

### HTTP 和连接

1. http 需要一个可靠的连接（TCP）
2. HTTP/1.0 为每一个请求/响应都打开一个 TCP 连接，导致了
   2.1 打开一个 TCP 连接需要多次消息传递，速度很慢。
   2.2 多个消息周期性发送时，暖连接比冷连接更高效。
3. http/1.1 引入持久连接改进

### HTTP 能控制什么

1. 缓存 开放同源限制 认证 代理和隧道 会话

### http cache

1. 缓存的目标
   1.1 个检索请求的成功响应: 对于 GET 请求，响应状态码为：200，则表示为成功。一个包含例如 HTML 文档，图片，或者文件的响应
   1.2 不变的重定向: 响应状态码：301.
   1.3 错误响应: 响应状态码：404 的一个页面
   1.4 不完全的响应: 响应状态码 206，只返回局部的信息
   1.5 除了 GET 请求外，如果匹配到作为一个已被定义的 cache 键名的响应
2. 缓存控制
   2.1 禁止进行缓存

        Cache-Control: no-store
        Cache-Control: no-cache, no-store, must-revalidate

   2.2 强制确认缓存

        Cache-Control: no-store

   2.3 私有缓存和公共缓存

        Cache-Control: private
        Cache-Control: public

   2.4 缓存过期机制

        Cache-Control: max-age=31536000

   2.5 缓存过期机制

   * If-None-Match
