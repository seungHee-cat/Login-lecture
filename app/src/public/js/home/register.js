"use strict";

// DOM : Document Object Model, 일종의 인터페이스
const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(!name.value) return alert("이름을 입력해주세요.");
  if(!psword.value) return alert("비밀번호를 입력해주세요.");
  if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };
  console.log(req);

// 프론트에서 서버로 데이터 보내기
fetch("/register", { 
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(req) // req(Obejct)를 JSON형태로 변환
})
  .then((res) => res.json()) // 서버 응답을 다 받는 순간 Promise 객체 반환
  .then((res) => { // Promise 객체에 접근해서 res의 suucess로 로직짜기
    if(res.success){
      location.href = "/login";
    } else {
      alert(res.msg);
    }
  })
  .catch( (err) => { 
    console.error("회원가입 중 에러 발생");
  });
}

