const header = require('./header')
const dns = require('./dns')
const proxies = require('./proxies')
const proxyGroups = require('./proxyGroups')
const ruleProviders = require('./ruleProviders')
const rules = require('./rules')

// 订阅节点数组，代理规则，需要的节点名
function mixin(obj) {
  // 过滤得到需要的节点名
  const namelists = obj.subArr.map(res => res.ps).filter(res => new RegExp(`/${obj.filter}/`).test(res))

  return {
    ...header,
    dns,
    proxies: proxies(obj.subArr, namelists, obj.host),
    'proxy-groups': proxyGroups(namelists),
    'rule-providers': ruleProviders,
    rules: rules[obj.ruleType]
  }
}

module.exports = mixin
