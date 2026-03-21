/* js/main.js */
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 1. 카드 섹션: 왼쪽부터 차례대로 또로록 등장
                if (entry.target.classList.contains('section-container')) {
                    const cards = entry.target.querySelectorAll('.section-box');
                    cards.forEach((card, index) => {
                        setTimeout(() => card.classList.add('visible'), index * 150);
                    });
                } 
                // 2. 히어로 섹션: 글자 먼저 나오고 버튼은 0.4초 뒤에 팝!
                else if (entry.target.classList.contains('hero-content')) {
                    entry.target.classList.add('visible');
                    const heroBtn = entry.target.querySelector('.hero-btn');
                    if(heroBtn) {
                        setTimeout(() => heroBtn.classList.add('pop'), 400);
                    }
                }
                // 3. 기타 (지도 등): 그냥 스르륵 등장
                else {
                    entry.target.classList.add('visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.section-container, .map-section, .hero-content');
    animateElements.forEach((el) => observer.observe(el));
});
