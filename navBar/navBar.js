fetch('/navBar/navBar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#add_navBar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})