// https://github.com/Loyalsoldier/clash-rules
let ruleProviders = {}
const ruleProvidersItems = {
  domain: ['reject', 'icloud', 'apple', 'google', 'proxy', 'direct', 'private', 'gfw', 'greatfire', 'tld-not-cn'],
  ipcidr: ['telegramcidr', 'cncidr', 'lancidr'],
  classical: ['applications']
}
for (let i in ruleProvidersItems) {
  ruleProvidersItems[i].forEach(res => {
    ruleProviders[res] = {
      type: 'http',
      behavior: i,
      url: `https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/${res}.txt`,
      path: `./ruleset/${res}.yaml`,
      interval: 86400
    }
  })
}

module.exports = ruleProviders
