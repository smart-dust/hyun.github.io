/* js/main.js - 필요한 것만 딱 움직이게 */
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { threshold: 0.2 }; // 20% 보일 때 작동

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 카드 컨테이너가 보이면 내부 카드들만 0.1초 간격으로 등장
                const cards = entry.target.querySelectorAll('.section-box');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100); 
                });
                observer.unobserve(entry.target); // 한 번 실행 후 끝
            }
        });
    }, observerOptions);

    // 카드들이 들어있는 'section-container' 하나만 감시합니다.
    const container = document.querySelector('.section-container');
    if(container) observer.observe(container);
});
document.addEventListener("DOMContentLoaded", () => {
    // 1. 감시 옵션 설정 (섹션이 15% 정도 보일 때 실행)
    const observerOptions = { threshold: 0.15 }; 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 2. 화면에 들어오면 visible 클래스 추가
                entry.target.classList.add('visible');
                // 3. 한 번 나타난 뒤에는 감시 종료 (성능 최적화)
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // 4. 모든 .section-box 요소들을 찾아서 감시 시작
    const sections = document.querySelectorAll('.section-box');
    sections.forEach(sec => observer.observe(sec));
});
