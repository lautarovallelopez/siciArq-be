const {
    request,
    Sinon
} = require('..');

const {ArqService} = include('services');

describe('public-api', () => {
    let arqServices;

    beforeEach(() => {
        arqServices = Sinon.stub(ArqService, 'login')
            .returns(Promise.resolve({
                token: 'fake-token',
                user: {
                    name: 'fake-name',
                    surname: 'fake-surname',
                    roles: ['fake-role'],
                    email: 'fake-email@fake.com',
                    deleted: false,
                    id: '00000000-0000-0000-0000-000000000000',
                    documentId: 'fake-document'
                }
            }));
    });

    afterEach(() => {
        ArqService.login.restore();
    });

    it('should return token and user from /login', done => {
        request
            .post('/public-api/login')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(JSON.stringify({
                username: 'fake-user',
                password: 'fake-password'
            }))
            .expect(200)
            .end((err, res) => {
                const result = arqServices.calledWith({
                    username: 'fake-user',
                    password: 'fake-password'
                });
                result.should.be.equal(true);
                res.body.should.have.property('token').which.is.a.String();
                res.body.should.have.property('user').which.is.a.Object();
                done();
            });
    });
});
