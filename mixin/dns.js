module.exports = {
  enable: true,
  listen: '0.0.0.0:53',
  ipv6: false,
  'default-nameserver': ['223.5.5.5', '119.29.29.29'],
  'enhanced-mode': 'fake-ip',
  'fake-ip-range': '198.18.0.1/16',
  'use-hosts': true,
  nameserver: ['https://dns.alidns.com/dns-query', 'https://doh.pub/dns-query'],
  fallback: ['tls://1.0.0.1:853', 'https://cloudflare-dns.com/dns-query', 'https://dns.google/dns-query'],
  'fallback-filter': {
    geoip: true,
    ipcidr: ['240.0.0.0/4', '0.0.0.0/32']
  }
}
