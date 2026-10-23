const loveHeartWords = [
  "بحبك",
  "I Love You",
  "Je t’aime",
  "Te amo",
  "Ti amo",
  "Seni seviyorum",
  "Ich liebe dich",
  "Я тебя люблю",
  "愛してる",
  "사랑해",
  "我爱你",
  "دوستت دارم",
  "Ik hou van jou",
  "Kocham cię",
  "Te iubesc",
  "Mahal kita",
  "Aku cinta kamu",
  "Σ' αγαπώ",
  "أحبك",
  "Te quiero",
  "Ngiyakuthanda",
  "Volim te",
  "Ljubim te",
  "T'estimo",
  "Eu te amo",
  "אהבה",
  "Jeg elsker dig",
  "Szeretlek",
  "愛ني",
  "Amour",
];

function buildHeartWords() {
  const container = document.getElementById("heartWords");
  if (!container || container.children.length > 0) return;

  // 🌟 تم تكبير الأبعاد الإحداثية ونقلها نحو الأطراف بحسابات هندسية دقيقة للحفاظ على شكل القلب وتكبير حجمه
  const heartMap = [
    // القوس العلوي الأيسر (توسيع وتعميق المنحنى)
    { x: 32, y: 12 },
    { x: 18, y: 18 },
    { x: 10, y: 30 },
    // القوس العلوي الأيمن (توسيع وتعميق المنحنى)
    { x: 68, y: 12 },
    { x: 82, y: 18 },
    { x: 90, y: 30 },
    // الجوانب الخارجية العريضة للقلب
    { x: 6, y: 45 },
    { x: 10, y: 60 },
    { x: 20, y: 72 },
    { x: 94, y: 45 },
    { x: 90, y: 60 },
    { x: 80, y: 72 },
    // الجزء السفلي المدبب الطويل
    { x: 33, y: 82 },
    { x: 50, y: 94 },
    { x: 67, y: 82 },
    // توزيع وتعبئة الجوف الداخلي الممتد بانتظام ممتاز وبألوان بيضاء نقية
    { x: 50, y: 18 },
    { x: 40, y: 28 },
    { x: 60, y: 28 },
    { x: 26, y: 40 },
    { x: 44, y: 40 },
    { x: 56, y: 40 },
    { x: 74, y: 40 },
    { x: 24, y: 55 },
    { x: 38, y: 55 },
    { x: 50, y: 55 },
    { x: 62, y: 55 },
    { x: 76, y: 55 },
    { x: 36, y: 70 },
    { x: 64, y: 70 },
    { x: 50, y: 75 },
  ];

  heartMap.forEach((pos, index) => {
    if (index >= loveHeartWords.length) return;

    const word = document.createElement("span");
    word.className = "heart-word";
    word.textContent = loveHeartWords[index];

    word.style.left = `${pos.x}%`;
    word.style.top = `${pos.y}%`;
    word.style.animationDelay = `${index * 45}ms`;

    container.appendChild(word);
  });

  setTimeout(
    () => {
      document.getElementById("love-heart")?.classList.add("beating");
    },
    heartMap.length * 45 + 300,
  );
}

function setupGiftHeart() {
  const button = document.getElementById("giftButton");
  const heartPage = document.getElementById("heart-page");
  const closeButton = document.getElementById("closeHeartPage");

  if (!button || !heartPage) return;

  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (typeof closeAllPages === "function") {
      closeAllPages();
    }
    heartPage.classList.add("active");
    document.body.classList.add("heart-page-open");
    buildHeartWords();
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      heartPage.classList.remove("active");
      document.body.classList.remove("heart-page-open");
      const container = document.getElementById("heartWords");
      if (container) {
        container.innerHTML = "";
        document.getElementById("love-heart")?.classList.remove("beating");
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupGiftHeart);
} else {
  setupGiftHeart();
}
