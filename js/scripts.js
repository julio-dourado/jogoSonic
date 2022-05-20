const sonic = document.querySelector('.sonic');
const ball = document.querySelector('.ball');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
    sonic.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const ballPosition = ball.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','');

    console.log(sonicPosition)
    if (ballPosition <= 90 && ballPosition > 0 && sonicPosition < 84) {

        ball.style.animation = 'none';
        ball.style.left = `${ballPosition}px`;
        
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        const newLocal = './images/sonic3.png';
        sonic.src = newLocal
        sonic.width = '70px'

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump)