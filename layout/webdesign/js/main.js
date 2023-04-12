// 오류 발생 시
// console 확인 -> 조건 확인

// 이미지 슬라이드 쇼 만들기
const slides = document.querySelectorAll('#slides > img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// 이미지 3개 중에서 하나가 표시되면 나머지 이미지는 모두 감춤
// 이전 또는 다음 버튼을 클릭하면 이전이나 다음 이미지를 보여줌
// 슬라이드 번호를 저장할 인덱스 변수 current 선언
let current = 0;

// current 값에 따라 현재 이미지를 보여주는 함수
function showSlieds(n) {
  // 모든 이미지를 화면에서 감춤
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // n번째 이미지만 화면에 표시
  slides[n].style.display = "block";
}

// 이전 이미지를 보여주는 함수
function prevSlide() {
  // current 값이 0보다 크면 이전 인덱스로
  // 그렇지 않으면(첫번째 이미지이므로) 마지막 인덱스로
  if (current > 0) {
    current--;
  } else {
    current = slides.length - 1;
  }
  showSlieds(current);
}

// 다음 이미지를 보여주는 함수
function nextSlide() {
  // current 값이 2보다 작으면 다음 인덱스로
  // 그렇지 않으면(마지막 이미지이므로) 첫번째 인덱스로
  if (current < slides.length - 1) {
    current++;
  } else {
    current = 0;
  }
  // 이미지 보여주는 함수!
  showSlieds(current);
}

// 이전 버튼을 클릭했을때 이전 이미지를 보여주는 함수를 호출 시켜줘
// 1. 버튼에 이벤트 리스너 등록 => .addEventListener
// 인자 2개 => event, function
// 콜백 함수 => 함수이름만 와야 () 필요없음
prev.addEventListener('click',prevSlide); // 이전 이미지 표시
next.addEventListener('click',nextSlide); // 다음 이미지 표시

// (참고) 2. 바로 onclick 속성으로도 가능
// prev.onclick = prevSlide;
// next.onclick = nextSlide;

// (참고) 이미지 슬라이드 쇼를 자동으로 바꾸는 방법
// function showSlides() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none"; // 모든 이미지 감춤
//   }
//   current++; // 다음 이미지로 이동
//   if (current > slides.length) { // 마지막 이미지라면
//     current = 1; // 첫 번째로 이동
//   }
//   slides[current - 1].style.display = "block"; // 현재 위치 이미지 표시
//   setTimeout(showSlides, 2000); // 2초 마다 showSlides 함수 반복 실행 
// }

// showSlides(); // 기본적으로 첫 번째 이미지 표시