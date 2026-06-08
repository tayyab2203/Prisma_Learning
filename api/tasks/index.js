const express = require('express')
const taskRoutes = require('../../../src/routes/tasks.route')

const app = express()
app.use(express.json())
app.use('/', taskRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  if (err.code === 'P2025') {
    return res.status(404).json({ message: 'Record nahi mila' })
  }
  if (err.code === 'P2002') {
    return res.status(400).json({ message: 'Ye value already exist karti hai' })
  }
  res.status(500).json({ message: 'Server error' })
})

module.exports = app
