const message = document.getElementById("message");
const emoji = document.getElementById("emoji");
const button = document.getElementById("revealBtn");
const userInput = document.getElementById("userInput");

button.addEventListener("click", getOmen);

async function getOmen() {
  const userValue = userInput.value.trim();

  if (userValue === "") {
    message.innerText = "You must first ask the spirits something...";
    emoji.innerText = "🕯️";
    return;
  }

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    message.innerText = `"${data.slip.advice}"`;
    emoji.innerText = getRandomOmenEmoji();
  } catch (error) {
    console.log(error);
    message.innerText = "The spirits are silent... (API error)";
    emoji.innerText = "💀";
  }
}

function getRandomOmenEmoji() {
  const emojis = ["🔮", "🌒", "🐦", "🔥", "💀", "🕯️", "🌀", "👁️"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
