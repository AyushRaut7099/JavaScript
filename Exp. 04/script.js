function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function checkPalindrome() {
    let resultElement = document.getElementById("result");

    try {
        let num = document.getElementById("numberInput").value;

        if (num === "") throw "Please enter a number";

        let reversed = reverseNumber(num);

        if (parseInt(num) === reversed) {
            resultElement.innerText = `✅ ${num} is a Palindrome!`;
            resultElement.style.color = "green";
        } else {
            resultElement.innerText = `❌ ${num} is NOT a Palindrome! Reversed: ${reversed}`;
            resultElement.style.color = "red";
        }

    } catch (error) {
        resultElement.innerText = `Error: ${error}`;
        resultElement.style.color = "orange";
    }
}
