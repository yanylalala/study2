const recommendButton = document.getElementById('recommend-button');
const resultDiv = document.getElementById('result');
const themeToggle = document.getElementById('theme-toggle');

// 메뉴 리스트 및 영어 프롬프트 매핑
const menus = [
    { name: "김치찌개", prompt: "Kimchi stew, korean food, delicious, photography", desc: "한국인의 소울 푸드! 매콤하고 칼칼한 국물로 스트레스를 날려보세요.", image: "food/Kimchi stew.jpeg" },
    { name: "된장찌개", prompt: "Doenjang jjigae, soybean paste stew, korean food, delicious", desc: "구수한 국물 맛이 일품인 집밥의 정석. 건강하고 든든한 한 끼!", image: "food/Doenjang.jpeg" },
    { name: "삼겹살", prompt: "Samgyeopsal, grilled pork belly, korean bbq, delicious", desc: "지글지글 구워지는 소리부터 맛있는 삼겹살. 소주 한 잔과 찰떡궁합!", image: "food/Samgyeopsal.jpeg" },
    { name: "치킨", prompt: "Fried chicken, crispy, delicious", desc: "겉은 바삭, 속은 촉촉! 오늘 밤은 치느님과 함께하세요.", image: "food/Fried chicken.jpeg" },
    { name: "피자", prompt: "Pizza, pepperoni, melted cheese, delicious", desc: "쭈욱 늘어나는 치즈의 유혹. 다양한 토핑으로 입안 가득 즐거움을!", image: "food/Pizza.jpeg" },
    { name: "햄버거", prompt: "Hamburger, juicy patty, lettuce, tomato, delicious", desc: "한 손에 꽉 차는 풍성한 맛. 바쁜 일상 속 확실한 행복.", image: "food/Hamburger.jpeg" },
    { name: "떡볶이", prompt: "Tteokbokki, spicy rice cake, korean food, red sauce", desc: "매콤달콤한 소스와 쫄깃한 떡의 조화. 국민 간식의 절대 강자!", image: "food/Tteokbokki.jpeg" },
    { name: "초밥", prompt: "Sushi platter, fresh fish, japanese food", desc: "신선한 재료 본연의 맛. 깔끔하고 고급스러운 한 끼를 원한다면.", image: "food/Sushi platter.jpeg" },
    { name: "돈가스", prompt: "Tonkatsu, pork cutlet, japanese food, crispy", desc: "바삭한 튀김옷 속 부드러운 고기. 남녀노소 누구나 좋아하는 맛.", image: "food/Tonkatsu.jpeg" },
    { name: "제육볶음", prompt: "Jeyuk bokkeum, spicy stir-fried pork, korean food", desc: "매콤한 양념이 밥도둑! 상추쌈 싸서 먹으면 꿀맛 보장.", image: "food/Jeyuk bokkeum.jpeg" },
    { name: "파스타", prompt: "Pasta, tomato sauce, basil, italian food", desc: "분위기 있는 식사를 위한 최고의 선택. 소스에 따라 달라지는 다채로운 매력.", image: "food/Pasta.jpeg" },
    { name: "짜장면", prompt: "Jajangmyeon, noodles in black bean sauce, korean chinese food", desc: "후루룩 넘어가는 감칠맛. 언제 먹어도 질리지 않는 맛.", image: "food/Jajangmyeon.jpeg" },
    { name: "짬뽕", prompt: "Jjamppong, spicy seafood noodle soup, korean chinese food", desc: "얼큰한 국물과 푸짐한 해물. 속 풀고 싶을 때 강력 추천!", image: "food/Jjamppong.jpeg" },
    { name: "순대국", prompt: "Sundae-guk, korean blood sausage soup, delicious", desc: "뜨끈한 국밥 한 그릇의 위로. 깊고 진한 맛으로 몸보신하세요.", image: "food/Sundae-guk.jpeg" },
    { name: "칼국수", prompt: "Kalguksu, knife-cut noodles, korean food, warm soup", desc: "비 오는 날 생각나는 따뜻한 국물. 쫄깃한 면발이 매력적.", image: "food/Kalguksu.jpeg" },
    { name: "족발/보쌈", prompt: "Jokbal, bossam, braised pork trotters, korean food", desc: "야식의 제왕. 쫄깃한 족발과 부드러운 보쌈, 당신의 선택은?", image: "food/Jokbal, bossam.jpeg" },
    { name: "비빔밥", prompt: "Bibimbap, mixed rice with vegetables, korean food, colorful", desc: "다양한 나물과 고추장의 조화. 건강하고 맛있는 한 그릇.", image: "food/Bibimbap.jpeg" },
    { name: "김밥", prompt: "Gimbap, korean seaweed rice roll, delicious", desc: "간편하지만 영양 만점. 소풍 가는 기분으로 즐겨보세요.", image: "food/Gimbap.jpeg" },
    { name: "샌드위치", prompt: "Sandwich, fresh vegetables, ham, cheese", desc: "신선한 재료로 가득 채운 산뜻함. 가볍고 건강하게 즐기세요.", image: "food/Sandwich.jpeg" },
    { name: "샐러드", prompt: "Fresh salad, vegetables, healthy food, colorful", desc: "몸이 가벼워지는 프레시한 선택. 다이어트 중이라면 강추!", image: "food/Fresh salad.jpeg" },
    { name: "마라탕", prompt: "Malatang, spicy hot pot, chinese food, red soup", desc: "중독성 강한 알싸한 매운맛. 스트레스 해소에 직빵!", image: "food/Malatang.jpeg" },
    { name: "쌀국수", prompt: "Pho, vietnamese rice noodles, beef broth, herbs", desc: "진한 육수와 아삭한 숙주. 이국적인 맛의 향연.", image: "food/Pho.jpeg" },
    { name: "카레", prompt: "Curry rice, delicious, golden sauce", desc: "향긋한 카레 향이 식욕을 자극. 밥 슥슥 비벼 김치와 함께!", image: "food/Curry rice.jpeg" },
    { name: "스테이크", prompt: "Grilled steak, medium rare, delicious, restaurant", desc: "특별한 날을 위한 럭셔리한 메뉴. 입안에서 살살 녹는 육즙.", image: "food/Grilled steak.jpeg" },
    { name: "회/사시미", prompt: "Sashimi, fresh raw fish slice, japanese food", desc: "바다의 신선함을 그대로. 쫄깃한 식감과 고소한 맛.", image: "food/Sashimi.jpeg" }
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
        
        // 이미지 URL 생성
        const imageUrl = selectedMenu.image;

        // 결과 표시
        resultDiv.innerHTML = `
            <div class="menu-card">
                <img src="${imageUrl}" alt="${selectedMenu.name}" onload="this.style.opacity=1">
                <p>${selectedMenu.name}</p>
                <p class="desc-text">${selectedMenu.desc}</p>
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