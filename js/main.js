// js/main.js - 수정된 통합 코드
document.addEventListener("DOMContentLoaded", () => {
    // 1. 카드 애니메이션 (IntersectionObserver)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-box').forEach(sec => observer.observe(sec));

    // 2. Smooth Scroll 로직
    document.querySelectorAll('a[href^="about.html#"], a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                const elementRect = targetElement.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const middleOffset = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
                window.scrollTo({ top: middleOffset, behavior: 'smooth' });
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // 3. 로그인 상태 관리
    const isAdmin = sessionStorage.getItem('isAdmin');
    const authBtn = document.getElementById('admin-auth-btn');
    const adminFab = document.getElementById('admin-fab');

    if (authBtn) {
        if (isAdmin === 'true') {
            authBtn.innerText = "Logout";
            authBtn.onclick = (e) => {
                e.preventDefault();
                sessionStorage.removeItem('isAdmin');
                location.reload();
            };
            if (adminFab) adminFab.style.display = "block";
        } else {
            authBtn.innerText = "Login";
            authBtn.href = "login.html";
            if (adminFab) adminFab.style.display = "none";
        }
    }
});
