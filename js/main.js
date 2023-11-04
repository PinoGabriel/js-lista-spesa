
const list = ["pomodoro", "latte", "fragole", "pane","verdura", "acqua", "pasta"];

console.log(list);

/* let i = 0
let element = ""

while (i < list.length) {

    console.log(list[i]);

    element = `<div> ${list[i]} </div>`

    
    
    document.getElementById("shoppingList").innerHTML += element
    i++
} */


let i = 0

const ul = document.createElement("ul")
const shopping = document.getElementById("shoppingList");

while (i < list.length) {
    const element = list[i];
    let li = document.createElement("li")
    li.innerHTML = element

    shopping.append(ul)
    ul.append(li)

    i++
}
