class SampleMusicComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.loadStyle(shadow);
    this.loadView('/sampleMusic/sampleMusic.html', shadow);
    this.loadData('/sampleMusic/bands.json', shadow);
  }

  loadStyle(shadow) {
    const style = document.createElement('style');
    style.textContent = `
      .sample-music { margin: 0; padding: 0; list-style: none; }
      .sample-music li { font-size: 12px; }
      .sample-music li a { display: block; }
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
            item.innerHTML = `
              <div class='spotify-band'>
                <h2>${element.name}</h2>
                <a href='${element.link}'>Ver ${element.name} no Spotify</a>
              </a>
            `;
            menu.appendChild(item);
            if (element.spotifyEmbed) {
              item.innerHTML = `
                <div class='spotify-embed'>
                  ${element.spotifyEmbed}
                </div>
              `;
            }
        });
      }
    }
    xhttp.open('GET', json, true);
    xhttp.send();
  }
}

customElements.define('app-sample-music', SampleMusicComponent);