let listItems = [];

function addItem(){
    let someText = document.getElementById("itemField").value;
    document.getElementById("itemField").value = "";

    let toDo= {
        someText,
        marked: 0
    };
    listItems.push(toDo);

    let item = document.createElement("li");
    let checkbox = document.createElement("input");
    let killbox = document.createElement("button");
    let node = document.createTextNode(someText);
    checkbox.setAttribute("type", "checkbox");
    item.setAttribute("id", "item"+(listItems.length-1));
    checkbox.setAttribute("id", (listItems.length-1));
    killbox.setAttribute("id", (listItems.length-1));
    killbox.setAttribute("class", "deleteButton");
    item.appendChild(checkbox);
    item.appendChild(node);
    item.appendChild(killbox);

    killbox.addEventListener("click", removeItem);
    checkbox.addEventListener("click", markItem);
    document.getElementById("listItems").appendChild(item);

    console.log(listItems);
}

function removeItem(){
    let index = this.id;
    listItems.splice(index, 1);
    document.getElementById("item"+index).remove();
    console.log(listItems);
}

function markItem(){
    let index = this.id
    listItems[index].marked = listItems[index].marked ^ 1;
    console.log(listItems[index]);
}


console.log("script started")
document.getElementById("itemButton").addEventListener("click", addItem);
document.getElementById("itemField").addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        addItem();
    }
})