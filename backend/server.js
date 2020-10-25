const express = require('express')
const app = express()
const port = 9000

app.get('/api/getMessage', (req, res) => {
  res.send('Welcome from CS3219 OTOT Task A Server!')
})

app.listen(port, () => {
  console.log(`Back End server listening at http://localhost:${port}`)
})