const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.argv[2];

let server = http.createServer((req, res) => {
    var url = req.url;

    if (url.indexOf('/images') > -1) {
		fs.readFile('public/images/' + url.replace(/\/images/, ''), function (err, data) {
			var fileType = 'image/jpeg';
			
			if (url.indexOf('.png') > -1) {
				fileType = 'image/png';
			} else if (url.indexOf('.gif')) {
				fileType = 'image/gif'
			}
	        res.writeHead(200, {
	        	'Content-Type': fileType, 
	        	'Content-Length': data.length, 
	        	'Cache-Control': 'public, max-age=3600'
	        });
	        res.write(data);
	        res.end();
	    });
    } else if (url.indexOf('/js') > -1) {
		fs.readFile('public/js/' + url.replace(/\/js/, ''), function (err, data) {
	        res.writeHead(200, {
	        	'Content-Type': 'text/html', 
	        	'Content-Length': data.length
	        });
	        res.write(data);
	        res.end();
	    });
    } else if (url.indexOf('/css') > -1) {
		fs.readFile('public/css/' + url.replace(/\/css/, ''), function (err, data) {
	        res.writeHead(200, {
	        	'Content-Type': 'text/css;charset=utf-8', 
	        	'Content-Length': data.length, 
	        	'Cache-Control': 'public, max-age=600'
	        });
	        res.write(data);
	        res.end();
	    });
    } else if (url.indexOf('/fonts') > -1) {
		fs.readFile('public/fonts/' + url.replace(/\/fonts/, ''), function (err, data) {
            var fontType = '';
            if (url.indexOf('ttf') > -1) {
                fontType = 'application/x-font-ttf';
            } else if (url.indexOf('ttc') > -1) {
                fontType = 'application/x-font-ttf';
            } else if (url.indexOf('otf') > -1) {
                fontType = 'font/otf';
            } else if (url.indexOf('woff') > -1) {
                fontType = 'application/x-font-woff';
            } else if (url.indexOf('eot') > -1) {
                fontType = 'application/vnd.ms-fontobject';
            } else if (url.indexOf('svg') > -1) {
                fontType = 'image/svg+xml';
            } else  {
                fontType = 'application/x-font-ttf';
            }
	        res.writeHead(200, {
	        	'Content-Type': fontType,
	        	'Content-Length': data.length
	        });
	        res.write(data);
	        res.end();
	    });
    } else if (url == '/') {
		fs.readFile('public/index.html', function (err, data) {
	        res.writeHead(200, {
	        	'Content-Type': 'text/html',
	        	'Content-Length': data.length
	        });
	        res.write(data);
	        res.end();
	    });
    } else {
    	fs.readFile('public/error.html', function (err, data) {
	        res.writeHead(200, {
	        	'Content-Type': 'text/html',
	        	'Content-Length': data.length
	        });
	        res.write(data);
	        res.end();
	    });
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});