class Ice extends HTMLElement{
    constructor(fn) {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(fn());
    }
}