"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  // input에서 입력-버튼 눌렀을 때 받아온 데이터 = req
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    
    return res.json(response);
  },
};

// OBJECT 형태로 사용(KEY-VALUE 형태)
// KEY만 입력 시 자체적으로 KEY와 같은 VALUE를 넣어줌
module.exports = {
  output,
  process,
};