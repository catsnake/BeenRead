const User = require('../server/models/userModel');

import { useSignupMutation } from '../client/slices/api/userApiSlice';

const testUser = {
    username: 'ReservedForTesting',
    email: 'tester@test.com',
    password: 'testing123'
}

afterAll(() => {
    User.findOneAndDelete({username: testUser.username})
})

describe('authentication tests', () => {

    describe('sign up', () => {
        const [signup] = useSignupMutation();

        it('adds a new user', async () => {
            await signup(testUser);
            expect(User.findOne({username: 'ReservedForTesting'})).not.toEqual(null);
        })

        it('returns an error when using an existing username', async () => {
            await signup(testUser);
            const res = await signup(testUser);
            expect(res).toBeInstanceof(Error);
        })

        it('returns an error when missing a username, email, or password', async () => {
            const res1 = await signup({email: testUser.email, password: password: testUser.password});
            expect(res1).toBeInstanceof(Error);
            const res2 = await signup({username: testUser.username, password: password: testUser.password});
            expect(res2).toBeInstanceof(Error);
            const res3 = await signup({username: testUser.username, email: testUser.email});
            expect(res3).toBeInstanceof(Error);
        })
    })

    describe('sign in', async () => {
        const [login, { isLoading }] = useLoginMutation();
        const newUser = await new User(testUser).save();

        it('allows a user to log in', async () => {
            const res = await login({ email: testUser.email, password: testUser.password });
            expect(res).not.toBeInstanceof(Error);
        })

        it('returns an error when given an invalid email or password', async () => {
            const res1 = await login({ email: 'invalidEmail', password: testUser.password });
            expect(res1).toBeInstanceof(Error);
            const res2 = await login({ email: testUser.email, password: 'invalidPassword' });
            expect(res2).toBeInstanceof(Error);
        })

        it('returns an error when missing an email or password', async () => {
            const res1 = await login({ password: testUser.password });
            expect(res1).toBeInstanceof(Error);
            const res2 = await login({ email: testUser.email });
            expect(res2).toBeInstanceof(Error);
        })
    })
})