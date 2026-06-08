require('dotenv').config()
const express = require('express')
const taskRoutes = require('./routes/tasks.route')

const app = express()
app.use(express.json())

// Routes
app.use('/api/tasks', taskRoutes)

// Global error handler
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

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server chal raha hai port ${port} pe`)
  })
}

module.exports = app