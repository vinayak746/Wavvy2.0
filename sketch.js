const colorMap = {
  B: "Blue",
  Y: "Yellow",
  G: "Green",
};

const sourcePattern = ["BBY", "BYG", "YGG"];

const tiles = [];
for (const char in colorMap) {
  tiles.push({
    id: char,
    rules: { up: [], right: [], down: [], left: [] },
  });
}

for (let y = 0; y < sourcePattern.length; y++) {
  for (let x = 0; x < sourcePattern[y].length; x++) {
    const currentId = sourcePattern[y][x];
    const currentTile = tiles.find((t) => t.id === currentId);

    if (y > 0) {
      const upId = sourcePattern[y - 1][x];
      if (!currentTile.rules.up.includes(upId)) {
        currentTile.rules.up.push(upId);
      }
    }

    if (y < sourcePattern.length - 1) {
      const downId = sourcePattern[y + 1][x];
      if (!currentTile.rules.down.includes(downId)) {
        currentTile.rules.down.push(downId);
      }
    }

    if (x > 0) {
      const leftId = sourcePattern[y][x - 1];
      if (!currentTile.rules.left.includes(leftId)) {
        currentTile.rules.left.push(leftId);
      }
    }

    if (x < sourcePattern[y].length - 1) {
      const rightId = sourcePattern[y][x + 1];
      if (!currentTile.rules.right.includes(rightId)) {
        currentTile.rules.right.push(rightId);
      }
    }
  }
}
console.log(tiles);
