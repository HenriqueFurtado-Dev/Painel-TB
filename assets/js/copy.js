/* ----- START - Botão copiar ----- */ 

/* ----- BOX 1 ----- */ 
const button = document.querySelector(".copy");
const textBox = document.querySelector(".to-copy");

button.addEventListener("click", () => {
  textBox.select();
  let textValue = textBox.value;
  button.innerText = "Copiado";
  if (textValue == "") {
    alert("is empty!");
  } else {
    navigator.clipboard.writeText(textValue);
    setTimeout(() => {
      button.innerText = "Copiar de novo";
    }, 1000);
  }
});

/* ----- BOX 2 ----- */ 
const button2 = document.querySelector(".copy2");
const textBox2 = document.querySelector(".to-copy2");

button2.addEventListener("click", () => {
  textBox2.select();
  let textValue = textBox2.value;
  button2.innerText = "Copiado";
  if (textValue == "") {
    alert("is empty!");
  } else {
    navigator.clipboard.writeText(textValue);
    setTimeout(() => {
      button2.innerText = "Copiar de novo";
    }, 1000);
  }
});

/* ----- BOX 3 ----- */ 
const button3 = document.querySelector(".copy3");
const textBox3 = document.querySelector(".to-copy3");

button3.addEventListener("click", () => {
  textBox3.select();
  let textValue = textBox3.value;
  button3.innerText = "Copiado";
  if (textValue == "") {
    alert("is empty!");
  } else {
    navigator.clipboard.writeText(textValue);
    setTimeout(() => {
      button3.innerText = "Copiar de novo";
    }, 1000);
  }
});

/* ----- BOX 4 ----- */ 
const button4 = document.querySelector(".copy4");
const textBox4 = document.querySelector(".to-copy4");

button4.addEventListener("click", () => {
  textBox4.select();
  let textValue = textBox4.value;
  button4.innerText = "Copiado";
  if (textValue == "") {
    alert("is empty!");
  } else {
    navigator.clipboard.writeText(textValue);
    setTimeout(() => {
      button4.innerText = "Copiar de novo";
    }, 1000);
  }
});

/* ----- BOX 5 ----- */ 
const button5 = document.querySelector(".copy5");
const textBox5 = document.querySelector(".to-copy5");

button5.addEventListener("click", () => {
  textBox5.select();
  let textValue = textBox5.value;
  button5.innerText = "Copiado";
  if (textValue == "") {
    alert("is empty!");
  } else {
    navigator.clipboard.writeText(textValue);
    setTimeout(() => {
      button5.innerText = "Copiar de novo";
    }, 1000);
  }
});

/* ----- BOX 6 ----- */ 
const button6 = document.querySelector(".copy6");
const textBox6 = document.querySelector(".to-copy6");

button6.addEventListener("click", () => {
  textBox6.select();
  let textValue = textBox6.value;
  button6.innerText = "Copiado";
  if (textValue == "") {
    alert("is empty!");
  } else {
    navigator.clipboard.writeText(textValue);
    setTimeout(() => {
      button5.innerText = "Copiar de novo";
    }, 1000);
  }
});


/* ----- END - Botão copiar ----- */ 