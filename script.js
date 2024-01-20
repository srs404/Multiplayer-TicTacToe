var game = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function setBox(box) {
    if (game[box] == 0) {
        game[box] = 1;
        document.getElementById(box).innerHTML = "X";
        checkWin();
        computerTurn();
    }
}

function computerTurn() {
    var random = Math.floor(Math.random() * 9);
    if (game[random] == 0) {
        game[random] = 2;
        document.getElementById(random).innerHTML = "O";
        checkWin();
    } else {
        computerTurn();
    }
}

function checkWin() {
    if (game[0] == game[1] && game[1] == game[2] && game[0] != 0) {
        alert(game[0] + " won!");
        reset();
    } else if (game[3] == game[4] && game[4] == game[5] && game[3] != 0) {
        alert(game[3] + " won!");
        reset();
    } else if (game[6] == game[7] && game[7] == game[8] && game[6] != 0) {
        alert(game[6] + " won!");
        reset();
    } else if (game[0] == game[3] && game[3] == game[6] && game[0] != 0) {
        alert(game[0] + " won!");
        reset();
    } else if (game[1] == game[4] && game[4] == game[7] && game[1] != 0) {
        alert(game[1] + " won!");
        reset();
    } else if (game[2] == game[5] && game[5] == game[8] && game[2] != 0) {
        alert(game[2] + " won!");
        reset();
    } else if (game[0] == game[4] && game[4] == game[8] && game[0] != 0) {
        alert(game[0] + " won!");
        reset();
    } else if (game[2] == game[4] && game[4] == game[6] && game[2] != 0) {
        alert(game[2] + " won!");
        reset();
    } else if (game[0] != 0 && game[1] != 0 && game[2] != 0 && game[3] != 0 && game[4] != 0 && game[5] != 0 && game[6] != 0 && game[7] != 0 && game[8] != 0) {
        alert("Draw!");
        reset();
    }
}

function reset() {
    for (var i = 0; i < 9; i++) {
        game[i] = 0;
        document.getElementById(i).innerHTML = "/";
    }
}