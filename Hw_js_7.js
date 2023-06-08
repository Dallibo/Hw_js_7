function numb(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
let x = numb(30,6)
document.write(`<div>Max: ${x}</div>`)


let a1 = +prompt("Введите число");
let b1 = +prompt("Введите степень, в которую хотите возвести число");
function numb1(a1, b1) {
  let result = Math.pow(a1, b1);
  return result;
}
let result = numb1(a1, b1);
alert(`Ответ: ${result}`);


let numb2 = +prompt("Введите первое число");
let numb3 = +prompt("Введите второе число");
let numb4 =  prompt("Введите знак: +, -, *, /,");
function numb5(numb2, numb3, numb4) {
  let result1;
  switch (numb4) {
    case '+':
      result1 = numb2 + numb3;
      break;
    case '-':
      result1 = numb2 - numb3;
      break;
    case '*':
      result1 = numb2 * numb3;
      break;
    case '/':
      result1 = numb2 / numb3;
      break;
  }
    return result1;
}
let result1 = numb5(numb2, numb3, numb4);
alert(`Ответ: ${result1}`);


let numb6 = +prompt("Введите число");
function numb7(number) {
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      return ("Простое число");
    }
    return ("Сложное число");
  }
}
let result2 = numb7(numb6);
alert(`Ответ: ${result2}`);


let numb9 = +prompt("Введите число");
function numb8(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    let result3 = number * i;
    table += `${number} * ${i} = ${result3}\n`;
  }
  return table;
}
let numb10 = numb8(numb9);
alert(`Таблица умножения ${numb9}:\n\n${numb10}`);


let a3 = +prompt("Введите первое число для реализации работы оператора")
let b3 = +prompt("Введите второе число для реализации работы оператора")
function mod(a3, b3) {
    while (a3 >= b3) {
      a3 = a3 - b3;
    }
    return a3;
  }
let numb12 = mod(a3,b3)
alert(`Ответ: ${numb12}`)

let numb13 = prompt("Вводите числа через запятую что бы получить их сумму: ").split(",");
function sum() {
  let sum = 0;
  for (let i = 0; i < numb13.length; i++) {
    sum += +numb13[i];
  }
  return sum;
}
let result4 = sum();
alert(`Результат: ${result4}`);


let numb14 = +prompt("Введите первое число: ");
let numb15 = +prompt("Введите второе число: ");
let isEven = confirm("Хотите вывести парные числа?");
function numb16(start, end, isEven) {
  let step = isEven ? 2 : 1;
  for (let i = start; i <= end; i = i + step) {
    console.log(i);
  }
}
numb16(numb14, numb15, isEven);




