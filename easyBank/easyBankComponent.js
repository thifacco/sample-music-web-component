class EasyBank extends HTMLElement {
  nomeTitular;
  cpfTitular;
  agencia;
  #conta;
  #saldo;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.setStyle(shadow);
    this.setView('/easyBank/easyBank.html', shadow);
  }

  setStyle(shadow) {
    const style = document.createElement('style');
    style.textContent = `
      .easy-bank { margin:0; padding:0; }
      .easy-bank h1 { font-size:18px; font-weight:700; }
      .easy-bank h6 { font-size:14px; font-weight:300; }
    `;
    shadow.appendChild(style);
  }

  setView(component, shadow) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let cont = document.createElement('div');
            cont.classList.add('easy-bank');
            cont.innerHTML = this.responseText;
            shadow.appendChild(cont);
        }
    }
    xhttp.open('GET', component, true);
    xhttp.send();
  }

  criarConta(_nomeTitular, _cpfTitular) {
    this.nomeTitular = _nomeTitular;
    this.cpfTitular = _cpfTitular;
    this.agencia = '0001';
    this.#conta = Math.floor(Math.random() * 1000);
    this.#saldo = 0;
  }

  depositar(_valor) {
    this.#saldo += _valor;
  }

  sacar(_valor) {
    this.#saldo -= _valor;
  }

  mostrarSaldo() {
    return this.#saldo;
  }

  mostrarConta() {
    return this.#conta;
  }
}

customElements.define('easy-bank', EasyBank);
