const http = require('http');
http.get('http://localhost:3000', res => {
  console.log('status', res.statusCode);
  process.exit(res.statusCode === 200 ? 0 : 1);
}).on('error', e => { console.error(e); process.exit(2); });

