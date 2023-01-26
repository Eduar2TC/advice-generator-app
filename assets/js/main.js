const url = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('.advice_title');
const adviceContent = document.querySelector('.advice_content');
const diceButton = document.querySelector('.dice-container');

const updateAdvice = (data) => {
    const { id, advice } = data.slip; //destructuring
    adviceId.innerHTML = `<h1>ADVICE #${id}</h1>`;
    adviceContent.innerHTML = `<p>"${advice}"</p>`;
}

diceButton.addEventListener('click', async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        updateAdvice(data);
    } catch (error) {
        console.error(error);
    }
});