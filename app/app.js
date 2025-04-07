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
const home = require('./src/routes/home');

// APP SETTING
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어를  등록해주는 메소드 use
app.use("/", home);

module.exports = app;