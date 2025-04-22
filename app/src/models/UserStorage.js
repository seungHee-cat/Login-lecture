"use strict";

const db = require("../config/db");

class UserStorage {

  static getUserInfo(id) {
    // Promise구문이 성공하면 resolve, 실패하면 reject 실행
    return new Promise( (resolve, reject) => {
      const query = "SELECT * FROM USERS WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo){
    return new Promise( (resolve, reject) => {
      const query = "INSERT INTO USERS(id, name, psword) VALUES(?, ?, ?);";
      db.query(
        query, 
        [userInfo.id, userInfo.name, userInfo.psword], 
        (err) => {
          if (err) reject(`${err}`); // 팝업에 에러내용 띄우기
          resolve( { success: true }); 
      });
    });
  }

}

module.exports = UserStorage;