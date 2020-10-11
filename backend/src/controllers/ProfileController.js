const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        ong_id = request.headers.authorization;

        incidents = await connection('incidents').where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}