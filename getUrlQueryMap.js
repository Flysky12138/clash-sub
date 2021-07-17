// 解析请求query参数，返回Map容器
function getUrlQueryMap(url) {
  const query = url.replace('/?', '')
  return new Map(
    query.split('&').map(item => {
      let queryItemArray = item.split('=')
      return [queryItemArray.shift(), queryItemArray.join('=')]
    })
  )
}

module.exports = getUrlQueryMap
