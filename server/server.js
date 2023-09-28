const express = require('express');
const app = express();
const cors = require('cors');
require('./config/mongoose.config');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const libraryRoute = require('./routes/libraryRoute');
const likeRoute = require('./routes/likeRoute');
const eventRoute = require('./routes/eventRoute');
const storyRoute = require('./routes/storyRoute');
const docRoute = require('./routes/docRoute');

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(cookieParser())


libraryRoute(app);
likeRoute(app);
eventRoute(app);
storyRoute(app);
docRoute(app);


app.listen(8000, ()=> console.log('The server is all fired up on port 8000'));