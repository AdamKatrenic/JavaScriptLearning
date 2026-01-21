const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

const countLabel = document.getElementById('countLabel');

let counter = 0;

function updateDisplay() {
    countLabel.textContent = counter;
}

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
});

increaseBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

updateDisplay();