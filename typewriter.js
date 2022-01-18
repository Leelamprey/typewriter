const sentence = "Hello there from lighthouse labs";

const animateSentence = function (sentence) {
  let x = 0;
  for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x)
  x+=50;
}
setTimeout(() => {
  console.log();
}, x+50)
}


animateSentence(sentence);