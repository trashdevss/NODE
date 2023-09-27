const http = require('http');
const fs = require('fs');

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página Inicial');
  } else if (req.url === '/sobre') {
    const filePath = 'sobre.txt';
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Página não encontrada');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Página não encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
