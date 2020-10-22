const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');
const  authMiddleware  = require("./middlewares/auth");


const routes = express.Router();

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');
const { Seeder } = require('knex');

/* Tipos de Parâmetros
*
* Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, Paginação)
* Routes Params: Parâmetros utilizados para identificar recursos
* Body Params: Corpo da requisição, usados para criar ou alterar recursos
*/

routes.get('/ongs', OngController.index);

routes.post('/ongs',  celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(1000000000).max(99999999999),
        password: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
}), SessionController.create);

routes.get('/incidents', celebrate( {
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.use(authMiddleware); // Para autenticar o usuário;

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().max(99999).required(),
    })
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = routes;