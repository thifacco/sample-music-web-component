class SampleMusicComponent extends HTMLElement {
  
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.loadStyle(shadow);
    this.loadView(`${window.location.origin}/sampleMusic/sampleMusic.html`, shadow);
    this.loadData(`${window.location.origin}/sampleMusic/bands.json`, shadow);
  }

  loadStyle(shadow) {
    const style = document.createElement('style');
    style.textContent = `
      @import "${window.location.origin}/node_modules/bootstrap/dist/css/bootstrap.min.css";
      .sample-music .jumbotron {
        background: rgb(72,72,72);
        background: linear-gradient(180deg, rgba(72,72,72,1) 0%, rgba(18,18,18,1) 96%);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
      }
      .sample-music .jumbotron h1 {
        text-align: center;
      }
      .sample-music .jumbotron h1 span {
        display: block;
        color: #fff;
      }
      .sample-music .jumbotron h1 span:nth-child(1) {
        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
        text-transform: uppercase;
        color: #1ED760;
      }
      .sample-music .jumbotron h1 span:nth-child(2) {
        font-size: 14px;
        line-height: 20px;
        font-weight: 200;
      }
      .sample-music .wrap-bands { 
        background: rgb(18,18,18);
        padding: 1rem;
      }
      .sample-music .wrap-bands h2 {
        padding: 0 0.75rem;
        color: #fff;
      }
      .sample-music .footer {
        background: rgb(18,18,18);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0;
      }
      .sample-music .footer a {
        color: #1ED760;
        text-decoration: none;
        font-weight: 300;
      }
      .sample-music .footer a:hover {
        text-decoration: underline;
      }
    `;
    shadow.appendChild(style);
  }

  loadView(component, shadow) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          let cont = document.createElement('div');
          cont.classList.add('sample-music');
          cont.innerHTML = this.responseText;
          shadow.appendChild(cont);
      }
    }
    xhttp.open('GET', component, true);
    xhttp.send();
  }

  loadData(json, shadow) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200){
        const menu =  shadow.querySelector('ul');
        let menuJson = JSON.parse(this.responseText);
        menuJson.forEach(element => {
            let item = document.createElement('li');
            item.classList.add('py-3');
            item.innerHTML = `
              <div class='spotify-band'>
                <h2>${element.name}</h2>
              </a>
            `;
            menu.appendChild(item);
            if (element.spotifyEmbed) {
              item.innerHTML += `
                <div class='spotify-embed'>
                  ${element.spotifyEmbed}
                </div>
              `;
            }
            item.innerHTML += `
              <div class='spotify-action'>
                <a class='btn btn-success btn-sm btn-block' href='${element.spotifyUrl}' target='_blank'>Ouvir ${element.name} no Spotify</a>
              </a>
            `;
        });
      }
    }
    xhttp.open('GET', json, true);
    xhttp.send();
  }
}

customElements.define('app-sample-music', SampleMusicComponent);