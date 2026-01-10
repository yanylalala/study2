const recommendButton = document.getElementById('recommend-button');
const resultDiv = document.getElementById('result');
const themeToggle = document.getElementById('theme-toggle');

// 메뉴 리스트
const menus = [
    "김치찌개", "된장찌개", "삼겹살", "치킨", "피자", 
    "햄버거", "떡볶이", "초밥", "돈가스", "제육볶음", 
    "파스타", "짜장면", "짬뽕", "순대국", "칼국수",
    "족발/보쌈", "비빔밥", "김밥", "샌드위치", "샐러드",
    "마라탕", "쌀국수", "카레", "스테이크", "회/사시미"
];

// Theme Toggle Logic (Preserved)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Recommendation Logic
recommendButton.addEventListener('click', () => {
    // 애니메이션 효과를 위해 잠시 로딩 표시
    resultDiv.style.opacity = 0;
    resultDiv.textContent = "고르는 중...";
    resultDiv.style.opacity = 1;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIndex];
        resultDiv.textContent = selectedMenu;
        
        // 간단한 팝 효과
        resultDiv.animate([
            { transform: 'scale(0.8)', opacity: 0.5 },
            { transform: 'scale(1.1)', opacity: 1 },
            { transform: 'scale(1)', opacity: 1 }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }, 300);
});