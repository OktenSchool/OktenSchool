/*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ! */


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*
let one =(a,b)=>a*b;
    let AC = 10;
    let BC=20;
    let S_of_ABC = one(AC,BC)
console.log(S_of_ABC/2);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/







/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/ /* 2ПR *
let two =(a,b)=>2*a*b;
let pi = 3.14;
let r=20;
let S_of_O = two(pi,r)
console.log(S_of_O);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-/
/*-створити функцію яка обчислює та повертає oб'єм циліндру висотою h, та радіусом r *
let three=(a,b,c)=>2*a*b*c;
let pi_ =3.14;
let r_ = 20;
let h = 30;
let V_of_Cylinder = three(pi_,r_,h)
console.log(V_of_Cylinder);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/




/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-/
/*-створити функцію яка приймає масив та виводить кожен його елемент*
let OktenSchool = [
    'Десять заповідей Octen School',
    'Octen School це твій Шанс і немає інших у тебе',
    'Не використовуй зустрічі з Octen School марно',
    'Святкуй свій вихідний разом з превю',
    'Шануй менторів своїх',
    'Не забий',
    'Не чини перелюбу до Менторів',
    'Не кради час Octen School',
    'Не говори брехні проти свого Ментора та однокурсника',
    'Не пожадай роботи свого однокурсника',
    'Не пожадай майна свого однокурсника'
];
OktenSchool.forEach(element => {
    console.log(element);
});

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/










/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
let p = (text) => document.write(`<p>${text}</p>`);
let text = 'Okten School';
p(text);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/





/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
let createList = (text) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

let liText = 'Okten School';
createList(liText);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
let createList = (text) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

let liText = 'Okten School'; // Текст для елементів <li>
createList(liText);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
 Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
let createList = (text, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

let Text = 'Okten School';
let Count = 3;
createList(Text, Count);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
let createListFromArray = (array) => {
    document.write('<ul>');
    array.forEach(item => {
        document.write(`<li>${item}</li>`);
    });
    document.write('</ul>');
};

let primitiveArray = [1, 'hello', true, 'world', false];
createListFromArray(primitiveArray);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
 Для кожного об'єкту окремий блок.*/
let displayObjects = (objectsArray) => {
    objectsArray.forEach(obj => {
        document.write(`<div style="border: 1px solid black; padding: 10px; margin-bottom: 10px;">`);
        document.write(`<p>ID: ${obj.id}</p>`);
        document.write(`<p>Name: ${obj.name}</p>`);
        document.write(`<p>Age: ${obj.age}</p>`);
        document.write(`</div>`);
    });
};

// Приклад масиву об'єктів
let objects = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];

// Виклик функції для виводу об'єктів в документ
displayObjects(objects);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію яка повертає найменьше число з масиву*/
let findMinNumber = (numbers) => {
    // Перевіряємо, чи масив не порожній
    if (numbers.length === 0) {
        return undefined; // Повертаємо undefined, якщо масив порожній
    }

    let min = numbers[0]; // Припускаємо, що перший елемент - найменший

    // Проходимо по усіх елементах масиву, шукаючи найменше число
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; // Оновлюємо значення min, якщо знайдено менше число
        }
    }

    return min; // Повертаємо знайдене найменше число
};

// Приклад масиву чисел
let numbers = [5, 3, 8, 1, 9, 2];

// Виклик функції для знаходження найменшого числа в масиві
let minNumber = findMinNumber(numbers);
console.log("Найменше число в масиві:", minNumber);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію яка повертає найменьше число з масиву*/
let findMinNumber = (numbers) => {
    // Перевіряємо, чи масив не порожній
    if (numbers.length === 0) {
        return undefined; // Повертаємо undefined, якщо масив порожній
    }

    let min = numbers[0]; // Припускаємо, що перший елемент - найменший

    // Проходимо по усіх елементах масиву, шукаючи найменше число
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; // Оновлюємо значення min, якщо знайдено менше число
        }
    }

    return min; // Повертаємо знайдене найменше число
};

// Приклад масиву чисел
let numbers = [5, 3, 8, 1, 9, 2];

// Виклик функції для знаходження найменшого числа в масиві
let minNumber = findMinNumber(numbers);
console.log("Найменше число в масиві:", minNumber);
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 Приклад sum([1,2,10]) //->13*/
let sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

// Приклад використання функції
let exampleArray = [1, 2, 10];
console.log(sum(exampleArray));
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах*/
let swap = (arr, index1, index2) => {
    // Перевіряємо, чи індекси знаходяться в межах масиву
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.log("Помилка: Неправильні індекси");
        return arr; // Повертаємо вихідний масив, якщо індекси некоректні
    }
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
};

let arr = [11, 22, 33, 44];
console.log(swap(arr, 0, 1));
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
let swap = (arr, index1, index2) => {
    // Перевіряємо, чи індекси знаходяться в межах масиву
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.log("Помилка: Неправильні індекси");
        return arr; // Повертаємо вихідний масив, якщо індекси некоректні
    }

    // Міняємо значення місцями
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
};

let arr = [11, 22, 33, 44];
console.log(swap(arr, 0, 1));
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/






/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate;

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }

    if (exchangeRate === undefined) {
        console.log("Помилка: Курс для валюти обміну не знайдено");
        return;
    }

    let exchangedSum = sumUAH / exchangeRate;
    return exchangedSum;
};

let sumUAH = 10000;
let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
let exchangeCurrency = 'USD';
console.log(exchange(sumUAH, currencyValues, exchangeCurrency));
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/



































/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
 Для кожного об'єкту окремий блок.*/









/*- створити функцію яка повертає найменьше число з масиву*/











/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
 Приклад sum([1,2,10]) //->13
 Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/








/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/













