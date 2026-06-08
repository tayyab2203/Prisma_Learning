// is file mn aik instance banaya hai prisma client ka

require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

const client = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') {
  global.prisma = client
}

module.exports = client
