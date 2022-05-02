let number = 5;
let stringNumber = number.toString();
let reverseNumber = '';
for (let index = stringNumber.length - 1; index >= 0; index--) {
    reverseNumber += stringNumber[index];
}
if (parseInt(reverseNumber) === number) {
    console.log(number, "is Palindrome Number");
} else {
    console.log(number, "is not Palindrome Number");
}