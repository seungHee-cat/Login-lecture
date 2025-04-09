"use strict";

// DOM : Document Object Model, 일종의 인터페이스
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
  const req = {
    id: id.value,
    psword: psword.value,
  };

// 프론트에서 서버로 데이터 보내기
fetch("/login", { 
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(req) // req(Obejct)를 JSON형태로 변환
})
  .then((res) => res.json())
  .then((res) => {
    if(res.success){
      location.href = "/";
    } else {
      alert(res.msg);
    }
  })
  .catch( (err) => { 
    console.error("로그인 중 에러 발생");
  });
  // .then(console.log); // 파라미터로 넘기는 값을 함수안에 넘길때는 문법 생략 가능

/*
  res.json()의 반환 값은 Promise
  기본 res의 반환 값은 Response 스트림인데, ".json()" 메서드를 통해 Response(응답) 스트림을 읽을 수 있다.
  Response는 데이터가 모두 받아진 상태가 아니다.
  ".json()"으로 Response 스트림을 가져와 완료될 때까지 읽는다.
  다 읽은 body의 텍스트를 Promise 형태로 반환한다.
*/
}

