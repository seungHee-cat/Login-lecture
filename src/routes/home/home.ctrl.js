"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

// OBJECT 형태로 사용(KEY-VALUE 형태)
// KEY만 입력 시 자체적으로 KEY와 같은 VALUE를 넣어줌
module.exports = {
  home,
  login,
};