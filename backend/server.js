// server.js
const express = require('express'); [cite: 40]
const app = express(); [cite: 41]
app.use(express.json()); [cite: 42]

// Định nghĩa PORT
const PORT = process.env.PORT || 3000; [cite: 43]

// Khởi động server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); [cite: 44]

// server.js

// ... (các dòng const express, app.use(express.json()))

// 1. Import User Routes
const userRoutes = require('./routes/user');

// 2. Sử dụng User Routes
app.use('/', userRoutes); // Tất cả route trong userRoutes sẽ được sử dụng

// ... (các dòng const PORT và app.listen)