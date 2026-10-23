/* ---------- Background Cosmic Stars Generator ---------- */
const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
  const s = document.createElement("div");
  s.className = "star";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.setProperty("--d", 2 + Math.random() * 5 + "s");
  s.style.animationDelay = Math.random() * 5 + "s";
  if (Math.random() > 0.94) s.classList.add("bright");
  stars.appendChild(s);
}

/* ---------- Audio Setup (.ogg Support) ---------- */
const voiceAudio = new Audio("voice-note.ogg");

/* ---------- Full-Screen Pages Navigation ---------- */
const pageButtons = document.querySelectorAll(".interactive-star");  
const pages = document.querySelectorAll(".page");

function openPage(id) {
  const page = document.getElementById(id);
  if (page) {
    page.classList.add("active");

    // Automatically trigger the audio if the user navigates to the Voice page
    if (id === "voice") {
      voiceAudio.currentTime = 0;
      voiceAudio
        .play()
        .catch((e) => console.log("Autoplay context interaction handled."));
    }

    // Completely reset and restart the romantic quiz sequence whenever opened
    if (id === "ifwewere") {
      romanticQuestionIndex = 0;
      document.getElementById("romanticQuizBox").style.display = "block";
      document.getElementById("romanticEnding").style.display = "none";
      showRomanticQuestion();
    }
  }
}

function closeAllPages() {
  pages.forEach((p) => p.classList.remove("active"));
  document.getElementById("modal").classList.remove("active");
  voiceAudio.pause(); // Comfort pause when returning to the cosmos view
}

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // If the targeted feature star is structurally locked, dynamically re-route to the countdown lock page
    if (button.classList.contains("locked") && button.id === "futureStar") {
      openPage("future");
      return;
    }
    const id = button.dataset.page;
    openPage(id);
  });
});

document.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", closeAllPages);
});

