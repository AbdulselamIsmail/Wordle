let validWords;
let currentRow = 0;
let currentCol = 0;
let word;
let isWin;
let score;
let gameOver = false;

//site yüklendiğinde kelimeyi oluşturalım
$(document).ready(function () {
  $(document).ready(function () {
    fetch(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt"
    )
      .then((res) => res.text())
      .then((text) => {
        validWords = text
          .split("\n")
          .map((word) => word.trim().toLowerCase())
          .filter((word) => word.length === 5);

        getWord();
      });
  });
});

$("#playAgainBtn").click(newGame);

function getWord() {
  word = validWords[Math.floor(Math.random() * validWords.length)];
}

//Klavyedeki girişe göre işlemler
$(document).on("keydown", function (e) {
  let key = e.key;

  if (/^[a-zA-Z]$/.test(key)) {
    if (currentRow > 5) {
      return;
    }
    if (currentCol < 5) {
      getTile(currentRow, currentCol).text(key.toUpperCase());
      currentCol++;
    }
  } else if (key === "Enter") {
    if (gameOver) {
      newGame();
      return;
    }
    if (currentCol < 5) {
      showMessage("5 harfli bir kelime girmelisiniz!");
    } else {
      let guess = getCurrentGuess();

      if (!isValidWord(guess)) {
        showMessage("Kelime listesinde bulunamadi!");
      } else {
        //Eğer Kelime doğruysa oyunu bitirelim
        checkWord(guess, word);
        if (guess == word) {
          isWin = true;
          endGame(isWin);
          return;
        }
        currentRow++;
        currentCol = 0;
        if (currentRow > 5) {
          gameOver = true;
          endGame();
          return;
        }
      }
    }
  } else if (key === "Backspace") {
    if (currentCol > 0) {
      currentCol--;
      getTile(currentRow, currentCol).text("");
    }
  }
});

function newGame() {
  getWord();
  gameOver = false;
  isWin = false;
  currentRow = 0;
  currentCol = 0;

  // Oyun tahtasını sil
  $("#wordle-board").empty();

  // Oyun için yeni kutucuklar oluştur
  for (let i = 0; i < 6; i++) {
    const $row = $("<div>").addClass("row d-flex justify-content-center gap-2");
    for (let j = 0; j < 5; j++) {
      $("<div>").addClass("tile").appendTo($row);
    }
    $("#wordle-board").append($row);
  }

  // Klavye renkleri resetle
  $(".key").removeClass("correct present absent");

  $("#gameOverModal").modal("hide");
}

function getTile(row, col) {
  return $("#wordle-board .row").eq(row).find(".tile").eq(col);
}

function getCurrentGuess() {
  let guess = "";
  for (let i = 0; i < 5; i++) {
    guess += getTile(currentRow, i).text();
  }
  return guess.toLowerCase();
}

function isValidWord(word) {
  return validWords.includes(word);
}

function showMessage(msg) {
  $("#message").text(msg).hide().fadeIn();
  setTimeout(() => {
    $("#message").fadeOut();
  }, 2000);
}

//Tahmini kontrol etmek için fonksiyon
function checkWord(guess, word) {
  const guessLetters = guess.split("");
  const wordLetters = word.split("");
  const result = Array(5).fill("absent");

  // doğru harfleri işaretle
  for (let i = 0; i < 5; i++) {
    if (wordLetters[i] == guessLetters[i]) {
      result[i] = "correct";
      wordLetters[i] = null;
    }
  }

  // Olan harfleri işaretle
  for (let i = 0; i < 5; i++) {
    if (result[i] == "correct") continue;
    const index = wordLetters.indexOf(guessLetters[i]);
    if (index !== -1) {
      result[i] = "present";
      wordLetters[index] = null;
    }
  }
  // Renkeleri güncelleyelim
  const tiles = $("#wordle-board .row").eq(currentRow).find(".tile");
  for (let i = 0; i < 5; i++) {
    tiles[i].classList.add(result[i]);
  }

  // klavye renkleri de güncelleyelim
  updateKeyboard(result, guess);
}

function endGame() {
  if (!isWin) {
    $("#gameOverTitle").text("Game Over");
    $("#gameOverMessage").text(`The word was ${word}. Better luck next time!`);
  } else {
    $("#gameOverTitle").text("You Won!");
    $("#gameOverMessage").text(
      `Congratulations! You guessed the word in ${currentRow + 1} ${
        currentRow === 0 ? "try" : "tries"
      }.`
    );
  }
  gameOver = true;
  $("#gameOverModal").modal("show");
}

//Klavye kodu
$("#keyboard").on("click", ".key", function () {
  const key = $(this).data("key");

  if (gameOver && key !== "enter") {
    return;
  }

  if (/^[a-z]$/.test(key)) {
    if (currentRow > 5) return;
    if (currentCol < 5) {
      getTile(currentRow, currentCol).text(key.toUpperCase());
      currentCol++;
    }
  } else if (key === "enter") {
    if (currentCol < 5) {
      showMessage("5 harfli bir kelime girmelisiniz!");
    } else {
      let guess = getCurrentGuess();

      if (!isValidWord(guess)) {
        showMessage("Kelime listesinde bulunamadi!");
      } else {
        checkWord(guess, word);
        if (guess == word) {
          isWin = true;
          endGame(isWin);
          return;
        }
        currentRow++;
        currentCol = 0;
        if (currentRow > 5) {
          gameOver = true;
          endGame();
          return;
        }
      }
    }
  } else if (key === "backspace") {
    if (currentCol > 0) {
      currentCol--;
      getTile(currentRow, currentCol).text("");
    }
  }
});

function updateKeyboard(result, guess) {
  const guessLetters = guess.split("");

  guessLetters.forEach((letter, i) => {
    const $key = $(`.key[data-key="${letter}"]`);
    if (!$key.length) return;

    if (result[i] === "correct") {
      $key.addClass("correct");
    } else if (result[i] === "present" && !$key.hasClass("correct")) {
      $key.addClass("present");
    } else if (
      result[i] === "absent" &&
      !$key.hasClass("correct") &&
      !$key.hasClass("present")
    ) {
      $key.addClass("absent");
    }
  });
}
