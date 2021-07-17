# clash-sub

**只支持 vmess 的 ws 节点，其他本人不用，没做。**

### 安装

```
git clone https://github.com/Flysky12138/clash-sub.git
cd clash-sub
yarn
node index
```

### 使用

> 在 Clash 客户端中，按照如下形式填写订阅地址，订阅即可。  
> http://127.0.0.1:666/?url=https://xxx&ruleType=0&host=xxx

`url` Clash 订阅地址，多个用`,`隔开。

> url=http://xxx,https://xxx

`ruleType` 代理模式

> ruleType=0

`0` 全局代理；`1` 白名单模式；`2` 黑名单模式

`filter` 过滤节点名字，汉字需转码（UrlEncode 编码），多个用`,`隔开。（得到匹配到的节点）

> filter=%E9%A6%99%E6%B8%AF,%E6%96%B0%E5%8A%A0%E5%9D%A1

`host`

> host=xxx

`add` 在最前添加额外节点，多个用`,`隔开。

> add=vmess://sgIUSVOjdbsdb,vmess://UVIbaswPsvnsdo
