function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));};async function exec() {while (true) {try {for (let i = 0; i < document.getElementsByClassName("mediablock").length; i++) {if (document.getElementsByClassName("mediablock")[i].parentElement.parentElement.className == "popover-content") {for (let j = 0; document.getElementsByClassName("form-control").length; j++) {if (document.getElementsByClassName("form-control")[j].value == "") {document.getElementsByClassName("form-control")[j].value = document.getElementsByClassName("mediablock")[i].innerText.split(",")[0];break;};};};}await sleep(100);}catch {console.log("All fields are filled in");await sleep(100);}}};exec()
