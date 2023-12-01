const guessBtn = document.querySelector(".btn");
const cardBody = document.querySelector('.card-body');
let userType = document.querySelector(".form-control");
let guess = [25, 36, 89, 15];



let userGuess = function typeGen(userType) {
    userType = document.querySelector(".form-control").value;
    checkNumber();
    text();
};


function text() {
    let text = userType;
    text.value = "";
}


let checkNumber = () => {

    if (guess.includes(parseInt(userType.value))) {
        let text = document.createElement("div");
        text.innerHTML = `
        <h5 class="card-title-text">
        <p class="text-black p-3 flex">woow! You're Genious 🤗</p>
         </h5>`;
        cardBody.appendChild(text);

        setTimeout(() => {
            text.remove()
        }, 1000);


    } else {
        let text = document.createElement("div");
        text.innerHTML = `
        <h5 class="card-title-text">
        <p class="text-black p-3 flex">!Oops Again Try</p>
         </h5>`;
        cardBody.appendChild(text);

        setTimeout(() => {
            text.remove()
        }, 1000);
    }
};




guessBtn.addEventListener("click", () => {
    userGuess();

});