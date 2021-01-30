const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 100,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function(next) {
    let user = this;

    if (user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err ,hash){
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
      next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, callback) {
  //plain password : 1234567    crpyted pwd check

  //이 비크립트의 컴페어 메서드는  인자로 데이터, 암호화된값, 콜백(에러, 같은지아닌지:불리언 ) 이걸 받음
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if(err) return callback(err)
    callback(null, isMatch)
  })
}

//user에 대한 커스텀 메서드를 추가하는 방법. 이렇게 유저(스키마).메소드.커스텀메소드 하면 커스텀 메서드 추가 가능하며. 이런 모델에 대한 추가 처리를 할 때 이렇게 코딩하면 되넹.
userSchema.methods.generateToken = function(callback){
  
  let user = this;
  //jwt , token gen
  let token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token;
  user.save(function(err, user){
    if(err) return callback(err)
    callback(null, user)
  })
}

userSchema.statics.findByToken = function (token, callback) {
  let user = this;

  // user._id + '' = token
  //decoding token 
  jwt.verify(token, 'secretToken', function(err, decoded) {
    //using user id, find user and check that token from client and 
    //token from db is same

    user.findOne({"_id" : decoded, "token" : token }, function(err, user){
      if(err) return callback(err);
      callback(null, user);
    })
  })
}

const User = mongoose.model("User", userSchema);

module.exports = { User };
