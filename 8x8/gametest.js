var player = 1;
var grid = [
  [(0, 0, 0, 0, 0, 0, 0, 0)],
  [(0, 0, 0, 0, 0, 0, 0, 0)],
  [(0, 0, 0, 0, 0, 0, 0, 0)],
  [(0, 0, 0, 1, 2, 0, 0, 0)],
  [(0, 0, 0, 2, 1, 0, 0, 0)],
  [(0, 0, 0, 0, 0, 0, 0, 0)],
  [(0, 0, 0, 0, 0, 0, 0, 0)],
  [(0, 0, 0, 0, 0, 0, 0, 0)],
  [(0, 0, 0, 0, 0, 0, 0, 0)],
];
function selectCell(Row, Col) {
  if (player == 1 && grid[Row][Col] == 0) {
    grid[Row][Col] = 1;
    player = 2;
    document.getElemetByid("color turn").inner.HTML = "Black Turn";
  } else if (player == 2 && grid[Row][Col] == 0) {
    grid[Row][Col] = 2;
    player = 1;
    document.getElementsById("color turn").inner.HTML = "White Turn";

    refreshGrid();
  }

  function refreshGrid() {
    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 8; col++) {
        if (grif[row][col] == 0) {
          document.getElementsById(
            "cell" + row + col
          ).childNodes[0].style.backgroundColor = "#129104";
        } else if (grif[row][col] == 1) {
          document.getElementsById(
            "cell" + row + col
          ).childNodes[0].style.backgroundColor = "#ffffff";
        } else if (grif[row][col] == 2) {
          document.getElementsById(
            "cell" + row + col
          ).childNodes[0].style.backgroundColor = "#000000";
        }
      }
    }
  }
}

refreshGrid();
