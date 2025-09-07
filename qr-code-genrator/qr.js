const qrinput = document.getElementById("qr-input");
const qrbutton = document.getElementById("qr-button");
const qrimg = document.getElementById("qr-img");

console.log("qrinput");

qrbutton.addEventListener("click", () => {
  const inputvalue = qrinput.value;
  if (!inputvalue) {
    alert("Enter a url");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrimg.alt = `qr code for ${inputvalue}`;
  }
});
