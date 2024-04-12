
for (let i = 3; i <= 30; i++) {
    if (i === 13) {
      continue; 
    }
    console.log(i); 
  }
let counter: number = 30;
while (counter > 0) {
  if (counter === 3) {
    break; 
  }
  console.log(counter);
  counter--; 
}
function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; 
      }
      console.log(char); 
    }
  }
  logUntilVowel("syzygy"); 

  