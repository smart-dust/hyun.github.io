import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth();
const loginBtn = document.getElementById('admin-auth-btn');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // 로그인 상태: 관리자 페이지로 연결
        loginBtn.textContent = "관리자";
        loginBtn.href = "admin.html";
    } else {
        // 로그아웃 상태: 로그인 페이지로 연결
        loginBtn.textContent = "Login";
        loginBtn.href = "login.html";
    }
});
