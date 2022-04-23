console.log("Hello Tomcio");

const coachText = document.querySelector(".coach__carleto--text-js");
console.log(coachText);

coachText.innerHTML = "Włoski trener i piłkarz z wieloma sukcesami na koncie";
/*
const visitor = prompt("Jak masz na imię przyjacielu?");

alert(`Witaj ${visitor} poglądaj sobie troszeczkę`);
*/

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(`.special-js`, `${visitor}`);
