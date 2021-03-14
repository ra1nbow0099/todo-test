const express = require('express')
const path = require('path')
const hbs = require('hbs')
const sequelize = require('./utils/db')
const app = express()
PORT = process.env.PORT || 3000


app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials(path.join(__dirname, '/views/partials'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/todo'))
app.use('/', require('./routes/info'))
app.use('/', require('./routes/categories'))



async function start() {
    try{
        await sequelize.sync()
        app.listen(PORT,
            () => console.log(`app is listening on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()