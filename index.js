const getUrlQueryMap = require('./getUrlQueryMap')
const getSubArray = require('./getSubArray')
const mixin = require('./mixin/index')
const fs = require('fs')
const YAML = require('yaml')
const express = require('express')

// 建立下载链接
const app = express()
app.get('/', function (request, response) {
  const queryMap = getUrlQueryMap(decodeURI(request.url))
  getSubArray(queryMap.get('url'))
    .then(res => {
      // 转换文件
      const result = mixin({
        subArr: res,
        ruleType: queryMap.has('ruleType') ? queryMap.get('ruleType') : 1,
        filter: queryMap.has('filter') ? queryMap.get('filter') : '.',
        host: queryMap.has('host') ? queryMap.get('host') : 'ltetp.tv189.com'
      })
      // 保存文件
      fs.writeFileSync(
        './config.yaml',
        YAML.stringify(result, null, '  ').replace(/(dns:\n  |proxies:\n  -|proxy-groups:\n  -|rule-providers:\n  |rules:\n  -)/gi, '\n$1')
      )
      response.download('config.yaml')
    })
    .catch(console.log)
})
// 监听端口
app.listen(666, function () {
  console.log('Server running at http://127.0.0.1:666/')
})
