// imports
const express = require('express')
const app = express()
const port = 3000;

// get static files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/sound', express.static(__dirname + 'public/sound'))

//set views

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
         title: 'Hangman | Main'
    })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'Hangman | About'})
})

// starting app
app.listen(port, () => console.info(`starting app at port ${port}`))