const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json', { readonly: true }); // Thêm option này
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;