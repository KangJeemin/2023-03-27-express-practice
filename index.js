const express = require('express');
const multer = require('multer')
const upload = multer({ dest:"uploads/" })
const app = express();


//app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('',(req,res)=>{
  // res.sendFile(__dirname + '/index.html');
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./index.js" defer></script>
  </head>
  <body>
    <form action="/login" method="post" enctype="multipart/form-data" required="true" accept="application/JSON">
    <input type="file" id="file" name="jpg" value="name">
    <input type="text" name="password" value="name">
    <input type="submit">
  </form>
  </body>
  </html>`)
})

app.post('/login', upload.single('jpg'), (req,res)=>{
  console.log(req.body);
  console.log(req.file);
  console.log(req.file.path);
  
  res.send('done')
})

app.listen(2080, ()=>{
  console.log('server on')
})