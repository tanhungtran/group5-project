// server.js

// Khai báo module và app
const express = require('express');
const app = express();

// Middleware (để đọc JSON từ request body)
app.use(express.json());

// 1. IMPORT ROUTES (Hoạt động 3)
const userRoutes = require('./routes/user');

// 2. USE ROUTES (Hoạt động 3)
app.use('/', userRoutes);

// Định nghĩa PORT
const PORT = process.env.PORT || 3000;

// Khởi động server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));