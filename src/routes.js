const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController.js');
const IncidentController = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

const routes = express.Router();

routes.get('/', (req, res) => {
	return res.send("Teste deploy");
});

routes.post('/sessions', SessionController.store);

routes.get('/profile', celebrate({
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required()
	}).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number()
	})
}), IncidentController.index);

routes.post('/incidents', IncidentController.store);

routes.delete('/incidents/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required()
	})
}), IncidentController.delete);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2)
	})
}), OngController.store);

module.exports = routes;
