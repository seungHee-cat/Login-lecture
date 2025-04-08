// PURE
// const http = require('http');
// const app = http.createServer( (req, res) => {
//   // 한글 인코딩
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});

//   if(req.url === '/'){
//     res.end("ROOT ROUTE");
//   }else if(req.url === '/login'){
//     res.end("LOGIN 페이지");
//   }
// });


// app.listen(3000, () => {
//   console.log("HTTP SERVER START");
// })

"use strict"

// MODULE
const express = require('express');
const app = express();

// ROUTING
const router = require('./src/routes/home');

// APP SETTING
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded( { extended: true }));

// 미들웨어를 등록해주는 메소드 use
app.use("/", router);

module.exports = app; 