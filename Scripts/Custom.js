//Flip, Split, Join function
    function flipSplit(word) {
        let flipped = word.split("").reverse().join("");
            document.getElementById("result").innerHTML = flipped;
            return flipped;
        }

//Button Event
    document.getElementById("tacoButton").addEventListener('click', function () {
        //Step 1: Get User Input
        var userWord = document.getElementById("inputBox").value;
        var modifiedWord = userWord.toLowerCase().replace(/ /g, "");
        //Step 2: Do Something With Input
        var reversedWord = flipSplit(modifiedWord)
        //Step 3: Display Result to User

        if (modifiedWord == reversedWord) {
    document.getElementById("result2").innerHTML = `<h5>YES! This is a palindrome.</h5>`;
        }
        else {
    document.getElementById("result2").innerHTML = `<h5>SORRY, this is not a palindrome.</h5>`;
        }

    });


//Confetti JS