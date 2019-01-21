const split = require('split2')
const pump = require('pump')
const through = require('through2')

const myTransport = through.obj((log, enc, cb) => {
  console.log('THE LOG MESSAGE TO SEND VIA HTTP:', log.msg)
  cb()
})

pump(process.stdin, split(JSON.parse), myTransport)
