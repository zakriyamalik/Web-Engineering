document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    if (addButton) {
        addButton.addEventListener("click", displayDate);
    } else {
        console.error("Element with ID 'addButton' not found.");
    }
});

function displayDate() {
    const input= document.getElementById("nameInput");
    if(input.value!="")
    {
        console.log(input.value);
        const list = document.createElement("li");
        list.textContent=input.value;
        const ul = document.getElementById("nameList");
        ul.appendChild(list);
        for(let i=0;i<ul.children.length;i++)
        {
            console.log(ul.children[i].textContent);
        }

    }
    else
    {
        alert("Write something in the input field");
    }
}
