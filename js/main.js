/* 모든 페이지 공통 등장 애니메이션 스크립트 (main.js) */
document.addEventListener("DOMContentLoaded", () => {
    // 1. 요소가 화면에 15% 정도 보일 때 애니메이션을 시작하도록 설정
    const observerOptions = {
        threshold: 0.15 
    };

    // 2. 요소가 감지되었을 때 실행할 규칙 정의
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 화면에 들어오면 'visible' 클래스를 태그에 자동으로 붙여줌
                entry.target.classList.add("visible");
                // 한 번 나타났으면 다시 감시하지 않음 (성능 최적화)
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // 3. 애니메이션을 적용할 대상들을 한꺼번에 지정
    // (카드 박스, 지도 섹션, 히어로 문구, 그리고 앞으로 쓸 'fade-in' 클래스들)
    const animateElements = document.querySelectorAll('.section-box, .map-section, .hero-content, .fade-in');

    // 4. 각각의 요소들을 감시 시작!
    animateElements.forEach((el) => {
        observer.observe(el);
    });
});
