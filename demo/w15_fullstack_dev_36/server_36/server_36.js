import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import apiProductRouter from './routes/api/apiProductRouter_36.js'

const app_36 = express()


app_36.use(cors())
app_36.use(logger('dev'))
app_36.use(express.static('public'))
app_36.set('view engine', 'ejs')

app_36.use('/product_36/static', (req, res, next) => {
  res.render('product_36/static_36',{
    title : 'Get Products - Static',
    name:'何柏霆',
    id:'213410136'
  })
})

app_36.use('/api/product_36', apiProductRouter)

app_36.use('/blog_36/static', (req, res, next) => {
  res.render('blog_36/static_36',{
    title : 'Get Blogs - Static',
    name:'何柏霆',
    id:'213410136'
  })
})

app_36.use('/', (req, res, next) =>{
  res.render('index', {
    title : 'Express',
    name:'何柏霆',
    id:'213410136'
  })
})

const port = process.env.PORT || 5000

app_36.listen(port, ()=>{
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`)
})
