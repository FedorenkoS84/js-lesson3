// Клас для Todo
class Todo {
  constructor(url = "https://jsonplaceholder.typicode.com/todos/1") {
    this.url = url;
  }

  // Метод для отримання todo
  async fetchTodo() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Помилка отримання todo");
      }
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error(error.message);
    }
  }
}

// Клас для User
class User {
  constructor(url = "https://jsonplaceholder.typicode.com/users/1") {
    this.url = url;
  }

  // Метод для отримання user
  async fetchUser() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Помилка отримання user");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error(error.message);
    }
  }
}
// Використання
(async () => {
  const todoInstance = new Todo();
  const userInstance = new User();

  const todo = await todoInstance.fetchTodo();
  console.log("TODO:", todo);

  const user = await userInstance.fetchUser();
  console.log("USER:", user);

  // Promise.all
  const [todoAll, userAll] = await Promise.all([
    todoInstance.fetchTodo(),
    userInstance.fetchUser(),
  ]);
  console.log("Promise.all результат:", todoAll, userAll);

  // Promise.race
  const raceResult = await Promise.race([
    todoInstance.fetchTodo(),
    userInstance.fetchUser(),
  ]);
  console.log("Promise.race результат:", raceResult);
})();
