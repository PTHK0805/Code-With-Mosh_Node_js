const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Hello World");
    res.end();
  }

  if (req.url === '/courses/frontend') {
    res.write(JSON.stringify(['HTML', 'CSS', 'Javacript']));
    res.end();
  }

  if (req.url === '/courses/backend') {
    res.write(JSON.stringify(['NodeJs', 'React Native', 'PHP']));
    res.end();
  }

  else {
    res.write('Invalid request!');
    res.end();
  }
});

//server.on('connection', (socket) => {
//  console.log('New connection...');
//})

server.listen(3000);
console.log('Listening on port 3000....')
