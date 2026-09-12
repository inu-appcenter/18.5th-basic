// 1-9) 조건문
// 1. if 조건문 (if문)
let num = 10;
if (num >= 10) {
  // 조건식이 참일 때 블록 내부의 구문을 실행
  console.log("num은 10 이상입니다.");
  console.log("조건이 참입니다.");
} else if (num >= 5) {
  // else if를 이용하여 추가적인 조건들을 작성 가능 (개수 제한 X)
  console.log("num은 5 이상입니다.");
} else {
  // else 블록을 이용하여 조건이 거짓일 때 실행할 구문도 작성 가능
  console.log("조건이 거짓입니다.");
}

// 2. Switch문
// if문과 기능 자체는 동일, 다수의 조건을 처리할 때 더 직관적
let animal = "cat";
switch (animal) {
  // 소괄호 내부에 변수를 집어넣고, 일치하는 값을 위에서 아래로 차례대로 탐색.
  // 일치하는 값을 찾으면 그 아래에 있는 모든 코드를 전부 실행하기 때문에 break;로 끊어주어야 한다.
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  default: {
    // 해당하는 케이스가 없을 때 실행된다.
    console.log("그런 동물은 잘 모릅니다");
  }
}
