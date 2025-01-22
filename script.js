const playerName = document.querySelector("#name");
const playerLastName = document.querySelector("#lastname");
const addedPlayer = document.querySelector(".addedName");
const ul = document.createElement("ul");
const main = document.querySelector("main");
const cleanInputs = document.querySelectorAll("#name, #lastname");

document.querySelector("#addPlayersForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const player = `Adicionado: ${playerName.value} ${playerLastName.value}`;
  li.innerText = player;
  ul.appendChild(li);
  main.appendChild(ul);
  cleanInputs.forEach((i) => i.value = "");
});