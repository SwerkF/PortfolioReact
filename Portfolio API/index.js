const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "localhost");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
});

app.get('/', (req, res) => {
    res.send(
        "<h1 style='text-align: center; margin-top: 20px;'>Hello World!</h1>"
    );
})

const routes = require('./src/routes/routes');

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})