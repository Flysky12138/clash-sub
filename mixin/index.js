const header = require('./header')
const dns = require('./dns')
const proxies = require('./proxies')
const proxyGroups = require('./proxyGroups')
const ruleProviders = require('./ruleProviders')
const rules = require('./rules')

// 订阅节点数组，代理规则，过滤，混淆，分流
function mixin(obj) {
  // 所有的节点名
  const alllists = obj.subArr.map(res => res.ps)
  // 需要的节点名
  const needlists = obj.subArr.map(res => res.ps).filter(res => new RegExp(obj.filter).test(res))
  // 不要的节点名
  const otherlists = alllists.filter(res => !needlists.includes(res))

  return {
    ...header,
    dns,
    proxies: proxies(obj.subArr, obj.bypass ? alllists : needlists, obj.host), // ?
    'proxy-groups': proxyGroups(needlists, otherlists, obj.bypass), // ?
    'rule-providers': ruleProviders,
    rules: rules(obj.bypass, obj.ruleType) // ?
  }
}

module.exports = mixin
