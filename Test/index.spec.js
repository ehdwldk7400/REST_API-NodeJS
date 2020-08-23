const assert = require('assert')
const should = require('should')
const request = require('supertest')

const app = require('./express')



describe('GET /users', () => {
    it('배열을 반환한다.', (done) => {
        //assert.equal(1, 0)
        //(1).should.equal(1)
        request(app)
            .get('/users')
            .end((err, res) => {
                res.body.should.be.insatanectof(Array)
                res.body.array.forEach(user => {
                    user.should.have.property('name')
                });
                if (err) throw err
                done()
            })
    })
})