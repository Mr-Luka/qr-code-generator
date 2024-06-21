const qrButton = document.querySelector("button.qr-code-button");
const qrInput = document.querySelector("#input-text");
const qr = document.querySelector("div.qr");
const qrImg = document.querySelector("#qr-code");
const container = document.querySelector(".container");
const container2 = document.querySelector(".second-page");
console.log(qrImg)




handleClick = (e) => {
    e.preventDefault()
    const inputValue = qrInput.value;
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    container.classList.add("hide");
    container2.classList.remove("hide");
}

qrButton.addEventListener("click", handleClick);