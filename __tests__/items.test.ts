import request from 'supertest';
import app from '../src/app';

describe('GET /api/items', () => {
  it('debe responder con 400 si no se pasa parámetro q', async () => {
    const response = await request(app).get('/api/items');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

});

