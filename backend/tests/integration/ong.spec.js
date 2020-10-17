const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');



describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        connection.destroy();
    });

    it('should be able to create new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                "name": "AAA",
                "email": "aaa@email.com",
                "whatsapp":"65984699962",
                "city": "Colorado",
                "uf": "PR"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});