// server.js

// const http = require('http');
const express = require('express');
const cors = require('cors');

// CORS 설정을 위한 헤더
// const headers = {
//   'Access-Control-Allow-Origin': "http://127.0.0.1:9000",
//   'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
//   'Access-Control-Allow-Headers': 'Content-Type',
// };

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
  headers: 'Content-Type',
}));

app.use(express.text());


let data = { message: '여러분 화이팅!' };

app.options('/', (req, res) => {
  res.sendStatus(204);
});

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/', (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

app.put('/', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete('/', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:5500/ 에서 실행 중입니다.');
});

