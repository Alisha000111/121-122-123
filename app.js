for (var i = 3; i <= 30; i++) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}
var counter = 30;
while (counter > 0) {
    if (counter === 3) {
        break;
    }
    console.log(counter);
    counter--;
}
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break;
        }
        console.log(char);
    }
}
logUntilVowel("syzygy");
