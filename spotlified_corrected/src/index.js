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
    const link = document.createElement("a");
    link.href = "#";
    const img = document.createElement("img");
    img.src = artist.image_url;
    link.appendChild(img);
    const div = document.createElement("div");
    div.innerHTML = artist.name;
    div.classList.add("artist-list-item-title");
    link.appendChild(div);
    sectionArtist.appendChild(link);
  });
};

displayArtists(await getArtists());
