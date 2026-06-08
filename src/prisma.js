// is file mn aik instance banaya hai prisma client ka

require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
module.exports = prisma
