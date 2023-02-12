let saveInputBTN = document.getElementById("saveInput-BTN")
let TXTinput = document.getElementById("TXTinput")
let saveTabBTN = document.getElementById("saveTabBTN")
let clearBTN = document.getElementById("clearBTN")
let leadsDisplay = document.getElementById("leadsDisplay")
let leads = []

saveInputBTN.addEventListener("click", function(){
    if(TXTinput.value != ""){
        leads.push(TXTinput.value)
        printLeads()
    }
})
saveTabBTN.addEventListener("click", function(){
    leads.push(window.location.href)
    printLeads()
})
clearBTN.addEventListener("click", function(){
    leads = []
    leadsDisplay.innerHTML = ""
})

function printLeads(){
    for (let index = 0; index < leads.length; index++) {
        leadsDisplay.innerHTML += '<li class= "list-group-item"><a>' + leads[index] + '</a></li>'
        let listItem = document.createElement("li")
    }
}