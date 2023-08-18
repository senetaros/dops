function playGame(userChoice) {
    const choices = ["камень", "ножницы", "бумага"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let winner;
    if (userChoice === computerChoice) {
        winner = "ничья";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") 
        (userChoice === "ножницы" && computerChoice === "бумага") 
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        winner = "Вы";
    } else {
        winner = "Компьютер";
    }
    console.log(`Вы показали ${userChoice}, компьютер показывает ${computerChoice}. Победил ${winner}.`);
}
