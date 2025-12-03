const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const playBtn = document.getElementById('playBtn');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('scoreDisplay');
const scoreElement = document.getElementById('score');

let score = 0;
let gameActive = true;
const maxScore = 12;
const targetScore = 4;

// Bắt đầu game
playBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    createTargets();
});

// Tạo các mục tiêu
function createTargets() {
    const numTargets = 6;
    
    for (let i = 0; i < numTargets; i++) {
        setTimeout(() => {
            createTarget();
        }, i * 500);
    }
}

function createTarget() {
    if (!gameActive) return;
    
    const target = document.createElement('div');
    target.className = 'target';
    
    // Vị trí ngẫu nhiên
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100) + 100;
    
    target.style.left = x + 'px';
    target.style.top = y + 'px';
    
    // Thêm animation delay ngẫu nhiên
    const delay = Math.random() * 2;
    target.style.animationDelay = delay + 's';
    
    // Xử lý click
    target.addEventListener('click', () => {
        if (score < targetScore && gameActive) {
            score++;
            scoreElement.textContent = score;
            target.classList.add('clicked');
            
            setTimeout(() => {
                target.remove();
            }, 500);
            
            // Tạo mục tiêu mới
            if (score < targetScore) {
                setTimeout(() => {
                    createTarget();
                }, 300);
            } else {
                // Đạt 4 điểm, vô hiệu hóa các mục tiêu
                disableAllTargets();
                scoreDisplay.classList.add('completed');
            }
        }
    });
    
    gameArea.appendChild(target);
}

function disableAllTargets() {
    gameActive = false;
    const targets = document.querySelectorAll('.target');
    targets.forEach(target => {
        target.classList.add('disabled');
    });
}

// Xử lý click vào điểm số khi đạt 4/12
scoreDisplay.addEventListener('click', () => {
    if (score >= targetScore) {
        window.location.href = 'birthday.html';
    }
});

