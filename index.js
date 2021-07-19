const atob = require('./common/atob')
const urlQueryMap = require('./common/urlQueryMap')
const subArray = require('./common/subArray')
const mixin = require('./mixin/index')
const YAML = require('yaml')
const express = require('express')

const app = express()

// 网页
app.get('/', function getState(req, res, next) {
  res.setHeader('Content-Type', 'text/html')
  res.sendFile(`${__dirname}/public/index.html`)
})

// 订阅转换
app.get('/subscribe', function (request, response) {
  const query = decodeURIComponent(atob(request.url.replace('/subscribe?', '')))
  const queryMap = urlQueryMap(query)
  if (queryMap.has('url')) {
    subArray(queryMap.get('url'), queryMap.has('add') ? queryMap.get('add') : '')
      .then(res => {
        // 转换文件
        const result = mixin({
          subArr: res,
          ruleType: queryMap.has('ruleType') ? queryMap.get('ruleType') : 1,
          filter: queryMap.has('filter') ? queryMap.get('filter') : '.*',
          host: queryMap.has('host') ? queryMap.get('host') : 'ltetp.tv189.com'
        })
        // 发送文件
        response.send(YAML.stringify(result, null, '  ').replace(/(dns:\n  |proxies:\n  -|proxy-groups:\n  -|rule-providers:\n  |rules:\n  -)/gi, '\n$1'))
        response.end()
      })
      .catch(err => {
        response.send(`<h1 align="center"><br/>订阅下载超时！<br/>${err}</h1>`)
        response.end()
      })
  } else {
    response.send('<h1 align="center"><br/>地址错误，query中未找到 url 参数</h1>')
    response.end()
  }
})

// 监听端口
app.listen(666, function () {
  console.log('Server running at http://127.0.0.1:666/')
})
