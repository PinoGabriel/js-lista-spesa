
const list = ["pomodoro", "latte", "fragole", "pane","verdura", "acqua", "pasta"];

console.log(list);

let i = 0
let element = ""

while (i < list.length) {

    console.log(list[i]);

    element = `<div> ${list[i]} </div>`

    
    
    document.getElementById("shoppingList").innerHTML += element
    i++
}
