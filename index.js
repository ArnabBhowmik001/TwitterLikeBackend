var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser=require( 'body-parser' );
const userRoutes = require("./routes/userRoutes");
const tweetRoutes=require("./routes/tweetRoutes");
const authMiddleware = require('./middleware/authMiddleware');
const config = require('./config/config');
app.use(bodyParser.json())
//Database
mongoose.connect(config.mongoURI, {useNewUrlParser: true,useUnifiedTopology: true,});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})
// Error handling middleware
app.use('/api/users', userRoutes);
app.use(authMiddleware);
app.use('/api/tweets', tweetRoutes);
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});