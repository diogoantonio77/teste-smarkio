const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const comentsRouter = require('./routes/coments');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/materialize',express.static('views/materialize'));
app.use('/css',express.static('views/css'));
app.use('/js',express.static('views/js'));


app.get('/', function (req, res)
{
    res.render('index.html');
});

app.use('/coments', comentsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});