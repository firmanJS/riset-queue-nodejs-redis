const Queue = require('bee-queue')
const { generateRandomNumber } = require('./random')
require('dotenv').config()
const sharedConfig = {
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    options: {},
  },
  activateDelayedJobs: true 
};
const threshold = 4.5
const queue = new Queue('my-awesome-queue', sharedConfig)
console.log(process.env.REDIS_URL);
queue.process(function (job, done) {
  const k = generateRandomNumber()
  job.reportProgress({page: 3, totalPages: 11});
  if (k > threshold) {
    return done(Error(`Random value ${k} > threshold ${threshold}`))
  }
  return done(null, k)
})


module.exports = { queue }