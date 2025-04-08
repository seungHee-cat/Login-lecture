"use strict";

class UserStorage {
  // 클래스 변수 따로 안만들고 static으로 바로 users에 접근
  // 하지만 원래는 #을 붙여 은닉화시켜주는게 맞음
  static #users = {
    id: ["김팀장", "나대리", "user123"],
    psword: ["1234", "1234", "1234"],
    name: ["김동길", "나동길", "다동길"]
  };

  static getUsers(...fields){
    const users = this.#users;
    /*
      reduce = 반복문
      newUsers에는 fields라는 배열의 초기값이 들어가고
      그 다음 변수는  field에 들어옴
    */
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)){ // users에 해당하는 키값이 있는지 확인
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;