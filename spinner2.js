// Declare timer and spinner to print
let timer = 100;
const sentence = '\r|\r/\r-\r\\';

for (let i = 0; i < 5; i++){ // Loop to repeat spinning animation
  for (const char of sentence) { // loop to print line 1 char at a time
    setTimeout(() => {
      process.stdout.write(char); // outputs each character after timer amount
    }, timer += 100); // adds 50ms to timer after every letter
  }
}
setTimeout(() => {
  console.log("");
}, timer); // adds second line after final timer.