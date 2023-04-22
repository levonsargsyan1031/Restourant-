function myFunction(data){
    for(let i=0;i<data.length;i++){

     const menuContainer = document.createElement('div')
    const menuNameContainer = document.createElement('div')
    const menuName = document.createTextNode(data[i].name)
    
    menuNameContainer.appendChild( menuName)

    const menucompositionContainer = document.createElement('div')
    const menucomposition = document.createTextNode(data[i].composition)
    menucomposition.className = "menu-composition"
    menucompositionContainer.appendChild(menucomposition)

     const menuPriceContainer = document.createElement('div')
     const menuPrice = document.createTextNode(data[i].price)
     menuPriceContainer.appendChild(menuPrice)
     
    const img = document.createElement('img')
    img.src = data[i].image_url
    img.className = "menu-img"
    menuContainer.addEventListener("click",()=>{
         console.log('aaa')
         location.href = "is.html"
    })

    menuContainer.appendChild(menuName)
    menuContainer.appendChild(menucomposition)
    menuContainer.appendChild(menuPrice)
    menuContainer.appendChild(img)
   

    document.getElementById('menuList').appendChild(menuContainer)
    
    }
}
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

fetch(`http://localhost:3050/menuitem?filter=${category}`,{method:'GET'})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    myFunction(data)
})
