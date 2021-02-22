const { lineUp } = require('./job.js')
const { queue } = require('./queue')

queue.on('ready', () => {
  lineUp('Job 1')
  lineUp('Job 2')
})