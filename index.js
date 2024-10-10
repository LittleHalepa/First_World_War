let dates = {
  'Галицька битва': 1914,
  'Битва під Таненбергом (Самсонська катастрофа)': 1914,
  'Перша битва на річнці Марні': 1914,
  'Перша хімічна атака в історії': 1915,
  'Перше застосування підводного човна': 1914,
  'Вихід Італії з Троїстого союзу': 1915,
  'Горлицький Прорив': 1915,
  'Верденська м\'ясорубка': 1916,
  'Брусилівський Прорив': 1916,
  'Єдина велика Морська битва(я хз як називається)': 1916,
  'Атака на Лузитанію': 1915,
  'Друга битва на річці Марні': 1918,
  'Контр-наступ військ Антанти': 1918,
  'Чорний день німецької армії': 1918,
  'Комп\'єнське перемир\'я': 1918,
  '14 пунктів Вудро Вільсона': 1918,
  'Вступ США в війну': 1917
};

let ScoreNumber = 0;
let div_main = '';
let PElement;
let ScoreElement;

function waitUsingSetTimeout(milliseconds, callback) {
  setTimeout(callback, milliseconds);
}

function findRandomKey() {
    let keys = Object.keys(dates);

    let randomIndex = Math.floor(Math.random() * keys.length);

    localStorage.setItem('randomKey', keys[randomIndex]);
}