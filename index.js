const fs = require('fs');
const http= require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if(pathName === '/') {
    const homePage = fs.readFileSync('./index.html', 'utf8');
    res.end(homePage);
  } else if(pathName === '/about') {
    const aboutPage = fs.readFileSync('./about.html', 'utf8');
    res.end(aboutPage);
  } else if(pathName === '/contact-me') {
    const contactPage = fs.readFileSync('./contact-me.html', 'utf8');
    res.end(contactPage);
  } else {
    const errorPage = fs.readFileSync('./404.html', 'utf8');
    res.writeHead(404, {
      'Cotent-type' : 'text/html'
    })
    res.end(errorPage);
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);

})