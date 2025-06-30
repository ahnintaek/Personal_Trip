// const num0 = document.querySelector('.num0')
// const num1 = document.querySelector('.num1')
// const num2 = document.querySelector('.num2')
// const num3 = document.querySelector('.num3')

// const day0 = document.querySelector('.day0')
// const day1 = document.querySelector('.day1')
// const day2 = document.querySelector('.day2')
// const day3 = document.querySelector('.day3')

// 페이지 로드 후 실행될 코드
window.addEventListener("DOMContentLoaded", function() {
    // 각 num 요소와 day 요소를 가져옵니다.
    const num0 = document.querySelector(".num0");
    const num1 = document.querySelector(".num1");
    const num2 = document.querySelector(".num2");
    const num3 = document.querySelector(".num3");
    
    const day0 = document.querySelector(".day0");
    const day1 = document.querySelector(".day1");
    const day2 = document.querySelector(".day2");
    const day3 = document.querySelector(".day3");

    // 처음에 day0가 기본으로 보이도록 설정
    day0.style.display = "block";
    day1.style.display = "none";
    day2.style.display = "none";
    day3.style.display = "none";
    
    // 각 num을 클릭했을 때 해당하는 day를 보이게 설정
    function showDay(dayToShow) {
        // 모든 day를 숨기고 클릭된 day만 보이도록 설정
        day0.style.display = "none";
        day1.style.display = "none";
        day2.style.display = "none";
        day3.style.display = "none";
        
        dayToShow.style.display = "block";
    }
    
    // num0, num1, num2, num3 클릭 이벤트 처리
    num0.addEventListener("click", function() {
        showDay(day0);
    });
    num1.addEventListener("click", function() {
        showDay(day1);
    });
    num2.addEventListener("click", function() {
        showDay(day2);
    });
    num3.addEventListener("click", function() {
        showDay(day3);
    });

    const infoImg = document.querySelector(".infoImg");  // info 이미지
    const player = document.querySelector(".player");    // player div

    // infoImg 클릭 시 player 열기/닫기 토글
    infoImg.addEventListener("click", function(event) {
        event.stopPropagation(); // infoImg 클릭 시 player 외부 클릭 이벤트 전파 방지
        player.classList.toggle("visible"); // player의 visible 클래스 토글
    });

    // player 외부 클릭 시 player 숨기기
    document.addEventListener("click", function(event) {
        // 클릭한 영역이 player와 infoImg가 아니면 player 숨기기
        if (!player.contains(event.target) && event.target !== infoImg) {
            player.classList.remove("visible"); // player 숨기기
        }
    });

    // player 내부 클릭 시 이벤트 전파 방지
    player.addEventListener("click", function(event) {
        event.stopPropagation();  // player 내부 클릭 시 이벤트 전파 방지
    });
});
