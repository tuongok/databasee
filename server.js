// Import thư viện
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json'); // Trỏ đến file database
const middlewares = jsonServer.defaults();

// Cấu hình middleware (CORS, auth, logging...)
server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Mở CORS cho tất cả domain
  res.header('Access-Control-Allow-Headers', '*'); // Cho phép mọi header
  next();
});

// Sử dụng router
server.use(router);

// Khởi chạy server
const PORT = process.env.PORT || 3000; // Port mặc định hoặc lấy từ biến môi trường
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// Export cho Vercel/Render (nếu cần)
module.exports = server;