function tossCoin() {
    const tossOutcome = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById("result").textContent = `Result: ${tossOutcome}`;
  }