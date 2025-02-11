import { Router } from 'express';
import movieService from '../services/movieService.js';

const routes = Router();

routes.get('/', async (req, res) => {
    const movies = await movieService.getAll();

    // Convert documents to plain objects
    // const plainMovies = movies.map(m => m.toObject())

    res.render('home', { movies})

});

routes.get('/about', (req, res) => {
    res.render('about');
});

export default routes;