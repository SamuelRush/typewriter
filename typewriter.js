const sentence = "hello there from lighthouse labs";
// let i = 0;

// const typing = function(words,time) {
//   if (i < sentence.length){
//     setTimeout(() => {
//       process.stdout.write(words.charAt(0));
//     }, time);
//     i = i + 1;
//     typing(words.substring(1),time)
//   } else if (i === sentence.length){
//     process.stdout.write("\n")
//   }
// }

// typing(sentence,50);

//--------------------------------------------------

let i =0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  } ,(i*50));
  i=i+1;
  if (sentence.length === i){
    setTimeout(() => {
      process.stdout.write("\n");
    } ,(i*50));
  }
}



