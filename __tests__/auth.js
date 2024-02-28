const User = require('../server/models/userModel');
const request = require('supertest');

const server = 'http://localhost:3000';
// /api/user

const testUser = {
  username: 'ReservedForTesting',
  email: 'tester@test.com',
  password: 'testing123',
};

afterEach(() => {
  User.findOneAndDelete({ username: testUser.username });
  console.log('clear');
});

describe('authentication tests', () => {
  describe('/signup', () => {
    it('responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/api/user/signup')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });






    xit('adds a new user', async () => {
      User.findOneAndDelete({ username: testUser.username });
      const res = await fetch(URL+'/signup', {
        method: 'POST',
        body: testUser,
      });
      expect(res.status).toEqual(200);
      expect(User.findOne({ username: testUser.username })).not.toEqual(null);
    });

    xit('returns an error when using an existing username', async () => {
      await fetch(URL, {
        method: 'POST',
        body: testUser,
      });
      const res = await fetch(URL+'/signup', {
        method: 'POST',
        body: testUser,
      });
      console.log(res.status)
      expect(res.status).toEqual(404);
      // expect(res).toBeInstanceOf(Error);
    });

    xit('returns an error when missing a username, email, or password', async () => {
      const res1 = await signup({
        email: testUser.email,
        password: testUser.password,
      });
      expect(res1).toBeInstanceof(Error);
      const res2 = await signup({
        username: testUser.username,
        password: testUser.password,
      });
      expect(res2).toBeInstanceof(Error);
      const res3 = await signup({
        username: testUser.username,
        email: testUser.email,
      });
      expect(res3).toBeInstanceof(Error);
    });
  });

  xdescribe('sign in', () => {
    // const [login, { isLoading }] = useLoginMutation();
    // const newUser = await new User(testUser).save();

    it('allows a user to log in', async () => {
      const res = await login({
        email: testUser.email,
        password: testUser.password,
      });
      expect(res).not.toBeInstanceof(Error);
    });

    it('returns an error when given an invalid email or password', async () => {
      const res1 = await login({
        email: 'invalidEmail',
        password: testUser.password,
      });
      expect(res1).toBeInstanceof(Error);
      const res2 = await login({
        email: testUser.email,
        password: 'invalidPassword',
      });
      expect(res2).toBeInstanceof(Error);
    });

    it('returns an error when missing an email or password', async () => {
      const res1 = await login({ password: testUser.password });
      expect(res1).toBeInstanceof(Error);
      const res2 = await login({ email: testUser.email });
      expect(res2).toBeInstanceof(Error);
    });
  });
});
