const liStyle = function(){
    const liList = document.getElementsByTagName("li");
    console.log(liList)
    for(let i=0; i<liList.length; i++){
        liList[i].style.color = "blue";
    }
}

function funAppend() {
    const list = document.createElement("li");
    const work = document.getElementById("text").value;
    const node = document.createTextNode(work);
    list.appendChild(node);
    const ele = document.getElementById("ol1");
    ele.appendChild(list);            
}

function cartAppend(e) {
    const x = document.getElementById(e);
    const ele = document.getElementById("cart");
    ele.appendChild(x);
}

function cartRemove(e) {
    const x = document.getElementById(e);
    const cart = document.getElementById("cart");
    const list = document.getElementById("list");
    cart.removeChild(x);
    list.appendChild(x);
}