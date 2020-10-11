const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

/* Tipos de Parâmetros
*
* Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, Paginação)
* Routes Params: Parâmetros utilizados para identificar recursos
* Body Params: Corpo da requisição, usados para criar ou alterar recursos
*/

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;