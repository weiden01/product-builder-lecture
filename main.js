const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const drawButton = document.querySelector('.draw-button');

drawButton.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const lottoNumber = document.createElement('div');
            lottoNumber.classList.add('lotto-number');
            lottoNumber.textContent = number;
            lottoNumber.style.transform = 'scale(0)';
            lottoNumbersContainer.appendChild(lottoNumber);
            setTimeout(() => {
                lottoNumber.style.transform = 'scale(1)';
            }, 100);
        }, index * 300);
    });
});