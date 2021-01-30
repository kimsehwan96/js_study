const { User } = require('../models/User');

let auth = (req, res, next) => {
    // 인증처리를 하는 곳

    //클라이언트 쿠키에서 토큰을 갖고온다.

    let token = req.cookies.x_auth;

    //토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, err: true })
        
        req.token = token;
        req.user = user;
        next(); //middle ware should declare next() in the end of logic.
    })

    //유저가 있으면 인증 성공
    //유저가 없으면 인증 실패
}

module.exports = { auth };