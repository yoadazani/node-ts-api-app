import supertest from 'supertest';

import app from '../index';

describe('app', () => {
    let request: import('supertest/lib/agent');
    beforeEach(() => {
        request = supertest(app);
    });
    it('should return a successful response for GET /', (done) => {
        request.get('/').expect(404, done);
    });
});
