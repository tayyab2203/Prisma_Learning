const prisma = require('../prisma')

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
  } catch (err) {
    next(err)
  }
}

const getTaskById = async (req, res, next) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!task) return res.status(404).json({ message: 'Task nahi mila' })
    res.json(task)
  } catch (err) {
    next(err)
  }
}

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body
    const task = await prisma.task.create({
      data: { title, description }
    })
    res.json(task)
  } catch (err) {
    next(err)
  }
}

const updateTask = async (req, res, next) => {
  try {
    const task = await prisma.task.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })
    res.json(task)
  } catch (err) {
    next(err)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    await prisma.task.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ message: 'Task delete ho gaya' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
}