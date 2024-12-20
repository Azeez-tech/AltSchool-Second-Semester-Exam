const request = require('supertest');
const app = require('../app');
const { connectDB, disconnectDB } = require('../config/db');

beforeAll(connectDB);
afterAll(disconnectDB);

describe('Blog Endpoints', () => {
  let token;

  beforeAll(async () => {
    const userRes = await request(app).post('/auth/signup').send({
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      password: 'password123',
    });

    const loginRes = await request(app).post('/auth/login').send({
      email: 'test@example.com',
      password: 'password123',
    });

    token = loginRes.body.token;
  });

  it('should create a new blog', async () => {
    const res = await request(app)
      .post('/blogs')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'My First Blog',
        description: 'An awesome blog!',
        body: 'This is the content of my blog.',
        tags: ['test', 'blog'],
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'My First Blog');
  });
});