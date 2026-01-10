const recommendButton = document.getElementById('recommend-button');
const resultDiv = document.getElementById('result');
const themeToggle = document.getElementById('theme-toggle');

// 메뉴 리스트 및 영어 프롬프트 매핑
const menus = [
    { name: "김치찌개", prompt: "Kimchi stew, korean food, delicious, photography" },
    { name: "된장찌개", prompt: "Doenjang jjigae, soybean paste stew, korean food, delicious" },
    { name: "삼겹살", prompt: "Samgyeopsal, grilled pork belly, korean bbq, delicious" },
    { name: "치킨", prompt: "Fried chicken, crispy, delicious" },
    { name: "피자", prompt: "Pizza, pepperoni, melted cheese, delicious" },
    { name: "햄버거", prompt: "Hamburger, juicy patty, lettuce, tomato, delicious" },
    { name: "떡볶이", prompt: "Tteokbokki, spicy rice cake, korean food, red sauce" },
    { name: "초밥", prompt: "Sushi platter, fresh fish, japanese food" },
    { name: "돈가스", prompt: "Tonkatsu, pork cutlet, japanese food, crispy" },
    { name: "제육볶음", prompt: "Jeyuk bokkeum, spicy stir-fried pork, korean food" },
    { name: "파스타", prompt: "Pasta, tomato sauce, basil, italian food" },
    { name: "짜장면", prompt: "Jajangmyeon, noodles in black bean sauce, korean chinese food" },
    { name: "짬뽕", prompt: "Jjamppong, spicy seafood noodle soup, korean chinese food" },
    { name: "순대국", prompt: "Sundae-guk, korean blood sausage soup, delicious" },
    { name: "칼국수", prompt: "Kalguksu, knife-cut noodles, korean food, warm soup" },
    { name: "족발/보쌈", prompt: "Jokbal, bossam, braised pork trotters, korean food" },
    { name: "비빔밥", prompt: "Bibimbap, mixed rice with vegetables, korean food, colorful" },
    { name: "김밥", prompt: "Gimbap, korean seaweed rice roll, delicious" },
    { name: "샌드위치", prompt: "Sandwich, fresh vegetables, ham, cheese" },
    { name: "샐러드", prompt: "Fresh salad, vegetables, healthy food, colorful" },
    { name: "마라탕", prompt: "Malatang, spicy hot pot, chinese food, red soup" },
    { name: "쌀국수", prompt: "Pho, vietnamese rice noodles, beef broth, herbs" },
    { name: "카레", prompt: "Curry rice, delicious, golden sauce" },
    { name: "스테이크", prompt: "Grilled steak, medium rare, delicious, restaurant" },
    { name: "회/사시미", prompt: "Sashimi, fresh raw fish slice, japanese food" }
];

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Recommendation Logic
recommendButton.addEventListener('click', () => {
    // 애니메이션 효과를 위해 잠시 로딩 표시
    resultDiv.style.opacity = 0;
    resultDiv.innerHTML = '<p>메뉴 고르는 중...</p>';
    resultDiv.style.opacity = 1;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIndex];
        
        // 이미지 URL 생성 (랜덤 시드 추가로 캐싱 방지)
        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(selectedMenu.prompt)}?width=400&height=300&seed=${Math.random()}&model=flux`;

        // 결과 표시
        resultDiv.innerHTML = `
            <div class="menu-card">
                <img src="${imageUrl}" alt="${selectedMenu.name}" onload="this.style.opacity=1">
                <p>${selectedMenu.name}</p>
            </div>
        `;
        
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

// Contact Form Toggle
const toggleContactBtn = document.getElementById('toggle-contact');
const contactForm = document.getElementById('contact-form');

toggleContactBtn.addEventListener('click', () => {
    contactForm.classList.toggle('show');
    if (contactForm.classList.contains('show')) {
        toggleContactBtn.textContent = "접기 🔼";
    } else {
        toggleContactBtn.textContent = "제휴 문의하기 🤝";
    }
});