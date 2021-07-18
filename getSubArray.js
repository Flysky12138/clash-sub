const axios = require('axios')
const atob = require('./common/atob')

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
  let [funcHttp, vmessArrayStr] = [[], [...add.split(',')]]
  // 创建包含请求方法的数组
  url.split(',').forEach(element => funcHttp.push(once(element)))
  // 多订阅同时请求
  return await axios.all(funcHttp).then(res => {
    // vmess节点链接放入vmessArrayStr数组中
    res.forEach(element => {
      atob(element.data)
        .replace(/\r\n/g, ',')
        .split(',')
        .forEach(element => vmessArrayStr.push(element))
    })
    // 将vmess节点链接转换成JSON对象
    const vmessArrayObj = vmessArrayStr.filter(item => item.length !== 0).map(item => JSON.parse(atob(item.replace('vmess://', '')), null, '  '))
    // 过滤重复名
    let reslut = []
    vmessArrayObj.forEach(element => reslut.findIndex(item => item.ps === element.ps) === -1 && reslut.push(element))
    return reslut
  })
}

module.exports = getSubArray
