// todo
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Помилка отримання todo");
      }
      return response.json();
    }
  );
}

// USER
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Помилка отримання user");
      }
      return response.json();
    }
  );
}

//  then / catch
getTodo()
  .then((todo) => {
    console.log("TODO:", todo);
  })
  .catch((error) => {
    console.error("Помилка:", error.message);
  });

// Promise.all
const allResult = Promise.all([getTodo(), getUser()]);

allResult
  .then(([todo, user]) => {
    console.log("Promise.all результат:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Promise.all помилка:", error.message);
  });

// Promise.race
const raceResult = Promise.race([getTodo(), getUser()]);

raceResult
  .then((result) => {
    console.log("Promise.race результат:");
    console.log(result);
  })
  .catch((error) => {
    console.error("Promise.race помилка:", error.message);
  });
