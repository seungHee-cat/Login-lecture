"use strict";

/* 
  fs(File System)에서 Promise를 제공하고 있음
  Promise = 약속이라는 의미로 수행하는 동작이 끝남과 동시에
  상태를 알려주기 때문에 비동기 처리에 아주 효과적이다.
*/
const fs = require("fs").promises;

class UserStorage {
  // private한 변수, 메서드는 최상단에 두는 것이 convention
  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // => [id, psword, name]

    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    
    return userInfo;
  }

  static getUsers(...fields){
    // const users = this.#users;
    /*
      reduce = 반복문
      newUsers에는 fields라는 배열의 초기값이 들어가고
      그 다음 변수는 field에 들어옴
    */
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)){ // users에 해당하는 키값이 있는지 확인
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile("./src/databases/users.json") // Promise 반환
    .then((data) => {
      return this.#getUserInfo(data, id);
    })
    .catch(console.error);

  }

  static save(userInfo){
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }

}

module.exports = UserStorage;