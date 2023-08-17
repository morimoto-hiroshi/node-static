//利用モジュール
const http = require('http');
const nodeStatic = require('node-static');

//定数
const PORT = 3000; //httpサーバーのポート

//httpサーバーのrequestハンドラ
const server = new nodeStatic.Server('./public');
http.createServer((req, res) => {
    req.addListener('end', () => {
        //リクエストの受信が終わった
        server.serve(req, res, function (err, res) {
            //レスポンスの送信が終わった
            if (err) {
                res.writeHead(err.status, err.headers);
                res.end();
            } else {
                //ログを出力
                console.log(req.method, req.url, res.status, res.message, res.headers['Content-Length'] ?? '-', res.headers['Content-Type'] ?? '-');
            }
        });
    }).resume();
}).listen(PORT, () => {
    console.log(`listen http://localhost:${PORT}`);
});
