import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// 만약 파일이 사라지면 package.json에 dependencies의 정보가 있으면 
// 터미널에 npm i를 입력하면 파일이 다시 돌아옴
// 그래서 깃허브나 사이트에 올릴 때 node_modules 폴더는 안올림