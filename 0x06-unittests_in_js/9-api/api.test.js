const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});

describe('GET /cart/12', () => {
    it('Responds with 200 and id 12', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/5', () => {
    it('Responds with 200 and id 5 in message', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/5',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 5');
        done();
      });
    });
  });

  describe('GET /cart/135', () => {
    it('Responds with 200 and id 135 in msg', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/135',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 135');
        done();
      });
    });
  });

  describe('GET /cart/b12', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/b12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/a1b', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a1b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/2b', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/2b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/hello', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
