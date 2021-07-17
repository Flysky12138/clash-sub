function proxies(subArr, namelists, host) {
  return [...subArr]
    .filter(res => namelists.includes(res.ps))
    .map(res => ({
      name: res.ps,
      type: 'vmess',
      server: res.add,
      port: res.port,
      uuid: res.id,
      alterId: res.aid,
      cipher: 'auto',
      udp: true,
      network: res.net,
      'ws-path': res.path || '/',
      'ws-headers': {
        Host: host
      }
    }))
}

module.exports = proxies
