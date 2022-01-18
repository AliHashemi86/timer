let inputArr = process.argv.slice(2);

for (let timeout of inputArr) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(timeout, 'seconds')},
  timeout * 1000);
}

// for (let i = 0; i < inputArr.length; i++) {
//   let timeout = inputArr[i];
//   setTimeout(() => {
//     process.stdout.write('\x07');
//     console.log(timeout, 'seconds')},
//   timeout * 1000);
//}