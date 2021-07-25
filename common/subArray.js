const axios = require('axios')
const atob = require('./atob')

// 获取订阅内容，返回包含节点对象的数组
async function subArray(url, add) {
  // 追加vmess节点
  let vmessArrayStr = [...add.split(',')]
  // 订阅请求
  let data = []
  for (const i of url.split(',')) {
    data.push(
      await axios({
        url: i,
        method: 'get',
        timeout: 5000
      }).then(res => res.data)
    )
  }
  // vmess节点放入vmessArrayStr数组中
  data.forEach(element => {
    atob(element)
      .replace(/\s+/g, ',')
      .split(',')
      .forEach(_element => vmessArrayStr.push(_element))
  })
  // 将vmess节点链接转换成JSON对象
  const vmessArrayObj = vmessArrayStr.filter(item => item.length !== 0).map(item => JSON.parse(atob(item.replace('vmess://', ''))))
  // 过滤重复名
  let reslut = []
  vmessArrayObj.forEach(element => reslut.findIndex(item => item.ps === element.ps) === -1 && reslut.push(element))
  return reslut
}

module.exports = subArray
