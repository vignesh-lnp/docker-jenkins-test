const http = require('http');
const port = process.env.PORT || 4000;
const metricsCount = { requests: 0 };
http.createServer((req, res) => {
  if (req.url === '/metrics') {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(`# HELP requests_total Total requests\nrequests_total ${metricsCount.requests}\n`);
    return;
  }
  metricsCount.requests++;
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('hello world\n');
}).listen(port, ()=> console.log(`listening ${port}`));

