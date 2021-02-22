const Queue = require('bee-queue')
const { generateRandomNumber } = require('./random')

const threshold = 4.5
const queue = new Queue('my-awesome-queue', { activateDelayedJobs: true })

queue.process(function (job, done) {
  const k = generateRandomNumber()

  if (k > threshold) {
    return done(Error(`Random value ${k} > threshold ${threshold}`))
  }
  return done(null, k)
})

module.exports = { queue }