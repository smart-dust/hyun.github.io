<script type="module">
    // 1. Firebase 라이브러리 불러오기
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

    // 2. 사용자가 제공한 진짜 서버 설정값 (열쇠)
    const firebaseConfig = {
        apiKey: "AIzaSyAp8majwjPetRnK5u9f_agOWEcW2_veBdw",
        authDomain: "dhchurch-cf85f.firebaseapp.com",
        projectId: "dhchurch-cf85f",
        storageBucket: "dhchurch-cf85f.firebasestorage.app",
        messagingSenderId: "718998916531",
        appId: "1:718998916531:web:6d5641ed5a404c2ee0cfc6",
        measurementId: "G-KKT2TX7SZ9"
    };

    // 3. Firebase 초기화
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // 4. 로그인 상태 감지 및 화면 UI 변경
    onAuthStateChanged(auth, (user) => {
        const authBtn = document.getElementById('admin-auth-btn'); // Login/Logout 버튼
        const adminFab = document.getElementById('admin-fab');     // 글쓰기(＋) 버튼

        if (user) {
            // [관리자가 로그인한 상태]
            console.log("관리자 로그인 성공:", user.email);
            if (authBtn) {
                authBtn.innerText = "Logout";
                authBtn.href = "#"; // 페이지 이동 방지
                authBtn.onclick = (e) => {
                    e.preventDefault();
                    if(confirm("로그아웃 하시겠습니까?")) {
                        signOut(auth).then(() => {
                            alert("로그아웃 되었습니다.");
                            location.reload();
                        });
                    }
                };
            }
            // 글쓰기 버튼 보여주기
            if (adminFab) adminFab.style.display = "block";
            
            // 만약 notice.html에 'write-section'이 있다면 그것도 보여주기
            const writeSection = document.getElementById('write-section');
            if (writeSection) writeSection.style.display = "block";

        } else {
            // [로그인이 안 된 상태]
            console.log("로그인되지 않음");
            if (authBtn) {
                authBtn.innerText = "Login";
                authBtn.href = "login.html";
                authBtn.onclick = () => {
                    // 로그인 후 다시 이 페이지로 돌아오기 위해 현재 주소 저장
                    sessionStorage.setItem('redirectURL', window.location.href);
                };
            }
            // 글쓰기 버튼 숨기기
            if (adminFab) adminFab.style.display = "none";
        }
    });
</script>
