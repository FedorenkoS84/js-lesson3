// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  {
    name: "Serhii",
    email: "fedorenkos084@gmail.com",
    age: 41,
    address: {
      city: "New York",
      zipcode: "10001",
    },
  },
];

for (const { name, email, age, address } of users) {
  console.log(name, email, age, address);
}
