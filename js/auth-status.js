import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth();
const loginBtn = document.getElementById('admin-auth-btn');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // [로그인 상태]
        loginBtn.textContent = "Logout";
        
        // 버튼 클릭 시 로그아웃 실행
        loginBtn.onclick = (e) => {
            e.preventDefault(); // 페이지 이동 방지
            if(confirm("로그아웃 하시겠습니까?")) {
                signOut(auth).then(() => {
                    alert("로그아웃 되었습니다.");
                    window.location.href = "index.html";
                });
            }
        };
    } else {
        // [로그아웃 상태]
        loginBtn.textContent = "Login";
        
        // 버튼 클릭 시 로그인 페이지로 이동
        loginBtn.onclick = () => {
            window.location.href = "login.html";
        };
    }
});
