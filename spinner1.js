//process.stdout.write('hello from spinner1.js... \rheyyy\n');

process.stdout.write('=> d2 node spinner1.js');

setTimeout(() => process.stdout.write('\n'), 50);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => process.stdout.write('\n'), 900);

setTimeout(() => {
  process.stdout.write('=> d2');
}, 900);

setTimeout(() => process.stdout.write('\n'), 900);