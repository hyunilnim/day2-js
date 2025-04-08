/*
  DOM 스크립트

  DOM(Document Object Model)
  -html 태그를 브라우저가 해석해서 자바스크립트가 제어 가능한 형태로 변환된 객체

  DOM 요소 선택

  DOM 정보 출력

  DOM 텍스트 정보 변경

  DOM 스타일 정보 변경

  DOM 속성 정보 변경

  DOM 이벤트 연결
*/

//h1 태그 요소를 돔 스크립트로 선택
const h1 = document.querySelector('h1');
const link = document.querySelector('a');
console.log(h1);
console.dir(h1);

//DOM 텍스트 변경
h1.innerText = "김영희";

//DOM html 구조 변경
h1.innerHTML = '<span>김판섭</span>';

//DOM 스타일 변경
h1.style.color = 'aqua';

//DOM 속성 변경
link.href = "https://www.nate.com"
link.innerText = "네이트"

/*
  이벤트
  - 웹상에서 사용자, 혹은 시스템이 일으키는 행동

  사용자 이벤트
  - click, mouseenter, mouseleave, scroll, resize
  시스템 이벤트
  - load, error, pending, fulfilled, rejected

  이벤트 연결 방법(이벤트 바인딩)
  DOM.addEventListener('이벤트명', 이벤트 핸들러)
*/

h1.addEventListener('click',()=>{
  console.log("h1요소 클릭")
})

//const btn1 = document.querySelector(".btn1");
//const btn2 = document.querySelector(".btn2");
//const btn3 = document.querySelector(".btn3");
const btns = document.querySelectorAll("button");

//btn1 클릭시 h1요소의 텍스트를 변경
//btn2 클릭시 h1요소의 글자색 변경
//btn3 클릭시 링크 정보 변경
btns[0].addEventListener('click', ()=>{
  h1.innerText = "새로운 이름"
})

btns[1].addEventListener('click', ()=>{
  h1.style.color = "red"
})

btns[2].addEventListener('click', ()=>{
  link.href = "https://www.naver.com"
  link.innerText = "네이버"
})