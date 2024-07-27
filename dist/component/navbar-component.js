class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="navbar h-24 w-full bottom-0 border bg-white fixed ">
                <div class="flex justify-center items-center space-x-20 my-auto">
                    <a href="main.html"><img src="img/icon.png" alt="" srcset=""></a>
                    <a href="saved.html"><i class="fa-solid fa fa-bookmark text-2xl" style="color: #000000;"></i></a>
                    <a href="acc.html"><i class="fa-solid fa fa-user text-2xl" style="color: #000000;"></i></a>
                </div>
            </div>
        `;
    }
}

customElements.define('navbar-component', NavbarComponent);