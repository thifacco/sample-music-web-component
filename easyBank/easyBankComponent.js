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
    this.setView(shadow);
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

  setView(shadow) {
    let element = document.createElement('div');
    element.classList.add('easy-bank');
    element.innerHTML = `
      <h1>EasyBank</h1>
      <div class="nova-conta">
        <h6>Abrir nova conta</h6>
        <form name="abrir-nova-conta">
          <input type="text" name="nome-titular" placeholder="Nome do titular" />
          <input type="text" name="cpf-titular" placeholder="CPF do titular" />
        </form>
      </div>
      <div class="minha-conta">
        <h6>Minha conta</h6>
        <div class="dados-conta">
          <span id="banco-agencia"></span>
          <span id="banco-conta"></span>
        </div>
        <div class="dados-titular">
          <span id="nome-titular"></span>
          <span id="cpf-titular"></span>
        </div>
        <div class="saldo-conta">
          <span id="saldo-conta"></span>
        </div>
      </div>
      <div class="banco-operacoes">
        <h6>Operações</h6>
        <label for="depositar-valor">Depositar valor:</label>
        <input
          type="number"
          name="depositar-valor"
          id="depositar-valor"
          value="100"
        />
        <label for="sacar-valor">Sacar valor:</label>
        <input type="number" name="sacar-valor" id="sacar-valor" value="100" />
      </div>
    `;
    shadow.appendChild(element);
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
