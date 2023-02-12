let saveInputBTN = document.getElementById("saveInputBTN")
let saveTabBTN = document.getElementById("saveTabBTN")
let clearBTN = document.getElementById("clearBTN")
let leads = []

saveInputBTN.addEventListener("click", leads.saveInput())
saveTabBTN.addEventListener("click", leads.saveTab())
clearBTN.addEventListener("click", leads.clear())