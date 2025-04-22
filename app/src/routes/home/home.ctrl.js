"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  // input에서 입력-버튼 눌렀을 때 받아온 데이터 = req
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

// OBJECT 형태로 사용(KEY-VALUE 형태)
// KEY만 입력 시 자체적으로 KEY와 같은 VALUE를 넣어줌
module.exports = {
  output,
  process,
};