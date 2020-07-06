/*
 * File Name: index.js
 * Author's name:  Gurinder Singh
 * Website name: Gurinder Singh's Portfolio
 * File description: This .js file consist of all the methods(get, post, put, delete) that are used to retreive data on the server.
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'My Personal Portfolio' });
});
/* GET aboutMe page. */
router.get('/aboutMe', function (req, res) {
    res.render('aboutMe', { title: 'About Me' });
});
/* GET projects page */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'My Projects' });
});
/* GET services page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});
/* GET contactMe page. */
router.get('/contactMe', function (req, res) {
    res.render('contactMe', { title: 'Contact Me' });
});

module.exports = router;