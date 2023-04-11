// HTML에서 해당 요소를 검색하여 찾은 모든 요소들을 반환
const boxEls = document.querySelectorAll('.box');

console.log(boxEls); // 요소들의 리스트가 반환됨 => 앞에서 사용한 DOM API 속성들을 바로 쓸 수가 없음

// forEach 메소드 사용
// 인수(인자값)으로 반복 요소를 처리하는 함수 추가 가능
// 매개변수 순서가 중요(반복으로 가져온 요소, 요소의 인덱스) => 요소 이름 맘대로 지정 가능
boxEls.forEach(function (boxEl, index) {
  console.log(index, boxEl);
  boxEl.classList.add(`order-${index + 1}`);
});

// 요소의 내용 확인 및 수정
const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'Change!';
console.log(boxEl.textContent);