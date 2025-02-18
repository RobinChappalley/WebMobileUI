class ArtistCover extends HTMLElement {
  static observedAttributes = ["image_url", "name"];
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <img src="${this.getAttribute("cover")}"/>
    <div class="artist-list-item-title">${this.getAttribute("name")}</div>
    `;
  }
}
customElements.define("artist-cover", ArtistCover);
console.log("It works !");

const URLS = {
  artists: `https://webmob-ui-22-spotlified.herokuapp.com/api/artists`,
};

const getArtists = async () => {
  const response = await fetch(URLS.artists);
  const artists = await response.json();
  return artists;
};

const displayArtists = async (artistTable) => {
  const sectionArtist = document.querySelector(".artist-list");
  sectionArtist.innerHTML = "";
  artistTable.forEach((artist) => {
    console.log(artist);
    const artistElement = document.createElement("artist-cover");
    artistElement.setAttribute("cover", artist.image_url);
    artistElement.setAttribute("name", artist.name);
    sectionArtist.appendChild(artistElement);
  });
};

displayArtists(await getArtists());
