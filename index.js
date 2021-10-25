const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.listen(80, () =>{
    console.log('🚀 serveur lancé !')
})

app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/upload', upload.array('photo', 50), (req, res) =>{
  console.log('photos recu')
    res.sendFile(__dirname+'/public/ok.html')
})