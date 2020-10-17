const connection = require('../database/connection');
const { create } = require('./OngController');
const { compare } = require('bcryptjs');

module.exports = {
    async create(request, response) {
        const { email, password  } = request.body;

        const ong = await connection('ongs')
            .where('email', email)
            .select('name', 'password', 'id')
            .first();

        const matchPassword = await compare(password, ong.password);

        if(!matchPassword) {
            return response.status(400).json({ error: 'No Match Found'});
        }
        delete ong.password;

        return response.json(ong);
    }
}