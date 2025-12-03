// Phát nhạc chúc mừng sinh nhật
window.addEventListener('load', () => {
    const audio = document.getElementById('birthdayMusic');
    audio.volume = 0.5; // Giảm âm lượng một chút
    
    // Thử phát nhạc (có thể cần tương tác người dùng trước)
    const playMusic = () => {
        audio.play().catch(error => {
            console.log('Cần tương tác người dùng để phát nhạc');
        });
    };
    
    // Thử phát ngay
    playMusic();
    
    // Nếu không được, phát khi người dùng tương tác
    document.addEventListener('click', playMusic, { once: true });
    document.addEventListener('touchstart', playMusic, { once: true });
    
    // Tạo thêm confetti động
    createConfetti();
});

function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    const container = document.querySelector('.birthday-container');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 15 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 200);
    }
}

