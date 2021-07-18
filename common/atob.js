// base64转utf8
function atob(base64Str) {
  return Buffer.from(base64Str, 'base64').toString('utf8')
}

module.exports = atob
