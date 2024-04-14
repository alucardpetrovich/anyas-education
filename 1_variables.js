// 1. Змінні

// 1.1. let vs const

// 1.1.2. const означає, що значення змінної неможливо змінити надалі в коді
const Anna = "the best girlfriend";
// кине помилку, якщо розкоментувати
// Anna = "I've changed my mind";

// 1.1.3. let означає, що значення змінної можна поміняти в процесі виконання програми
let markizStatus = "Я ситий"
// ....пройшло 3 години
markizStatus = "Я голодний"

// 1.2. Типи змінних

// 1.2.1. string - строка. Літерал строки може вказуватись як в подвійних лапках (""),
//        так і в одинарних ('') і також в похилих (``). Записи нижче рівнозначні
// const test = "hello world";
// const test = 'hello world';
// const test = `hello world`;

// 1.2.2. number - число. Числа бувають цілі і з плаваючою точкою.
//        Проте в javascript їх не виділяють в окремі типи.
// const test = 1;
// const test = 1.4;

const test1 = 5;
const test2 = 10;
const test3 = 7;
// 1.2.3. Над числами можна проводити різноманітні арифметичні операції, такі як:
//      - додавання
// console.log(test1 + test2);

//      - віднімання
// console.log(test1 - test2);

//      - множення
// console.log(test1 * test2);

//      - ділення
// console.log(test1 / test2);

//      - отримання залишку від ділення націло
// console.log(test3 % test1);

// порядок виконання операцій має значення - спочатку виконується ділення/множення,
//    а потім додавання/віднімання. Проте порядок можна змінити, взявши аргументи потрібної операції в дужки

// console.log(test1 + test2 * test3); // дорівнює 75
// console.log((test1 + test2) * test3) // дорівнює 105

// 1.3.1. boolean - булевий тип данних має лише 2 можливих значення - true, false.
//      Над булевими значеннями можна проводити логічні операції

// const isWorkdayOver = false;
// const doWeHaveEnoughMoneyForCinema = true;

const isZooMagazineOpen = true;
const isMarkizNeedsFood = false;

// 1.3.2. Логічне І (російською - И, англійською - AND).
//        Повертатиме true тільки коли обидва аргументи будуть true
const wouldMarkizEat = isZooMagazineOpen && isMarkizNeedsFood;

const isMarkizHungry = true;
const isMarkizThirsty = true;

// 1.3.3. Логічне АБО (російською - ИЛИ, англійською - OR).
//        Повертатиме true коли обидва аргументи або хоча б один з них буде true
const wouldMarkizGoToKitchen = isMarkizHungry || isMarkizThirsty;

// console.log((isMarkizHungry && isMarkizNeedsFood) || isMarkizThirsty);
// console.log(!isMarkizHungry);

// && - це оператор логічного І
// console.log(wouldMarkizEat);

// || - оператор логічного АБО
// console.log(wouldMarkizGoToKitchen);

// null, undefined

// null - пусте значення. Тобто колись тут було/буде яке інше значення (строка, число, булеве)
const markizBalls = null;
// undefined - відсутність значення.
//     Тобто такого значення ніколи не існувало і, скоріш за все, не буде існувати
const kolyasTail = undefined;

// console.log(Anna);
