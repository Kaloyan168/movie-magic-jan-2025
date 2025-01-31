import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home')
});

routes.get('/about', (req, res)=>{
    res.render('about')
})

routes.get('/search', (req, res)=>{
    res.render('search')
})


routes.get('/create', (req, res)=>{
    res.render('create')
})


export default routes;