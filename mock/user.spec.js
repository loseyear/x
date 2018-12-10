const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('supertest')

const app = require('../bin')

describe('get user', () => {
  it('/user', (done) => {
    request(app)
      .get('/user?a=b')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.have.length.above(0)
        done()
      })
  })
})
