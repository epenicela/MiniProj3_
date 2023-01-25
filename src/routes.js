const {Router} = require('express');
const SponsorController = require('./controllers/SponsorController');

const routes = Router();


routes.get('/inicio', (req, res) => {
    return res.status(200).json({message: "Server is on"});
});


routes.post('/sponsors', SponsorController.add);
routes.get('/sponsors', SponsorController.findAll);
routes.get('/sponsors/:id', SponsorController.getOne);
routes.put('/sponsors/:id', SponsorController.update);
routes.delete('/sponsors/:id', SponsorController.delete);

module.exports = routes;