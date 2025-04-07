"use strict";

// DOM : Document Object Model, 일종의 인터페이스
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    psword: psword.value
  };
  console.log(req);
  console.log(JSON.stringify(req));

  // 프론트에서 서버로 데이터 보내기
  fetch("/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req) // req(Obejct)를 JSON형태로 변환
  })
});