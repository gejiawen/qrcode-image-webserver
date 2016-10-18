var http = require('http')
var url = require('url')
var qr = require('qr-image')

http.createServer(function (req, res) {
    var query = url.parse(req.url).query
    if (!query) {
        res.writeHead('200', {'Content-Type': 'text/plain'})
        res.end('param url is required')
        return
    }
    query = parse(query)

    var uri = query.url
    var size = query.size || 6

    if (!uri) {
        res.writeHead('200', {'Content-Type': 'text/plain'})
        res.end('url is required')
    }

    if (!/^https?:\/\/.+$/.test(uri)) {
        uri = 'http://' + uri
    }

    try {
        var img = qr.image(uri, {
            size: parseInt(size)
        })
        res.writeHead(200, {'Content-Type': 'image/png'})
        img.pipe(res)
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'})
        res.end('<h1>414 Request-URI Too Large</h1>')
    }

    function parse(query) {
        if (!query) {
            return null;
        }
        var ret = {};
        query = query.split('&');
        query.forEach(function (v, k) {
            var pair = v.split('=');
            ret[pair[0]] = pair[1] ? decodeURIComponent(pair[1]) : true;
        })
        return ret;
    }
}).listen(5000)
