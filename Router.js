customElements.define("ice-router", new Ice(()=>{
    let div = document.createElement("div");
    div.append(getRoute());
}));