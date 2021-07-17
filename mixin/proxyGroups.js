function proxyGroups(namelists) {
  const proxyGroupsItems = [
    ['速度优先', 'url-test'],
    ['可用优先', 'fallback'],
    ['负载均衡', 'load-balance']
  ]
  return [
    {
      name: '手动选择',
      type: 'select',
      proxies: proxyGroupsItems.map(res => res[0]).concat(namelists)
    },
    ...proxyGroupsItems.map(res => ({
      name: res[0],
      type: res[1],
      proxies: [...namelists],
      url: 'http://www.gstatic.com/generate_204',
      interval: 300
    }))
  ]
}

module.exports = proxyGroups
