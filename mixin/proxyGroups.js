function proxyGroups(needlists, otherlists, bypass) {
  const proxyGroupsItems = [
    ['速度优先', 'url-test'],
    ['可用优先', 'fallback'],
    ['负载均衡', 'load-balance']
  ]

  const select = {
    name: '手动选择',
    type: 'select',
    proxies: proxyGroupsItems.map(res => res[0]).concat(needlists)
  }

  const selectBypass = [
    {
      name: '国内',
      type: 'select',
      proxies: proxyGroupsItems.map(res => `${res[0]}A`).concat('国外', 'REJECT', 'DIRECT', needlists)
    },
    {
      name: '国外',
      type: 'select',
      proxies: proxyGroupsItems.map(res => `${res[0]}B`).concat('REJECT', 'DIRECT', otherlists)
    }
  ]

  return bypass
    ? [
        ...selectBypass,
        ...proxyGroupsItems
          .map(res => [
            {
              name: `${res[0]}A`,
              type: res[1],
              proxies: [...needlists],
              url: 'http://www.gstatic.com/generate_204',
              interval: 300
            },
            {
              name: `${res[0]}B`,
              type: res[1],
              proxies: [...otherlists],
              url: 'http://www.gstatic.com/generate_204',
              interval: 300
            }
          ])
          .flat()
      ]
    : [
        select,
        ...proxyGroupsItems.map(res => ({
          name: res[0],
          type: res[1],
          proxies: [...needlists],
          url: 'http://www.gstatic.com/generate_204',
          interval: 300
        }))
      ]
}

module.exports = proxyGroups
