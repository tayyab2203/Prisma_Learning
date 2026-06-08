require('dotenv').config()
const prisma = require('./prisma')


async function main() {
  // Ek task banao
  const task = await prisma.task.create({
    data: {
      title: "Pehla Task",
      description: "Ye mera pehla Prisma task hai"
    }
  })

  console.log("Task bana:", task)

  // Saare tasks dekho
  const allTasks = await prisma.task.findMany()
  console.log("Saare tasks:", allTasks)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())