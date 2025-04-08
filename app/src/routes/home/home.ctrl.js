"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const UserStorage = require("../../models/UserStorage");

const process = {
  // input에서 입력-버튼 눌렀을 때 받아온 데이터 = req
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

  const users = UserStorage.getUsers("id", "psword");

  const response = {};
    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);

      if(users.psword[idx] === psword){
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하였습니다.";
    return res.json(response);
  },
};

// OBJECT 형태로 사용(KEY-VALUE 형태)
// KEY만 입력 시 자체적으로 KEY와 같은 VALUE를 넣어줌
module.exports = {
  output,
  process,
};