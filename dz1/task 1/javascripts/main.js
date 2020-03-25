console.log("Main.js connected");
const flagCanvas = document.getElementById("poland-flag");
var flag = flagCanvas.getContext("2d");
flag.fillStyle = "red";
flag.fillRect(0, 0, flagCanvas.width, flagCanvas.height/2);
flag.fillStyle = "white";
flag.fillRect(0, flagCanvas.height/2, flagCanvas.width, flagCanvas.height/2);

const dialog = document.getElementById("starting-dialog");
const rejectDialogButton = document.getElementById("dialog-reject-button");
const acceptDialogButton = document.getElementById("dialog-accept-button");

rejectDialogButton.addEventListener('click', function() {
	window.location.replace("https://www.youtube.com/results?search_query=%D0%BC%D0%B0%D0%B9%D0%BD%D0%BA%D1%80%D0%B0%D1%84%D1%82+%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE+");
})

acceptDialogButton.addEventListener('click', function() {
	dialog.close();
})