/* ---------- Letters Database Archive ---------- */
const letters = {
  miss: {
    title: "Open When You Miss Me",
    hint: "something waiting for you",
    text: [
      "If you're reading this, I guess you miss me a little or maybe too much.",
      "So imagine I'm sitting right next to you for a moment. No distance. No waiting. Just us.",
      "Until I can actually be there, let this little letter remind you that you're loved by ME as it will always be,btw i can feel it when you miss me i have super power lol, well it might be the mommy's power lol.",
      "so BABY I MISS YOU AS WELL ALL THE TIME, keep that in mind ok honey? love you cutie more than you can imagine",
    ],
  },
  badDay: {
    title: "Open when you're having a bad day",
    hint: "read this slowly",
    text: [
      "First of all, breathe.",
      "Whatever happened today doesn't get to define your entire day, and definitely doesn't define you.",
      "Be gentle with yourself tonight. Tomorrow is another day, you are the strongest person i've ever seen, i know the world is a rough place for you, isn't it baby?.",
      "but i know you can do it, you did it before and you can do it over again,you inspire me in life, you are my tiny super hero",
      "i've always been amazied of how strong you are,when i feel weak and hopless you are always the first one who cross my mind",
      "is'nt it cute that you are the strongest version in someone's eyes?(my eyes only) hehe",
      "its ok baby, don't stress it out,can i tell  you something? tbh i'm always worried abt you if you're having a bad day or you just sitting and overthinking by yourself i just want you to be okay and happy",
      "you know that you can always come to me and tell me abt everything even if you think it's too silly right? bcz it will never be silly to me, i want to share that side with you, take care sweetie. ",
    ],
  },
  sleep: {
    title: "Open when you can't sleep",
    hint: "for late nights",
    text: [
      "It's late isn't it?. You're probably overthinking something or thinking about me lol.",
      "So stop trying to solve everything tonight. Some things can wait until morning.",
      "Close your eyes. Imagine the same sky above both of us, we share the same sky we look at, that's cute",
      "i know you are a grown big ass man but i mean let that pretty brain rest baby boy, mommy won't be happy at all,she just wants her baby to sleep well ok?",
      "nothing worth your thinking except me lol,why not telling your mommy abt what keep your mind busy at night? do it my boy, i'm here for you any moment i will never be anywhere else, whenever you need me i'm right where i should be.",
    ],
  },
  alone: {
    title: "Open when you feel alone",
    hint: "look up at the sky",
    text: [
      "Distance can make things feel bigger than they really are.",
      "But even when I'm not physically there, you're still somewhere in my thoughts,if you feeling alone then i feel that too,bcz you can't be alone when i exist ok?if you feel alone then call me idiot, love you xoxo.",
    ],
  },
  smile: {
    title: "Open when you need to smile",
    hint: "this one is silly",
    text: [
      "Okay, this letter has one job.",
      "Make you smile.",
      "And if it didn't work, I'm officially requesting one stupid joke from you lol, actually idk if it's gonna make you smile or feel shy, but whenever i feel sad i remember all the times when you barked,just thinking abt it makes me tearing up, i can't stop laughing",
      "that's cute tho, you're like a baby omg,i still remeber alot also i don't wanna make you feel shy behind screens,i know my own way lol",
      "tell me did it work or not ok? hehe.",
    ],
  },
  proud: {
    title: "Open when you're not proud of yourself",
    hint: "don't skip this one",
    text: [
      "Stop for a second and actually let yourself be proud.",
      "You don't have to immediately move on to the next thing. You did something worth celebrating.",
      "And yes, I'm proud of you too, i'm proud of you of who you become, can't you see yourself? a faboulas baby,i'm proud of you cuz i have nothing but to be proud of my soulmate.",
      "i'm proud of you when you feel alone in this big world,i'm proud of you when feel everything against you,i'm proud of you when you didn't do a thing in your day but chilling,i'm proud of you when feel weak and helpless,i'm proud of you every single day and i will always be",
      "i just can't belive you're mine awwwww you have very pure heart and it makes my heart melt",
      "i pray everyday for you,i hope they're working lol,i want to see you on top, acheiving your goals,dreams, and to get every single thing you wanted,i want to be in your life to see you happy,i will always support you whatever it takes.",
    ],
  },
  us: {
    title: "Open when you want to remember us",
    hint: "go back to the beginning",
    text: [
      "Go back to the beginning.",
      "24.10.2024.",
      "That's where our little universe started.",
      "And somehow, we're still here, umm i mean it was not easy, i don't want to get into details,but i think our story it's so special,even the date is specil isn't it? i mean 24/10/24 like wow omg, baby we're meant to be,god only knows.",
      "do you think it's just a random moments when i have a nightmares about you?, i know what my heart is telling me baby, too much circumstances happend probably you didn't noticed but i did, i was amazied like hold on no way this is real, we'er interlinked honey, you can't escape, ain't no fucking way.",
      "we have the same mindest,same interests,same morals,like everything is so real,i love us,idk but when i look around i see everybody's a creep,but i think abt you omg,you're like different,like no my man would never,you got me? best man ever haha,god gave me you as a gift,as an apology to my heart and i'm so thankful for that blessing, he was like ok take this man, he's the greatest one i promise lol",
      "sometimes i feel helpless bcz i just want to kiss you and i can't do that physiclly,but the idea of us being together one day makes me calm down,i hope we can achieve everything we wanted and look at it with proud eyes, i trust you, and us,it's just this phase needs us to be open minded and to understand eachother,you so cutieee i love you so so soooooo much omgg ",
    ],
  },
  
};

function renderCards(containerId, data, lockedKey = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  Object.entries(data).forEach(([key, item], index) => {
    const card = document.createElement("button");
    card.className = "letter-card" + (key === lockedKey ? " locked-card" : "");
    card.dataset.letter = key;
    card.innerHTML = `
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="card-star">✦</span>
      <span class="card-title">${item.title}</span>
      <span class="card-hint">${item.hint}</span> 
    `;
    container.appendChild(card);
  });
}

// Initialise the native structured archive grid
renderCards("lettersGrid", letters, "future");

