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
// [Smooth Scroll to Center] 메뉴 클릭 시 섹션을 화면 중앙으로!
document.querySelectorAll('a[href^="about.html#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const targetId = href.includes('#') ? href.split('#')[1] : null;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault(); // 기본 점프 동작 방지

            // 대상 섹션의 위치 계산
            const elementRect = targetElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            
            // 핵심: (섹션 위치) - (화면 높이의 절반) + (섹션 높이의 절반) = 화면 중앙
            const middleOffset = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

            window.scrollTo({
                top: middleOffset,
                behavior: 'smooth'
            });
            
            // URL 바에 ID 표시 (선택사항)
            history.pushState(null, null, `#${targetId}`);
        }
    });
});
// [추가] 페이지 로드 시 URL에 #이 있으면 중앙으로 스크롤
window.addEventListener('load', () => {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // # 제외한 ID만 추출
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // 브라우저의 기본 상단 이동을 무시하고 약간의 지연 후 중앙 이동
            setTimeout(() => {
                const elementRect = targetElement.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const middleOffset = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

                window.scrollTo({
                    top: middleOffset,
                    behavior: 'smooth'
                });
            }, 100); // 페이지 로딩 시간을 고려한 짧은 대기
        }
    }
});
