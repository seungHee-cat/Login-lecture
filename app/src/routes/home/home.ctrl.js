"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["김팀장", "나대리", "user123"],
  psword: ["1234", "1234", "1234"] 
};

const process = {
  // input에서 입력-버튼 눌렀을 때 받아온 데이터 = req
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);

      if(users.psword[idx] === psword){
        return res.json({
            success: true,
          }
        )
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    })
  },
};

// OBJECT 형태로 사용(KEY-VALUE 형태)
// KEY만 입력 시 자체적으로 KEY와 같은 VALUE를 넣어줌
module.exports = {
  output,
  process,
};