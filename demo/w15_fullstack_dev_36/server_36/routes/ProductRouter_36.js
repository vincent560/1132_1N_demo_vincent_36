import express from 'express'
const router = express.Router()

import db from '../utils/database.js'

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select*from product_36`)
    console.log('result', JSON.stringify(results.rows))
    // res.json(results.rows)
  res.render('product_36/index_36',{
    data : results.rows,
    title : 'Get Products From PostgreSQL Server',
    name:'何柏霆',
    id:'213410136'
  })
  } catch (error) {
    console.log(error)
  }
})

export default router