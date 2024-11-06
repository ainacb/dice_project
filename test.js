function rollDice() {
  const diceType = parseInt(document.getElementById("diceType").value);
  const result = Math.ceil(Math.random() * diceType);

  document.getElementById(
    "result"
  ).textContent = `You rolled a D${diceType} and got: ${result}`;
}

// Mock Math.random
Math.random = () => 0.5;

// Run a simple test
let diceType = 10; // D6 dice
let expected = 5; // Expected result with Math.random() mocked to 0.5
let actual = rollDice(diceType);
if (actual === expected) {
  console.log("Test passed: Correct result");
} else {
  console.error(`Test failed: Expected ${expected}, but got ${actual}`);
}
