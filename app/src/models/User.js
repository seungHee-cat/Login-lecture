"use strict";

const UserStorage = require('./UserStorage');

class User {
  constructor(body){
    this.body = body;
  }

  async login(){
    /*
    Promise를 반환하는 객체에게 await을 사용할 수 있다.
    then()으로도 접근할 수 있지만 가독성의 이유로 await을 사용한다.
    fs(파일시스템)에서도 await으로 가져올 수 있다.
    다만 await은 Async함수 안에서만 사용할 수 있다.
    */
    const client = this.body;
    try{
      const { id, psword } = await UserStorage.getUserInfo(client.id) // getUserInfo가 반환하는게 Promise 객체이기 때문에 받아올때까지 기다려라, 하고 await
  
      if (id) {
        if( id === client.id && psword === client.psword){
          return { success: true };
        } 
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return {success: false, msg: "존재하지 않는 아이디입니다."};
    }catch (err){
      return { success: false, msg: err };
    }
  }

  async register(){
    const client = this.body;
    try{
      const response = await UserStorage.save(client);
      return response;
    } catch (err){
      return { success: false, msg: err };
    }
  }
}

module.exports = User;