document.addEventListener('DOMContentLoaded', function() {
    const isAdmin = sessionStorage.getItem('isAdmin');
    const authBtn = document.getElementById('admin-auth-btn');
    const adminFab = document.getElementById('admin-fab');

    if (isAdmin === 'true') {
        // [관리자 상태]
        if (authBtn) {
            authBtn.innerText = "Logout";
            authBtn.onclick = () => {
                sessionStorage.removeItem('isAdmin'); // 세션 삭제
                alert("로그아웃 되었습니다.");
                location.reload();
            };
        }
        if (adminFab) adminFab.style.display = "block";
    } else {
        // [일반 사용자 상태]
        if (authBtn) {
            authBtn.innerText = "Login";
            authBtn.href = "login.html";
        }
        if (adminFab) adminFab.style.display = "none";
    }
});
// [햄버거 메뉴 자동 생성 및 동작 스크립트]
document.addEventListener('DOMContentLoaded', function() {
    // 1. 햄버거 버튼 생성 (HTML 수정 없이 버튼 추가)
    if (!document.querySelector('.hamburger-menu')) {
        const hamBtn = document.createElement('button');
        hamBtn.className = 'hamburger-menu';
        hamBtn.innerHTML = '☰';
        
        // 로고 뒤에 버튼을 붙입니다.
        const navLeft = document.querySelector('.nav-left');
        if (navLeft) {
            navLeft.after(hamBtn);
        }
    }

    // 2. 버튼 클릭 시 메뉴 토글
    const hamBtn = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamBtn && navMenu) {
        hamBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show-mobile');
        });
    }
});
