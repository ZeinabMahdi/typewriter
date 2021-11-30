const sentence = "hello there from lighthouse labs";

let timePassed = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timePassed)
  timePassed += 50;
} 

setTimeout(() => {
process.stdout.write ('\n');
}, timePassed);