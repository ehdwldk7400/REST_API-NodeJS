const http = require('http');   // http 모듈 생성

const hostname = '127.0.0.1';   // Server IP 선언
const port = 5000               // Server Prot 선언;

// createServer 서버 생성 메서드
// req = Request / res = Response
const server = http.createServer((req, res) => {
    console.log('login....');       // 요청이 올때마다 서버에 로그 남김
    console.log(req.url);       // 요청 URL 로그 남김
    if (req.url === '/') {  // URL이 /로 온다면
        res.statusCode = 200;       // 성공을 의미하는 http 상태 코드
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!\n');  // 응답을 끝낼때 사용 지금은 텍스트를 인자 값으로 던져준다.
    } else if (req.url === '/users') {      // 요청 URL이 /users로 온다면
        const users = [
            { name: 'Beck' },
            { name: 'Alice' }
        ]
        res.statusCode = 200;       // 성공을 의미하는 http 코드
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));  // res.end 사용 시 인자값은 문자열로 줘야한다..

    }
});

// Server에서 요청 대기 상태
server.listen(port, hostname, () => {
    // 문자열 안에서 변수를 사용할려면 ' or " 이 아닌 `을 사용해야 변수 사용이 가능하다.
    console.log(`Server running at http://${hostname}:${port}/`);
});

