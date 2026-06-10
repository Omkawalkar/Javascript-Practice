const emojiOption = document.querySelectorAll(".emoji");
const msg = document.querySelector(".review-message");
const button =document.querySelector("send-btn");

// function for choose user feedback 
emojiOption.forEach((emoji) => {
    emoji.addEventListener("click", () => {
        const userChoice = emoji.getAttribute("id");
        console.log(userChoice);
        printLine(userChoice);
    });
});


// Function for print line or user rating

const printLine = (userChoice) => {

    msg.innerText =`your reciew was ${userChoice}`;



};

button.addEventListener("click" , printLine());

