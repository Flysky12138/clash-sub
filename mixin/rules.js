// 直连的进程名
const directProcessNames = Array.from(
  [
    'v2ray',
    'xray',
    'naive',
    'trojan',
    'trojan-go',
    'ss-local',
    'privoxy',
    'leaf',
    'v2ray.exe',
    'xray.exe',
    'naive.exe',
    'trojan.exe',
    'trojan-go.exe',
    'ss-local.exe',
    'privoxy.exe',
    'leaf.exe',
    'Surge',
    'Surge 2',
    'Surge 3',
    'Surge 4',
    'Surge%202',
    'Surge%203',
    'Surge%204',
    'Thunder',
    'DownloadService',
    'qBittorrent',
    'Transmission',
    'fdm',
    'aria2c',
    'Folx',
    'NetTransport',
    'uTorrent',
    'WebTorrent',
    'aria2c.exe',
    'BitComet.exe',
    'fdm.exe',
    'NetTransport.exe',
    'qbittorrent.exe',
    'Thunder.exe',
    'ThunderVIP.exe',
    'transmission-daemon.exe',
    'transmission-qt.exe',
    'uTorrent.exe',
    'WebTorrent.exe'
  ],
  res => `PROCESS-NAME,${res},DIRECT`
)
// 公共规则
const commonRulelists = ['RULE-SET,reject,REJECT', 'RULE-SET,private,DIRECT', 'RULE-SET,lancidr,DIRECT']

// 白名单
// 如你不希望进行 DNS 解析，可在 GEOIP 规则的最后加上，no-resolve，如 GEOIP,CN,DIRECT,no-resolve
const whitelists = [
  ...directProcessNames,
  ...commonRulelists,
  'RULE-SET,icloud,DIRECT',
  'RULE-SET,apple,DIRECT',
  'RULE-SET,google,DIRECT',
  'RULE-SET,proxy,手动选择',
  'RULE-SET,direct,DIRECT',
  'RULE-SET,telegramcidr,手动选择',
  'GEOIP,,DIRECT',
  'GEOIP,CN,DIRECT',
  'MATCH,手动选择'
]
// 黑名单
const blacklists = [
  ...directProcessNames,
  ...commonRulelists,
  'RULE-SET,tld-not-cn,手动选择',
  'RULE-SET,gfw,手动选择',
  'RULE-SET,greatfire,手动选择',
  'RULE-SET,telegramcidr,手动选择',
  'MATCH,DIRECT'
]
// 免流规则
const mllists = [...commonRulelists, 'MATCH,手动选择']

module.exports = [mllists, whitelists, blacklists]