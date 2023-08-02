import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;
const dbFile = "db.json";
const secretkey = "88888888";
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router
app.post(`/auth/signup`, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const data = await fs.promises.readFile(dbFile, "utf-8");
    const db = JSON.parse(data);
    const existingUser = db.users.find(
      (user) => user.username === username || user.email === email
    );
    if (existingUser) {
      return res.status(400).json({ message: "Người dùng đã tồn tại" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: db.users.length + 1,
      username,
      email,
      password: hashedPassword,
    };
    db.users.push(newUser);
    await fs.promises.writeFile(dbFile, JSON.stringify(db), "utf8");

    // Trả về thông báo thành công
    res.status(201).json({ message: "Đăng ký thành công", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post(`/auth/signin`, async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await fs.promises.readFile(dbFile, "utf-8");
    const db = JSON.parse(data);
    //kiểm tra khớp email
    const user = db.users.find((user) => user.email === email);
    //không khớp thì đưa ra thông báo ko tồn tại
    if (!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }
    //so sánh mật khẩu ng dùng nhập và mật khẩu trong db
    const passwordMatch = await bcrypt.compare(password, user.password);
    const accsetToken = jwt.sign({ userId: user.id }, secretkey, {
      expiresIn: "600",
    });
    if (passwordMatch) {
      // Đăng nhập thành công, trả về thông báo và thông tin người dùng
      res
        .status(200)
        .json({
          message: "Đăng nhập thành công",
          user: { id: user.id, username: user.username, email: user.email },
          accsetToken
        });
    } else {
      // Sai mật khẩu, trả về thông báo lỗi
      res.status(401).json({ message: "Sai mật khẩu" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
