import readlineSync from 'readline-sync';

// Проверка результата
const countBullsAndCows = (correct, current) => {
  let countBulls = 0;
  let countCows = 0;

  for (let i = 0; i < 4; i += 1) {
    const correctNumber = correct[i];
    const currentNumber = current[i];

    if (correctNumber === currentNumber) {
      countBulls += 1;
    } else if (correct.includes(currentNumber)) {
      countCows += 1;
    }
  }

  return [countBulls, countCows];
};

// Проверка на уникальность цифр в числе 
const isRepeatNumber = (number) => {
  const set = new Set(number);
  if (set.size !== 4) { return true; }
  return false;
};

// Ход игрока
const step = () => {
  const userAnswer = readlineSync.question('Ваш ход: ');

  if (!Number(userAnswer)) {
    console.log('Введите числовое значение!');
    return step();
  }

  if (userAnswer.length !== 4) {
    console.log('Число должно быть 4-х значным!');
    return step();
  }

  if (isRepeatNumber(userAnswer)) {
    console.log('Цифр не должны повторяться!');
    return step();
  }

  return userAnswer.split('').map(Number);
};

// Генерируем случайное число
const getRandomNumber = () => Math.floor(Math.random() * 10);

// Получаем загаданное число (ввиде массива)
const getRandom = () => {
  const number = [];

  for (let i = 0; i < 4; i += 1) {
    const item = getRandomNumber();
    if (number.includes(item)) {
      i -= 1;
    } else {
      number.push(item);
    }
  }

  return number;
};

// Начать игру
const startGame = () => {
  console.log('Хотите начать игру?');
  const userAnswer = readlineSync.question('Ваш ответ (+ / -): ');

  switch (userAnswer) {
    case '+':
      return true;
    case '-':
      return false;
    default: startGame();
  }
};

// Правила игры
const getRules = () => {
  console.log('Показать правила игры?');
  const userAnswer = readlineSync.question('Ваш ответ (+ / -): ');

  switch (userAnswer) {
    case '+':
      console.log('Суть игры: ваш соперник, будь то компьютер или друг, загадывает 4-значное число, состоящее из неповторяющихся цифр. Ваша задача — угадать его за ограниченное число ходов. В качестве подсказок выступают “коровы” (цифра угадана, но её позиция — нет) и “быки” (когда совпадает и цифра и её позиция). То есть если загадано число “1234”, а вы называете “6531”, то результатом будет 1 корова (цифра “1”) и 1 бык (цифра “3”).');
      break;
    case '-':
      return false;
    default: getRules();
  }
};

// Приветствие и правила игры
const getGreating = () => {
  console.log('Добро пожаловать в игру "Быки и Коровы"!');
  getRules();
};

// Убираем повторное приветствие
let isGreet = true;
const launchGame = () => {
  if (isGreet) {
    isGreet = false;
    getGreating();
  }

  const userAnswer = startGame();
  if (userAnswer) {
    console.log('Отлично! Тогда начнем игру.')
    console.log('Компьютер задумал число. Попробуйте его вычислить, затратив минимум ходов!')
    const number = getRandom();

    let flag = true;
    let counter = 0;

    while (flag) {
      counter += 1;
      const userAnswer = step();
      const [bulls, cows] = countBullsAndCows(number, userAnswer);
      if (bulls === 4) {
        flag = false;
      } else {
        console.log(`Текущий результат. Быки - ${bulls}, коровы - ${cows}`);
      }
    }

    console.log(`Ура, вы отгадали число! Загаданное число: ${number.join('')}, общее кол-во шагов: ${counter}.`);
    launchGame();
  } else {
    console.log('Очень жаль( Сыграем в другой раз.');
  }
};

launchGame();
