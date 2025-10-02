let users = []; // Mảng tạm thời để lưu user

// 1. Hàm GET /users: Lấy danh sách tất cả user
exports.getUsers = (req, res) => {
    res.json(users);
};

// 2. Hàm POST /users: Tạo user mới
exports.createUser = (req, res) => {
    // Lấy dữ liệu user từ request body
    const { name, email } = req.body;
    
    // Tạo user mới với ID ngẫu nhiên (tạm thời)
    const newUser = { 
        id: Date.now(), 
        name, 
        email 
    };

    // Thêm user mới vào mảng
    users.push(newUser);

    // Trả về user vừa tạo (status 201 Created)
    res.status(201).json(newUser);
};