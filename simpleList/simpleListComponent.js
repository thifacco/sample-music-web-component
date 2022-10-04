class SimpleList extends HTMLElement {
  items;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.setStyle(shadow);
    this.setView('/simpleList/simpleList.html', shadow);
    this.getListOptions('/simpleList/simpleList.json', shadow);
  }

  setStyle(shadow) {
    const style = document.createElement('style');
    style.textContent = `
      .simple-list { margin:0; padding:0; list-style:none; }
      .simple-list li { font-size:12px; }
    `;
    shadow.appendChild(style);
  }

  setView(component, shadow) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let cont = document.createElement('div');
            cont.innerHTML = this.responseText;
            shadow.appendChild(cont);
        }
    }
    xhttp.open('GET', component, true);
    xhttp.send();
  }

  getListOptions(json, shadow) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200){
        const menu =  shadow.querySelector('ul');
        let menuJson = JSON.parse(this.responseText);
        menuJson.forEach(element => {
            let item = document.createElement('li');
            item.innerHTML = `<a href='${element.link}'>${element.name}</a>`;
            menu.appendChild(item);
        });
      }
    }
    xhttp.open('GET', json, true);
    xhttp.send();
  }
}

customElements.define('simple-list', SimpleList);
