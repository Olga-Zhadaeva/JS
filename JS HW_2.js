// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1:
let i_team_1 = 1;
let i_team_2 = 10;
let i_team_3 = 1;
while(i_team_1 <= i_team_2){
i_team_3 = 2 * i_team_3
    i_team_1++
    console.log(i_team_3)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2:

function result(exp) {
    let result = 1;
    for (let i_tem = 1; i_tem <= exp; i_tem++) {
        result *= 2;
        console.log(result);
    }
    return result;
  }
result (10);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let a = ":)"
let b = ""
for (let i = 1; i <= 5; i++) {
  b += a;
  console.log(b)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows):

function printSmile(stroka = ":)", numberOfRows = 6){
  let b = "";
  for (let i = 1; i <= numberOfRows; i++) {
    b += stroka;
            console.log(b);
        }
        return b;
      };

printSmile();

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
  let i = 0;
  let b = 0;
  const vowels = ["a" , "e" , "i" , "o", "u", "y"];
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  for ( let char of word.toLowerCase()) {
        if (vowels.includes(char)){
          i += 1;
        } else if (consonants.includes(char)) {
          b +=1
        }
      }
      console.log("Слово " + word + " состоит из "+ i + " гласных и " + b + " согласных букв")
    }
getWordStructure("Check-list")

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
  let word_1 = word.toLowerCase();
  let word_2 = word_1.length;
  let a = "";
  for (let i = 0; i < word_2; i++) {
     if (word_1[i] == word_1[word_2 - 1 - i]) { 
      a = "Палиндром" }
     else { a = "Не палиндром"; }
  } 
  console.log(a);
}
isPalindrom("abba")
