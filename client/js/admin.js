function onSave(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const composition = document.getElementById("composition").value;
    const price = document.getElementById("price").value;

    fetch(`http://localhost:3050/menuitem`,{method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({price, name, category, composition})})

}

document.getElementById("form").addEventListener("submit", onSave)