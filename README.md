# clash-sub

### 安装

```
yarn
node index
```

### 使用

> 在 Clash 客户端中，按照如下形式填写订阅地址订阅即可。  
> http://127.0.0.1:666/?url=https://aa.com&ruleType=0&host=ltetp.tv189.com

`url` Clash 订阅地址

> url=https://aa.com

`ruleType` 代理模式

> ruleType=0

`0` 全局代理；`1` 白名单模式；`2` 黑名单模式

`filter` 过滤节点名字，汉字需转码（UrlEncode 编码），多个用`,`隔开。（得到匹配到的节点）

> filter=%E9%A6%99%E6%B8%AF,%E6%96%B0%E5%8A%A0%E5%9D%A1

`host`

> host=ltetp.tv189.com

`add` 在所有节点前添加一个或多个节点，用`,`隔开。

> add=vmess://sgIUSVOjdbsdb,vmess://UVIbaswPsvnsdo
