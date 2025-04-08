/*
  조건문
  : 조건식을 만들어서 조건식이 true, false인지에 따라서 코드 분기처리하는 식
  
  if(조건식1){
    조건식1이 참이면 이 코드블록 안쪽의 구문이 실행되면서 조건문 종료
    조건식1이 거짓이면 다음 조건식2로 넘어감
  }else if(조건식2){
    조건식2가 참이면 이 코드블록 안쪽의 구문이 실행되면서 조건문 종료
    조건식2가 거짓이면 다음 조건식2로 넘어감
  }else {
    만약 위의 조건식이 거짓이면 이곳의 구문을 실행하고 조건문 강제 종료
  }
*/

const calculator = (n1, n2, how) => {
  if (how === "+") {
    console.log(n1 + n2);
  } else if (how === "-") {
    console.log(n1 - n2);
  } else if (how === "*") {
    console.log(n1 * n2);
  } else if (how === "/") {
    console.log(n1 / n2);
  } else {
    console.error("세번째 매개변수 값이 잘못 전달되었습니다.");
  }
};

calculator(2, 3, "/");

/*
calculator(2, 3, "+");
calculator(2, 3, "-");
calculator(2, 3, "*");
calculator(2, 3, "/");
추가 기능 : 사칙연산 4가지 기호 외의 값이 3번째 매개변수로 전달되면 콘솔문으로 오류메세지 출력 
*/

const colors = ["red", "blue", "orange"];

for (let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

colors.forEach((data, index)=>{
  console.log(data);
  console.log(index);
  console.log("--------")
})

/*
  js 형변환
  - 문자열 -> 숫자화
  - 숫자 -> 문자화
  자바스크립트에서의 형변환
  기본 자료형이 변경되는 현상
  - 문자열 --> 숫자화
  - 숫자 --> 문자화

  실무에서 형변환이 일어나는 대표적 사례
  문자+숫자를 더했을때 더해지는 숫자(변수)값이 자동으로 문자화 되는 현상
 */

 //숫자가 문자화되는 대표적인 예시
let str = "1";
let num1 = 1;
let num2 = 2;
console.log(str + num1 + num2);
console.log(num1 + num2 + str);

//변수가 문자화되는 대표적인 예시
let myName = "홍길동";

console.log("제 이름은 myName입니다."); // 제이름은 myName입니다. 변수가 문자화

//위와 같은 문제를 해결하기 위해서는 문자열과 변수를 분리해서 +연산자로 연결
console.log("제 이름은 " + myName + "입니다.");

//위와 같은 번거로움을 개선하고자 ES6에서는 문자열 템플릿 문법이 생김
console.log(`제 이름은 ${myName}입니다.`);

/*
  문자를 숫자로 형변환 처리:
  parseInt(문자화된 숫자) : 정수 변환
  parseFloat(문자화된 숫자) : 실수 변환
*/

let num = "3.5";
console.log(typeof num);
num = parseFloat(num)
console.log(typeof num);

//사용자 정보를 입력받아 콘솔문으로 출력해주는 함수 제작
//이름, 나이, 성별
//함수 내부에서는 "홍길동님의 나이는 20살이고 성별은 남성입니다" 출력
//대입형 함수(화살표 함수)활용
//3개의 인자값 중 하나라도 없으면 경고문 출력

const profile = (name, age, gender) => {
  if (!name || !age || !gender) {
    console.error("매개변수 값이 잘못 전달되었습니다.");
  }
  else {
    console.log(`${name}님의 나이는 ${age}살이고 성별은 ${gender}입니다.`)
  }
};

profile("김현일", 20, "남성")
profile("김현일")