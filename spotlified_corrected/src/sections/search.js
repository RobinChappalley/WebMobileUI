import { search } from "../api";
const inputField = document.querySelector("#search-input");
const loupe = document.querySelector("#search-trigger");

loupe.addEventListener("click", () => {
  toggleSearch();
});

const toggleSearch = () => {
  inputField.classList.toggle("active");
  inputField.focus();
};

inputField.addEventListener("change", async () => {
  const retour = await search(inputField.value);
  console.table(retour);
  return retour;
});
