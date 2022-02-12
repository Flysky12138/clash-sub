// 公共规则
const commonRulelists = ['DOMAIN,clash.razord.top,DIRECT', 'DOMAIN,yacd.haishan.me,DIRECT', 'RULE-SET,private,DIRECT', 'RULE-SET,reject,REJECT']

// 白名单
const whiteTemplate = (a, b) => [
  'RULE-SET,applications,DIRECT',
  ...commonRulelists,
  `RULE-SET,icloud,${a}`,
  `RULE-SET,apple,${a}`,
  `RULE-SET,google,${a}`,
  `RULE-SET,proxy,${b}`,
  `RULE-SET,direct,${a}`,
  `RULE-SET,lancidr,${a}`,
  `RULE-SET,cncidr,${a}`,
  `RULE-SET,telegramcidr,${b}`,
  `GEOIP,,${a}`,
  `GEOIP,CN,${a}`,
  `MATCH,${b}`
]
const whitelists = whiteTemplate('DIRECT', '手动选择')
const whitelistsBypass = whiteTemplate('国内', '国外')
// 黑名单
const blackTemplate = (a, b) => [
  'RULE-SET,applications,DIRECT',
  ...commonRulelists,
  `RULE-SET,tld-not-cn,${a}`,
  `RULE-SET,gfw,${a}`,
  `RULE-SET,greatfire,${a}`,
  `RULE-SET,telegramcidr,${a}`,
  `MATCH,${b}`
]
const blacklists = blackTemplate('手动选择', 'DIRECT')
const blacklistsBypass = blackTemplate('国外', '国内')
// 免流规则
const mllists = [...commonRulelists, 'MATCH,手动选择']

function rules(bypass, ruleType) {
  const arr = [mllists, whitelists, blacklists]
  const arrBypass = [null, whitelistsBypass, blacklistsBypass]
  return bypass ? arrBypass[ruleType] : arr[ruleType]
}

module.exports = rules
