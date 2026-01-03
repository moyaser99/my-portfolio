// --- Typing Effect ---
const textElement = document.getElementById('typing-text');
const phrases = [
    "AI Automation Specialist",
    "RAG & Chatbot Developer",
    "Front-End Vibe Coder",
    "Creative Designer"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// --- Scroll Animation Logic (NEW) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // أضف كلاس الظهور
        } else {
            // entry.target.classList.remove('show'); // أزل التعليق إذا أردت أن تختفي العناصر مجدداً عند الصعود
        }
    });
});

// استهداف جميع العناصر التي تحمل كلاس hidden
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));