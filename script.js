function openPage(page) {
  // Add logic to navigate to the corresponding page
  if (page === "contact") {
    alert("You are at " + page + " only.");
    window.location.href = "/contact.html";
  } else if (page === "get-started") {
    window.location.href = "/index.html";
  } else if (page === "work-email") {
    window.location.href = "/work-email.html";
  } else {
    alert("Navigating to " + page + " page.");
    alert("Sorry this " + page + " page is underconstruction");
  }
}

function formatText(command) {
  document.execCommand(command, false, null);
}

function createLink() {
  var url = prompt("Enter the URL:");
  if (url) {
    document.execCommand("createLink", false, url);
  }
}

function undo() {
  document.execCommand("undo", false, null);
}

function redo() {
  document.execCommand("redo", false, null);
}

function openFileInput() {
  document.getElementById("file-input").click();
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  document.getElementById("drop-zone").style.border = "2px dashed #2196F3";
}

function handleDrop(event) {
  event.preventDefault();
  document.getElementById("drop-zone").style.border = "2px dashed #ccc";
  handleFileSelect(event.dataTransfer.files[0]);
}

function handleFileSelect(file) {
  if (file) {
    console.log(file);
    document.getElementById("file-text").value = "File uploaded: " + file.name;
    // You can perform further actions with the uploaded file here
  }
}