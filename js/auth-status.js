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
