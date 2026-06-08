// is file mn aik instance banaya hai prisma client ka

require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set. Configure it in Vercel environment variables.')
}

process.env.DATABASE_URL = databaseUrl.trim()

const client = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') {
  global.prisma = client
}

module.exports = client
