console.log("안녕 Node.js");

// node index.js로 터미널에 치면 안녕 Node,js가 나옴

// src파일에 index.js가 있는 경우
// node index.js로 실행하면 오류가 나옴 (현재 경로에서 찾으려고 해서 못찾음)
// -> node src/index.js로 실행

// "start": "node src/index.js" 
// start 명령어로만 뒤에 있는 것을 실행
// 일종의 메크로 역할
// npm run start로 실행