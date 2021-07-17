const axios = require('axios')

// base64转utf8
function base64TOutf8(base64Str) {
  return Buffer.from(base64Str, 'base64').toString('utf8')
}

// 获取订阅内容，返回包含节点对象的数组
async function getSubArray(url) {
  return await axios.get(url).then(res =>
    base64TOutf8(res.data)
      .replace(/\r\n/g, '')
      .split('vmess://')
      .filter(item => item.length !== 0)
      .map(item => JSON.parse(base64TOutf8(item), null, '  '))
  )
}

module.exports = getSubArray
