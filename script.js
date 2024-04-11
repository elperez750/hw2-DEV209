// Define an array to hold the words
let words = [];

// Use a loop to ask for 3 words
for (let i = 0; i < 3; i++) {
  let word = prompt(`Enter word ${i + 1}:`);
  words.push(word);
}

// Create an unordered list element
let ul = document.createElement("ul");

// Iterate over the words array to add each word as a list item

words.forEach((word) => {
  let li = document.createElement("li");
  li.textContent = word;
  ul.appendChild(li);
});

const firstButton = document.querySelector("button");

// Append the unordered list to the body of the document
document.body.insertBefore(ul, firstButton);

function capitalizeWords() {
  console.log(words);
  capArray = words.map((word) => word.toUpperCase());

  document.querySelector("ul").innerHTML = "";

  // Create and append list items in uppercase
  capArray.forEach((word) => {
    let li = document.createElement("li");
    li.textContent = word; // Already uppercase
    document.querySelector("ul").appendChild(li);
  });
}
document.getElementById("red").addEventListener("click", function () {
  document.querySelector("ul").style.color = "red";
});


document.getElementById("swap").addEventListener("click", swapLetters);
function swapLetters() {
    console.log("swapLetters");
  let swapArray = words.map(
    (word) =>
      word.charAt(word.length - 1) +
      word.substring(1, word.length - 1) +
      word.charAt(0)

  );
  document.querySelector("ul").innerHTML = "";


  swapArray.forEach((word) => {

    let li = document.createElement("li");
    li.textContent = word;
    document.querySelector("ul").appendChild(li);
  });
}


