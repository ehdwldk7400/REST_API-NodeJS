const assert = require('assert')
const should = require('should')
const request = require('supertest')

const app = require('./express')



describe('GET /users', () => {
    describe('성공', () => {
        it('배열을 반환한다.', (done) => {
            //assert.equal(1, 0)
            //(1).should.equal(1)
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.insatanectOf(Array)
                    res.body.array.forEach(user => {
                        user.should.have.property('name')
                    });
                    if (err) throw err
                    done()
                })
        })
        it('쵀대 limit 갯수만큼 응답한다', done => {
            request(app)
                .get('/users?limit=2')
                .end((err, res) => {
                    res.body.should.have.lengthOf(2)
                    done()
                })
        })
    })
    describe('실패', () => {
        it('limit이 정수가 아니면 400을 응답한다.', done => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done)
        })
    })
})