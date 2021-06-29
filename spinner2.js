//refactor
process.stdout.write('=> d2 node spinner1.js\n');
const arraySpinner = ['|', '/', '- ', '\\'];
let interval = 0;
const space = setInterval (() => {
process.stdout.write('\r' + arraySpinner[++interval % arraySpinner.length]);
if (interval > 5 ) {
  clearInterval (space);
  process.stdout.write('\n=> d2\n');
}
}, 200);











// setTimeout(() => process.stdout.write('\n'), 250);
// setTimeout(() => process.stdout.write('=> d2'), 300);



// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => process.stdout.write('\n'), 900);

// setTimeout(() => {
//   process.stdout.write('=> d2');
// }, 900);

// setTimeout(() => process.stdout.write('\n'), 900);