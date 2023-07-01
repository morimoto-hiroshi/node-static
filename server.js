const nodeStatic = require('node-static');

const server = new nodeStatic.Server('./public');

require('http').createServer((request, response) => {
    request.addListener('end', () => {
        //リクエストの受信が終わった
        server.serve(request, response, function (err, res) {
            //レスポンスの送信が終わった
            if (err) {
                response.writeHead(err.status, err.headers);
                response.end();
            } else {
                //ログを出力
                console.log(request.method, request.url, res.status, res.message, res.headers['Content-Length'] ?? '-', res.headers['Content-Type'] ?? '-');
            }
        });
    }).resume();
}).listen(8080);
