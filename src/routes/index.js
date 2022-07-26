const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'First Web with node', x: 100 }));
router.get('/about', (req, res) => res.render('about', { title: 'About ' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact page' }));


module.exports = {
    router,
    default: router,
}