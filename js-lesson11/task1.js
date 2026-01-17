console.log("START");

function showText(text, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, ms);
  });
}

showText("Привіт, все працює!", 1000).then(() =>
  console.log("Promise завершився")
);

async function run() {
  await showText("Привіт через async/await", 1500);
  console.log("async/await завершився");
}

run();

console.log("END");
