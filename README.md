# qrcode-image-webserver [![NPM version](https://badge.fury.io/js/qrcode-image-webserver.svg)](https://npmjs.org/package/qrcode-image-webserver) [![Build Status](https://travis-ci.org/gejiawen/qrcode-image-webserver.svg?branch=master)](https://travis-ci.org/gejiawen/qrcode-image-webserver)

> a web server to generate qrcode image

## Usage

```js
node index.js
```

server start at port 5000.

access server like this: `http://localhost:5000/?url=www.baidu.com`

## url parameter

`http://localhost:5000?url=www.baidu.com&size=6`

- `url`, a url text. will auto preappend the http protocol when you lost it
- `size`, size the qrcode image

## License

MIT © [gejiawen](http://blog.gejiawen.com)
