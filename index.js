const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouter = require('./user/router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(userRouter);

const port = 4000;
app.listen(port, () =>
	console.log(`server running on port: ${port}`)
);
