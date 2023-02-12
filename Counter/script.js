let x = document.getElementById("count")
let y = document.getElementById("header")
let count = 0
function add(){
    count += 1
    x.textContent = count
    if(count%5==0 && count<=20){
        y.textContent += "!"
    }else if(count>20){
        y.textContent = "Stop!"
    }
}
function save(){
    count = 0
    x.textContent = count
    y.textContent = "Counter"
}