let count = 0;
const incrementButton = document.querySelector("#increment-btn");
const showText = document.querySelector("#count-el");
const saveButton = document.querySelector("#save-btn");
const saveEl = document.querySelector("#save-el");

function increment() {
    count += 1
    showText.textContent = count
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    showText.textContent = 0;
    count = 0;
}


incrementButton.addEventListener("click",increment);
saveButton.addEventListener("click",save)


