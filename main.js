const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the saved theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
    }
};

// Function to toggle the theme and save the preference
const toggleTheme = () => {
    let currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    } else {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    }
};

// Event listener for the toggle button
themeToggleButton.addEventListener('click', toggleTheme);

// On page load, check for a saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});


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