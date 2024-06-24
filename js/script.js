const qrButton = document.querySelector("button.qr-code-button");
const qrInput = document.querySelector("#input-text");
const qrImg = document.querySelector("#qr-code");
const container = document.querySelector(".container");
const container2 = document.querySelector(".second-page");
const download = document.querySelector("[data-download]");
const share = document.querySelector("#share");
console.log(download)





handleClick = (e) => {
    e.preventDefault()
    const inputValue = qrInput.value;
    if (inputValue) {
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    container.classList.add("hide");
    container2.classList.remove("hide");
    } else {
        alert("Please enter a URL or text")
    }
}

qrButton.addEventListener("click", handleClick);


handleDownload = async (e) => {
    e.preventDefault();
    await fetchFile(qrImg.src);
}
async function fetchFile (url) {
    try {
    const response = await fetch(url);
    const blob = await response.blob();
    const urlObject = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = urlObject;
    a.download = 'qr-code.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(urlObject);
    } catch(error) {
        console.error("Error downloading file", error);
    }
}

download.addEventListener("click", handleDownload);