/* ---------- Full Overlay Modal Controller ---------- */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.addEventListener("click", (event) => {
  const card = event.target.closest(".letter-card");
  if (!card || card.classList.contains("locked-card")) return;

  const item = letters[card.dataset.letter];
  if (!item) return;

  modalTitle.textContent = item.title;
  modalText.innerHTML = item.text.map((t) => `<p>${t}</p>`).join("");
  modal.classList.add("active");
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.classList.remove("active");
});
/* ---------- Game Logic: How Well Do You Know Us ---------- */
const questions = [
  {
    q: "When did our little universe begin?",
    answers: ["24.10.2024", "24.10.2025", "14.10.2024", "10.24.2026"],
    correct: 0,
  },
  {
    q: "What does our sky say?",
    answers: ["Same sky.", "Same city.", "Same time.", "Same place."],
    correct: 0,
  },
  {
    q: "Where is our universe?",
    answers: [
      "Somewhere between us.",
      "On Mars.",
      "In a notebook.",
      "Nowhere.",
    ],
    correct: 0,
  },
];
let questionIndex = 0;
let answered = false;
function showQuestion() {
  const q = questions[questionIndex];
  const qElem = document.getElementById("gameQuestion");
  if (!qElem) return;
  qElem.textContent = q.q;
  const answers = document.getElementById("gameAnswers");
  const result = document.getElementById("gameResult");
  answers.innerHTML = "";
  result.textContent = "";
  answered = false;
  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = answer;
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      if (i === q.correct) {
        btn.classList.add("correct");
        result.textContent = "You got it. ✦";
      } else {
        btn.classList.add("wrong");
        result.textContent = "Not quite... try the next one.";
      }
    });
    answers.appendChild(btn);
  });
}
showQuestion();
const nextQBtn = document.getElementById("nextQuestion");
if (nextQBtn) {
  nextQBtn.addEventListener("click", () => {
    questionIndex = (questionIndex + 1) % questions.length;
    showQuestion();
  });
}
/* ---------- Romantic Interactive Quiz Sequences (If We Were) ---------- */
const romanticQuestions = [
  {
    q: "If we were cats in an imaginary world, what would we do?",
    answers: [
      "Napping together under the same patch of warm cosmic sunlight 🐾",
      "Chasing the shooting stars across the rooftops ✨",
      "Purring softly while interlinking our tails forever 🌙",
    ],
  },
  {
    q: "If we were celestial bodies roaming the deep dark space...",
    answers: [
      "I would be a planet, orbiting only around you as my warm sun 🪐",
      "We would be binary stars, dancing around each other eternally ⭐",
      "We would collapse together to create a brand new beautiful galaxy 🌌",
    ],
  },
  {
    q: "If we were colors painted on a canvas of life...",
    answers: [
      "We would blend perfectly to create the most gorgeous twilight sky 🌆",
      "We would stay side-by-side, making the painting look complete 🎨",
      "We would splash onto each other to brighten up the whole dark room 💖",
    ],
  },
];
let romanticQuestionIndex = 0;
function showRomanticQuestion() {
  const current = romanticQuestions[romanticQuestionIndex];
  const qElem = document.getElementById("romanticQuestion");
  const answersContainer = document.getElementById("romanticAnswers");
  if (!qElem || !answersContainer) return;
  qElem.textContent = current.q;
  answersContainer.innerHTML = "";
  current.answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = ans;
    btn.addEventListener("click", () => {
      romanticQuestionIndex++;
      if (romanticQuestionIndex < romanticQuestions.length) {
        showRomanticQuestion();
      } else {
        // Complete structural switch to the grand conclusion sequence
        document.getElementById("romanticQuizBox").style.display = "none";
        document.getElementById("romanticEnding").style.display = "block";
      }
    });
    answersContainer.appendChild(btn);
  });
}
/* ---------- Dynamic Real-Time Countdown & Lock Release Engine ---------- */
const targetDate = new Date("October 24, 2026 00:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;
  const countdownDisplay = document.getElementById("countdownDisplay");
  const futureStar = document.getElementById("futureStar");
  const lockedContent = document.getElementById("futureLockedContent");
  const unlockedContent = document.getElementById("futureUnlockedContent");
  // State-Triggered Unlock: When the target date-time threshold passes
  if (difference <= 0) {
    if (countdownDisplay) countdownDisplay.textContent = "UNLOCKED ✦";
    if (futureStar) futureStar.classList.remove("locked");
    if (lockedContent) lockedContent.style.display = "none";
    if (unlockedContent) unlockedContent.style.display = "block";
    return true;
  }
  // Time metrics calculations
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  if (countdownDisplay) {
    countdownDisplay.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
  }
  return false;
}
// Polling interval executor running once per second
const countdownInterval = setInterval(() => {
  const isUnlocked = updateCountdown();
  if (isUnlocked) {
    clearInterval(countdownInterval);
  }
}, 1000);
updateCountdown();

/* ---------- Global Escape Key Handshake ---------- */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllPages();
});
