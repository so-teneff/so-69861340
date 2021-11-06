import app from '../app'
import supertest from 'supertest'
const requestWithSupertest = supertest(app);


describe('Messages Endpoints', () => {

  it('GET /messages should show all messages', async () => {
    const res = await requestWithSupertest.get('/messages');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('messages')
  });

});
