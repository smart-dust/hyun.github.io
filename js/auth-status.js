import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAp8majwjPetRnK5u9f_agOWEcW2_veBdw",
    authDomain: "dhchurch-cf85f.firebaseapp.com",
    projectId: "dhchurch-cf85f",
    storageBucket: "dhchurch-cf85f.firebasestorage.app",
    messagingSenderId: "718998916531",
    appId: "1:718998916531:web:6d5641ed5a404c2ee0cfc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authBtn = document.getElementById('admin-auth-btn');
const adminFab = document.getElementById('admin-fab');

// 로그인 상태 감지
onAuthStateChanged(auth, (user) => {
    if (user) {
        // [관리자 상태]
        if (authBtn) {
            authBtn.innerText = "Logout";
            authBtn.href = "#";
            authBtn.onclick = (e) => {
                e.preventDefault();
                if(confirm("로그아웃 하시겠습니까?")) {
                    signOut(auth).then(() => location.reload());
                }
            };
        }
        if (adminFab) adminFab.style.display = "block";
    } else {
        // [일반 사용자 상태]
        if (authBtn) {
            authBtn.innerText = "Login";
            authBtn.href = "login.html";
            authBtn.onclick = () => {
                // 로그인 직전의 현재 페이지 주소를 메모리에 저장 (404 방지)
                sessionStorage.setItem('redirectURL', window.location.href);
            };
        }
        if (adminFab) adminFab.style.display = "none";
    }
});
if (adminFab) {
    adminFab.style.setProperty('display', 'block', 'important');
}
