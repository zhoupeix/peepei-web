const express = require ('express')

const app = express();

app.set('secret','werewrwrdsfasfghrg123545')
app.use(express.json())
app.use(require('cors')())

app.use('/uploads',express.static(__dirname + '/uploads'))//静态文件托管
app.use('/admin',express.static(__dirname + '/admin'))//静态文件托管

require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})