let gameContainer = Array.from(document.getElementsByClassName("cell"));
var user = 1;
var user1 = [];
var user2 = [];
let isgameover = false;

function checkIfWon(user) {
  // row
  // col
  for (let i = 0; i < user.length; i++) {
    for (let j = i + 1; j < user.length; j++) {
      for (let k = j + 1; k < user.length; k++) {
        if (user[i].x == user[j].x && user[j].x == user[k].x) {
          return true;
        }
        if (user[i].y == user[j].y && user[j].y == user[k].y) {
          return true;
        }
        if (
          user[i].x == user[i].y &&
          user[j].x == user[j].y &&
          user[k].x == user[k].y
        ) {
          return true;
        }
        if (
          user[i].x == user[k].y &&
          user[j].x == user[j].y &&
          user[k].x == user[i].y
        ) {
          return true;
        }
      }
    }
  }
}

gameContainer.forEach(element => {
  element.addEventListener("click", () => {
    if (user == 1 && !isgameover) {
      document.getElementsByClassName("info")[0].innerText = "Turn of User 2";
      user = 1 - user;
      document.getElementById(element.id).innerText = "X";
      addRowCol(parseInt(element.id), user1);
      if (user1.length > 2) {
        if (checkIfWon(user1)) {
          isgameover = true;
        }
      }
    } else if (user == 0 && !isgameover) {
      document.getElementsByClassName("info")[0].innerText = "Turn of User 1";
      user = 1 - user;
      document.getElementById(element.id).innerText = "0";
      addRowCol(parseInt(element.id), user2);
      if (user2.length > 2) {
        if (checkIfWon(user2)) {
          isgameover = true;
        }
      }
    }
    if (user1.length + user2.length == 9) {
      document.getElementsByClassName("info")[0].innerText =
        "No one won. Press reset to continue.";
    }
    if (isgameover) {
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.getElementsByClassName("info")[0].innerText =
        "User " + parseInt(user + 1) + " won";

      user1 = [];
      user2 = [];
    }
  });
});

function addRowCol(id, user) {
  switch (id) {
    case 1:
      user.push({ x: 1, y: 1 });
      break;
    case 2:
      user.push({ x: 1, y: 2 });
      break;
    case 3:
      user.push({ x: 1, y: 3 });
      break;
    case 4:
      user.push({ x: 2, y: 1 });
      break;
    case 5:
      user.push({ x: 2, y: 2 });
      break;
    case 6:
      user.push({ x: 2, y: 3 });
      break;
    case 7:
      user.push({ x: 3, y: 1 });
      break;
    case 8:
      user.push({ x: 3, y: 2 });
      break;
    case 9:
      user.push({ x: 3, y: 3 });
      break;
    default:
      break;
  }
}

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".cell");
  Array.from(boxtexts).forEach(element => {
    element.innerText = "";
  });

  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn of User 1";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
  user1 = [];
  user2 = [];
});
