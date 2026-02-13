// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
    if (!config.valentineName) config.valentineName = "My Love";
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    validateConfig();

    // Title
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;

    // Question 1
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;

    // Question 2
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('yesBtn2').textContent = config.questions.second.yesBtn;
    document.getElementById('noBtn2').textContent = config.questions.second.noBtn;

    // Question 3
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Question 4
    document.getElementById('question4Text').textContent = config.questions.fourth.text;
    document.getElementById('yesBtn4').textContent = config.questions.fourth.yesBtn;
    document.getElementById('noBtn4').textContent = config.questions.fourth.noBtn;

    createFloatingElements();
    setupMusicPlayer();
});

// Show next "page"
function showNextQuestion(num) {
    document.querySelectorAll('.question-section').forEach(q => {
        q.classList.add('hidden');
    });
    document.getElementById(`question${num}`).classList.remove('hidden');
}

// Move "No" button (teasing)
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Final celebration
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById('celebration').classList.remove('hidden');

    document.getElementById('celebrationTitle').textContent = 
        "Thank you for being my Girlfriend! 💖";
}

// Floating hearts
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    config.floatingEmojis.hearts.forEach(h => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = h;
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animationDuration = 10 + Math.random() * 20 + 's';
        container.appendChild(div);
    });
}

// Music
function setupMusicPlayer() {
    if (!config.music.enabled) return;
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    if (config.music.autoplay) bgMusic.play().catch(() => {});
}
