console.log("Name: Aizada Sembaeva, Group: YourGroup");
console.log("Hello, JavaScript World!");

let name = "Aizada";
let age = 18;
let isStudent = true;
console.log(name + " is " + age + " years old. Student: " + isStudent);



document.getElementById("btnChange").onclick = function() {
  document.getElementById("textChange").textContent = "The text has been changed!";
};

document.getElementById("btnColor").onclick = function() {
  document.getElementById("colorBox").style.background = "#ff3374";
};

document.getElementById("btnFont").onclick = function() {
  document.getElementById("colorBox").style.fontSize = "20px";
};

document.getElementById("btnAdd").onclick = function() {
  const list = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
};

document.getElementById("btnRemove").onclick = function() {
  const list = document.getElementById("itemList");
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
};



const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.background = "#ff3374");
hoverBox.addEventListener("mouseout", () => hoverBox.style.background = "#ccc");

const input = document.getElementById("liveInput");
input.addEventListener("keyup", () => {
  document.getElementById("output").textContent = input.value;
});

const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let nameVal = document.getElementById("name").value.trim();
  let emailVal = document.getElementById("email").value.trim();
  let passVal = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!nameVal || !emailVal || !passVal) {
    error.textContent = "All fields are required!";
  } else if (passVal.length < 8) {
    error.textContent = "Password must be at least 8 characters long!";
  } else {
    error.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
  }
});

