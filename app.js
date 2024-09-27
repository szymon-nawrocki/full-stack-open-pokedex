const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.0.0');
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
