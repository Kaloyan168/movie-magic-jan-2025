import express from 'express';
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';
import routes from './routes.js';
import showRatingHelper from './helpers/ratingHelper.js';


const app = express();
//db config 

try{
    const url = 'mongodb://localhost:270117/magic-movies-jan2025'
    await mongoose.connect(url)
    console.log('Db connected succesfully');
    
} catch(err) {
    console.log('Cannot connect to db');
    console.error(err.message)
    
}



//handle-bars config

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating: showRatingHelper,
    }
}))
app.set('view engine', 'hbs');
app.set('views', './src/views')

//express config
app.use('/static', express.static('src/public'))
app.use(express.urlencoded({extended: false}))// Learn express to parse from data 
app.use(routes);
//setup routes


//start server
app.listen(5000, () => console.log('http://localhost:5000...'))