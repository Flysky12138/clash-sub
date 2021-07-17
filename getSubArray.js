const axios = require('axios')

// base64转utf8
function base64TOutf8(base64Str) {
  return Buffer.from(base64Str, 'base64').toString('utf8')
}

// 获取订阅内容，返回包含节点对象的数组
async function getSubArray(url, add) {
  return await axios({
    url,
    method: 'get',
    timeout: 5000
  }).then(res => {
    const vmessStr = (add.replace(/,/g, '\r\n') + base64TOutf8(res.data)).replace(/\r\n/g, '')
    return vmessStr
      .split('vmess://')
      .filter(item => item.length !== 0)
      .map(item => JSON.parse(base64TOutf8(item), null, '  '))
  })
}

module.exports = getSubArray
