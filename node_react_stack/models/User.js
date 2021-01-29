const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    maxlength: 50,
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

// userSchema.pre("save", (next) => {
//   if (this.isModified("password")) {
//     bcrypt.genSalt(saltRounds, (err, salt) => {
//       if (err) return next(err);
//       console.log(this.password);
//       bcrypt.hash(this.password, salt, (err, hash) => {
//         if (err) return next(err);
//         this.password = hash; //arrow function의 this binding scope issue.
//         next();
//       });
//     });
//   }
// });

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
    }
})

const User = mongoose.model("User", userSchema);

module.exports = { User };
