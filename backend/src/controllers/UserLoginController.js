const connection = require('../database/connection');
const { compare } = require('bcryptjs');
const jwt  = require('jsonwebtoken');

module.exports = {
    async create(request, response) {

        const { email, password  } = request.body;

        const user = await connection('users')
            .where('email', email)
            .select('name', 'password', 'id')
            .first();

        const matchPassword = await compare(password, user.password);

        if(!matchPassword) {
            return response.status(400).json({ error: 'No Match Found'});
        }
        delete user.password;

        function generateToken(){
            return jwt.sign({ id: this.id }, "secretuserdifferentfromong", {
              expiresIn: 86400
            });
          }

        token = generateToken()

        return response.json({user, token});
    }
}