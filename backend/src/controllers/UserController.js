const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');
const { hash } = require('bcryptjs');

module.exports = {
    async index(request, response ) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { name, email, password, cpf , city, uf} = request.body;
        const id = generateUniqueId()
        const hashedPassword = await hash(password, 8);

        const findOne_Name = await connection('users')
        .where('name', name)
        .select('*')
        .first()

        const findOne_Email = await connection('users')
        .where('email', email)
        .select('*')
        .first()

        if(findOne_Name) {
            return response.status(400).json({ error: 'Nome já cadastrado'});
        }

        if (findOne_Email){
            return response.status(400).json({ error: 'Email já cadastrado'});
        }

        await connection('users').insert({
            id,
            name,
            email,
            password: hashedPassword,
            cpf,
            city,
            uf
        })

        delete password;

        return response.json( { id });
    }
};