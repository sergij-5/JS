

//– Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Sergiy';
let middleName = 'Sergiyovuch';
let lastName = 'Vronsjkuy';

let msg =firstName +' '+ middleName+' '+ lastName;
console.log(msg);


//– За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
//   let a = 100; let b = ‘100’; let c = true;
   let a = 100;
   let b = '100';
   let c = true;

   console.log(typeof a);
   console.log(typeof b);
   console.log(typeof c);

//Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова
// які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let name = prompt('Enter Name');
console.log(name);

let name2 = prompt('Enter Name2');
console.log(name2);

let age = prompt('Enter Age');
console.log(age);
