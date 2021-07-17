# clash-sub

```
yarn
node index
```

使用：http://127.0.0.1:666/?url=https://aa.com&ruleType=0&filter=%E9%A6%99%E6%B8%AF,%E6%96%B0%E5%8A%A0%E5%9D%A1&host=ltetp.tv189.com

- `url` Clash 订阅地址

- `ruleType` 代理模式

  `0` 全局代理
  `1` 白名单模式
  `2` 黑名单模式

- `filter` 过滤节点，汉字需转码（UrlEncode 编码），多个用`,`隔开

- `host`
