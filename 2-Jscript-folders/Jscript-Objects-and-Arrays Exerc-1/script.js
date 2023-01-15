const characters = [
  { name: "Luffy", health: 100 },
  { name: "Zorro", health: 100 },
  { name: "Chopper", health: 100 },
];

const opponent = {
  name: "Kaido",
  health: 150,
};

for (let character of characters) {
  console.log("character before: ", character);
  console.log("opponent before: ", opponent);

  const characterPick = prompt("Pick a character by number (1, 2, or 3)!");

  if (characterPick === null) break;

  characters[Number(characterPick) - 1].health -= 5;
  opponent.health -= 5;

  console.log("character after: ", character);
  console.log("opponent after: ", opponent);
}
