const template = document.createElement("template");
template.innerHTML = `
    <style>
        .card{
            background-color: #d7ff96;
            height:16rem;
            display:flex;
            justify-content: center;
            margin-bottom:1rem;
        }

        img{
            height:10rem;
        }
    </style>
    <div class='card'>
        <div>
            <h1></h1>
            <img></img>
        </div>
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
        this.shadowRoot.querySelector("img").setAttribute("src", "images/" + this.getAttribute("img"));

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