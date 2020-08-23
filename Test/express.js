// 기본 탑제 모듈이 아니기때문에 해당 패키지를 설치 해줘야한다.
// npm i --save express 
const express = require('express')
// npm i --seva morgan
const logger = require('morgan')
const app = express() // express 객체 생성
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Blice' },
    { id: 3, name: 'Clice' },

]


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10
    const limit = parseInt(req.query.limit, 10)

    if (Number.isNaN(limit)) {
        res.status(400).end()
    } else {

    }

    res.json(users.slice(0, limit))
})

// 에러를 위한 미들웨어
const errorMw = (err, req, res, next) => {
    console.log(err.message)
}

// 미들웨어에선 인자값으로 3개 를 받기로 인터페이스로 선언 되어있다.
const mw = (req, res, next) => {
    // next : 함수 [ 여러 미들웨어가 있을 시 다음 미들웨어를 실행하기 이한 인자값]

    throw Error('error!')

    console.log('mw!')
    next()      // 미들웨어 마지막엔 next를 무조건 호출해줘야 다음 미들웨어를 실행한다.
}
const mw2 = (req, res, next) => {
    console.log('mw2!')
    next()
}

app.use(mw)
app.use(mw2)
app.use(logger('dev'))
app.use(errorMw)

module.exports = app
