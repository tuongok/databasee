const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// Thêm dòng này để Vercel nhận diện
module.exports = server;