function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    if (principal === '' || rate === '' || time === '') {
        alert('Please fill in all fields');
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('result').textContent = interest.toFixed(2);
}