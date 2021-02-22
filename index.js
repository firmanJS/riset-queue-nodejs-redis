const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    const { lineUp } = require('./job.js')
    const { queue } = require('./queue')
    
    queue.on('ready', () => {
      lineUp('Job 1')
    })

    res.json({'a':'suuces'})
})

app.use(router)

app.listen(2000, () => {
    console.log('server running');
})