const request = require('supertest');
const connection = require('../../src/database/connection');
const { app } = require('../../src/app');

describe('ONG', () => {
	beforeEach(async () => {
		await connection.rollback();
		await connection.migrate.latest();
	})

	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a new ONG', async () => {
		console.log(process.env.NODE_ENV === 'test');
		const response = await request(app)
			.post('/ongs')
			.send({
				name: 'APAD',
				email: 'contato@apad.com.br',
				whatsapp: '17997375281',
				city: 'Embaúba',
				uf: 'SP'
			});
		
		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});
});