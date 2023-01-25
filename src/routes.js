const {Router} = require('express');
const sponsorController = require('./controllers/SponsorController');
const expertController = require('./controllers/ExpertController');

const routes = Router();


routes.get('/inicio', (req, res) => {
    return res.status(200).json({message: "Server is on"});
});

//Sponsor routes
routes.post('/sponsors', sponsorController.add);
routes.get('/sponsors', sponsorController.findAll);
routes.get('/sponsors/:id', sponsorController.getOne);
routes.put('/sponsors/:id', sponsorController.update);
routes.delete('/sponsors/:id', sponsorController.delete);

//Experts routes
routes.post('/experts', expertController.add);
routes.get('/experts', expertController.findAll);
routes.get('/experts/:id', expertController.getOne);
routes.put('/experts/:id', expertController.update);
routes.delete('/experts/:id', expertController.delete);


module.exports = routes;