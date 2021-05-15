class Ice extends Element{
    constructor(fn) {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(fn());
    }

    style() {
        return this;
    }
 
    on() {
        return this;
    }
}

new Ice(
    document.createElement()
).style({"font-size": 30})