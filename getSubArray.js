const axios = require('axios')

// base64转utf8
function base64TOutf8(base64Str) {
  return Buffer.from(base64Str, 'base64').toString('utf8')
}

// 单个订阅请求
async function once(url) {
  return await axios({
    url,
    method: 'get',
    timeout: 5000
  })
}

// 获取订阅内容，返回包含节点对象的数组
async function getSubArray(url, add) {
  let [funcHttp, vmessLists] = [[], [...add.split(',')]]
  // 创建包含请求方法的数组
  url.split(',').forEach(element => funcHttp.push(once(element)))
  // 多订阅同时请求
  return await axios.all(funcHttp).then(res => {
    // vmess节点链接放入vmessLists数组中
    res.forEach(element => {
      base64TOutf8(element.data)
        .replace(/\r\n/g, ',')
        .split(',')
        .forEach(element => vmessLists.push(element))
    })
    return vmessLists.filter(item => item.length !== 0).map(item => JSON.parse(base64TOutf8(item.replace('vmess://', '')), null, '  '))
  })
}

module.exports = getSubArray
