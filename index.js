function playGame(userChoice) {
    const choices = ["камень", "ножницы", "бумага"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];