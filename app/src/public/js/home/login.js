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
});