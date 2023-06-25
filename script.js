const tabButtons = document.querySelectorAll(".tabs button");
const tabPanels = document.querySelectorAll(".mainPanel");
const borderLeftBlue = document.querySelectorAll(".border-left");
const bodyELement = document.querySelector("body");

function showPanel(panelIndex) {
  tabButtons.forEach(function (node) {
    node.style.color = "";
  });
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
  });
  borderLeftBlue.forEach(function (node) {
    node.classList.remove("border-left-blue");
  });
  tabPanels[panelIndex].style.display = "block";
  tabButtons[panelIndex].style.backgroundColor = "#333333";
  borderLeftBlue[panelIndex].classList.add("border-left-blue");
  tabPanels[panelIndex].classList.add("fade-in-animation-class");
  setTimeout(() => {
    tabPanels[panelIndex].classList.remove("fade-in-animation-class");
  }, 250);
}
showPanel(0);

// add tasks button
const addImportant = document.getElementById("addImportant");
const addImportantPopup = document.getElementById("addImportantPopup");
// output
const importantTasks = document.getElementById("importantTasks");
const importantTasksPopup = document.getElementById("importantTasksPopup");
// input field
const inputField = document.getElementById("inputField");
const inputFieldPopup = document.getElementById("inputFieldPopup");

function showPopup() {
  setTimeout(function () {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    let close = document.getElementById("close");
    close.style.display = "none";
    let paragraph = document.createElement("p");
    paragraph.innerHTML = importantTasks.innerHTML;
    importantTasksPopup.appendChild(paragraph);
    while (importantTasks.firstChild) {
      importantTasks.removeChild(importantTasks.firstChild);
    }
    showPanel(0);
  }, 100);
  let popup = document.getElementById("popup");
  popup.classList.add("fade-in-animation-class");
  setTimeout(() => {
    popup.classList.remove("fade-in-animation-class");
  }, 300);
}

function closePopup() {
  setTimeout(function () {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
    let close = document.getElementById("close");
    close.style.display = "block";
    let paragraph = document.createElement("p");
    paragraph.innerHTML = importantTasksPopup.innerHTML;
    importantTasks.appendChild(paragraph);
    while (importantTasksPopup.firstChild) {
      importantTasksPopup.removeChild(importantTasksPopup.firstChild);
    }
    showPanel(1);
  }, 100);
}

function toAddImportant() {
  if (inputField.value === "") {
    alert("Add a task");
  } else {
    let paragraph = document.createElement("p");
    paragraph.classList.add("importantTasksStyle");
    paragraph.innerText = inputField.value;
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    importantTasks.appendChild(paragraph);
    paragraph.appendChild(span);
    inputField.value = "";
  }
}

inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    toAddImportant();
  }
});

function toAddImportantPopup() {
  if (inputFieldPopup.value === "") {
    alert("Add a task");
  } else {
    let paragraph = document.createElement("p");
    paragraph.classList.add("importantTasksStyle");
    paragraph.innerText = inputFieldPopup.value;
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    importantTasksPopup.appendChild(paragraph);
    paragraph.appendChild(span);
    inputFieldPopup.value = "";
  }
}

inputFieldPopup.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    toAddImportantPopup();
  }
});

importantTasks.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "P") {
    e.target.classList.toggle("importantChecked");
  }
});

importantTasksPopup.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "P") {
    e.target.classList.toggle("importantChecked");
  }
});

// Suggestion button
const suggestionButton = document.getElementById(
  "my-day-panel-suggestion-button"
);
const suggestionCloseButton = document.getElementById(
  "suggestion-bar-close-button"
);
const suggestionBar = document.getElementById("suggestion-bar-id");

suggestionButton.addEventListener("click", () => {
  suggestionBar.classList.toggle("suggestion-bar-display-and-hide");
  if (bodyELement.classList.contains("grid-3-17-0")) {
    bodyELement.classList.remove("grid-3-17-0");
    bodyELement.classList.add("grid-15-68-17");
  } else if (bodyELement.classList.contains("grid-15-68-17")) {
    bodyELement.classList.remove("grid-15-68-17");
    bodyELement.classList.add("grid-3-17-0");
  }
  suggestionBar.classList.add("fade-in-animation-class");
  setTimeout(() => {
    suggestionBar.classList.remove("fade-in-animation-class");
  }, 300);
});

suggestionCloseButton.addEventListener("click", () => {
  suggestionBar.classList.toggle("suggestion-bar-display-and-hide");
  if (bodyELement.classList.contains("grid-3-17-0")) {
    bodyELement.classList.remove("grid-3-17-0");
    bodyELement.classList.add("grid-15-68-17");
  } else if (bodyELement.classList.contains("grid-15-68-17")) {
    bodyELement.classList.remove("grid-15-68-17");
    bodyELement.classList.add("grid-3-17-0");
  }
  suggestionBar.classList.add("fade-in-animation-class");
  setTimeout(() => {
    suggestionBar.classList.remove("fade-in-animation-class");
  }, 300);
});
