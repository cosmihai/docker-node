const mongoose = require('mongoose');
const todosRouter = require('./routes/todos');  
const indexRouter = require('./routes/index');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/mongoDocker',  
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => console.log('connected to db ...'))
.catch(err => console.log(err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log('server listening on port ' + port)
});