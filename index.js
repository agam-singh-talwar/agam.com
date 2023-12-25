const greetings = [
  "Hello!",
  "Let's debug!",
  "Sat Sri Akaal!",
  "cout << 'Hello World!' << endl;",
  "Namaste!",
  "Gym Time!",
  "Bonjour!",
  "Mini Golf?",
];
let currentGreeting = 0;
let letterCount = 0;
let currentText = "";
let letterInterval;

function typeGreeting() {
  if (letterCount < greetings[currentGreeting].length) {
    currentText += greetings[currentGreeting][letterCount];
    letterCount++;
    document.getElementById("greeting").textContent = "👋 " + currentText;
  } else {
    clearInterval(letterInterval);
    setTimeout(nextGreeting, 2000);
  }
}

function nextGreeting() {
  currentGreeting = (currentGreeting + 1) % greetings.length;
  letterCount = 0;
  currentText = "";
  letterInterval = setInterval(typeGreeting, 200);
}

letterInterval = setInterval(typeGreeting, 200);
