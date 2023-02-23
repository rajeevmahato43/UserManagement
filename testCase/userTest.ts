import request from 'supertest';
import { app } from '../src/app';
import expect from "expect";
describe('User API', () => {
  const user: User = {
    id: 0,
    name: 'John Doe',
    email: 'john@example.com',
    dob: '24/02/2023'
  };

  describe('POST /users', () => {
    it('should add a new user', async () => {
      const res = await request(app).post('/users').send(user);
      console.log(res.body.id)
      user.id = res.body.id;
      expect(res.status).toEqual(201);
      expect(res.body).toEqual(user);
    });
  });

  describe('GET /users/:id', () => {
    it('should get a user by ID', async () => {
      const res = await request(app).get(`/users/${user.id}`);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(user);
    });

    it('should return  user not found', async () => {
      const res = await request(app).get('/users/999');
      expect(res.body).toEqual({});
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user by ID', async () => {
      const res = await request(app).delete(`/users/${user.id}`);
      expect(res.status).toEqual(204);
    });

    it('should return 404 if user not found', async () => {
      const res = await request(app).delete('/users/999');
      expect(res.status).toEqual(404);
    });
  });
});