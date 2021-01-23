const template = document.createElement("template");
template.innerHTML = `
    <style>
        .card{
            background-color:lightblue;
            height:12rem;
        }
    </style>
    <div class='card'>
        <h1></h1>
    </div>

`;

function clickCallback() {
    const algId = this.getAttribute("algId");
    window.location.href = `algorithm.html?algId=${algId}`
}

class AlgorithmCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('h1').innerText =
            this.getAttribute("algorithm");

    }

    connectedCallback() {
        this.shadowRoot.querySelector(".card").addEventListener("click", clickCallback.bind(this))
    }

    disconnectedCallback() {
        console.log("Disconnecting")
        this.shadowRoot.querySelector(".card").removeEventListener("click", clickCallback)
    }
}

window.customElements.define("algorithm-card", AlgorithmCard)