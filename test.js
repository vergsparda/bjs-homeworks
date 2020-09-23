const checkDelay = (index, delay) => {
const start = new Date();
setTimeout(() => {
const end = new Date();
const realDelay = end - start;
console.log(`${index}: Задержка между вызовом : ${realDelay} мс`);
}, delay);
}

for (let i = 0; i < 10; i++) {
checkDelay(i, 10);
}
