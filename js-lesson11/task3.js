// Отримати todo (async / await)
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error("Помилка отримання todo");
  }

  const todo = await response.json();
  return todo;
}

// Отримати user (async / await)
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!response.ok) {
    throw new Error("Помилка отримання user");
  }

  const user = await response.json();
  return user;
}

// Виклик функцій
async function run() {
  try {
    const todo = await getTodo();
    console.log("TODO:", todo);

    const user = await getUser();
    console.log("USER:", user);

    // Promise.all
    const [todoAll, userAll] = await Promise.all([getTodo(), getUser()]);
    console.log("Promise.all результат:");
    console.log(todoAll);
    console.log(userAll);

    // Promise.race
    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log("Promise.race результат:");
    console.log(raceResult);
  } catch (error) {
    console.error("Помилка:", error.message);
  }
}

run();
