import db from './database.js'

const testDB = async () => {
  try {
    const results = await db.query(`select*from product_36`)
    console.log('result', JSON.stringify(results.rows))
  } catch (error) {
    console.log(error)
  }
}

testDB()

export default testDB