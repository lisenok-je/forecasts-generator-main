let predictions = ["Со всеми трудностями ты легко справишься", "Пусть все мечты превращаются в реальность", "Если не сейчас, то когда?", "Попробуй!", "Мечтай масштабно"];

function helperGeneration(min, max) {
    const number = Math.random() * (max - min) + min;
    return number;
}
const percent = parseInt(helperGeneration(0, 100));
const predictionRandom = Math.floor(Math.random() * (predictions.length - 0) + 0);
const predictionCard = predictions[predictionRandom];

const button = document.querySelector('.forecast-btn');
const item = document.querySelector('.forecasts');
const currentForecast = document.querySelector('#forecast-item');


button.addEventListener('click', () => {
    const prediction = document.querySelector('h1');
    const variations = document.querySelector('p');
    prediction.textContent = predictionCard;
    variations.textContent = 'Вероятность:' + percent + '%';
    const card = predictionMap(prediction, variations);
    item.prepend(card);

    function predictionMap(prediction, variations) {
        const newCard = currentForecast.content.cloneNode(true);
        newCard.querySelector('h3').textContent = prediction.textContent;
        newCard.querySelector('p').textContent = variations.textContent;
      return newCard;
    };
});

