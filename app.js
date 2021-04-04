// imports
const express = require('express');
const socket = require("socket.io");

const app = express()
const port = 3000;

const ver = "inDev-1.2"
const authors = "xAxee, owr, Wojtas"

// web settings

const title = "Hangman | {page}"

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

app.get('/devpage', (req, res) => {
    res.render('devpage', { title: 'Hangman | IN-DEV PAGE'})
})

// starting app
const server = app.listen(port, () => console.info(
`\u001b[31mSuccefully started website with port: \u001b[34m${port}.
\u001b[31mCurrent version: \u001b[34m${ver}
\u001b[31mApp authors: \u001b[34m${authors}\u001b[0m`
))

app.use(express.static("public"));

const io = socket(server);

io.on("connection", function (socket) {
    console.info("Socked.io connection");
});