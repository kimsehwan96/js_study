const express = require("express");
const app = express();
const port = 5000;

const { User } = require("./models/User");
const { auth } = require("./middleware/auth");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/hello", (req, res) => {
  res.send("  hi !! ");
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  console.log(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/login", (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지  찾는다.

  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSucess: false,
        message: "해당 유저가 없습니다.",
      });
    }
    //요청한 ㅇ ㅣ메일이 있다면 비밀번호가 같은지 확인

    // 커스텀 메서드를 사용하는것
    //커스텀 메서드의 인자로 플레인 텍스트 패스워드, 콜백함수 이렇게 받았으니  우리도  그렇게 사용해야지!
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSucess: false,
          message: "password not matched",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //token save ->cookie or localStorage
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSucess: true, userId: user._id });
      });
    });
  });
  //비밀번호까지 같다면 유저를 위한 토큰을 생성
});

app.get("/api/users/auth", auth, (req, res) => {
  //middle ware will set token and user id in request
  //if request failed to pass auth, logic will be ended in middleware
  //so request won't have token and user

  req.status(200),
    json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      role: req.user.role,
      // image: req.user.image
    });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.listen(port, () => console.log("app started"));
