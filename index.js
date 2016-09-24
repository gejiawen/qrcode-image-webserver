var http = require('http')
var url = require('url')
var qr = require('qr-image')

http.createServer(function (req, res) {
    var param = url.parse(req.url, true).query.url

    if (!param) {
        res.writeHead('200', {'Content-Type': 'text/plain'})
        res.end('param url required!')
    }

    try {
        var img = qr.image(param, {size: 6})
        res.writeHead(200, {'Content-Type': 'image/png'})
        img.pipe(res)
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'})
        res.end('<h1>414 Request-URI Too Large</h1>')
    }
}).listen(5000)
