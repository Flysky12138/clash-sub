class Vmess {
  constructor(params) {
    this.common = {
      name: params.ps,
      type: 'vmess',
      server: params.add,
      port: params.port,
      uuid: params.id,
      alterId: params.aid,
      cipher: 'auto'
    }
  }
}

class VmessWS extends Vmess {
  constructor(params, host) {
    super(params)
    this.common = Object.assign({}, this.common, {
      udp: true,
      tls: params.tls === 'tls',
      network: 'ws',
      'ws-opts': {
        path: params.path || '/',
        headers: {
          Host: host
        }
      }
    })
  }
}

class VmessH2 extends Vmess {
  constructor(params, host) {
    super(params)
    this.common = Object.assign({}, this.common, {
      network: 'h2',
      tls: params.tls === 'tls',
      'h2-opts': {
        path: params.path || '/',
        host: [host]
      }
    })
  }
}

function template(params, host) {
  let result = null
  switch (params.net) {
    case 'ws':
      result = new VmessWS(params, host)
      break
    case 'h2':
      result = new VmessH2(params, host)
      break
    default:
      result = new Vmess(params)
  }
  return result.common
}

function proxies(subArr, namelists, host) {
  return [...subArr].filter(res => namelists.includes(res.ps)).map(res => template(res, host))
}

module.exports = proxies
