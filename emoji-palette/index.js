let emoji = {};

fetch("data/emoji.json")
.then(response => response.json()
.then(data => emoji = data));

let emojiList = emoji.emoji;
let emojiButtonList = [];
let container = document.getElementById("grid-container");

for(let i = 0; i < emojiList.length; i++){
  let temp = document.createElement("button");
  temp.classList.add("copy-button");
  temp.innerHTML = emojiList[i];
  emojiButtonList.push(temp);
  temp.addEventListener('mousedown', (e) => {
    if(e.button != 0)
      return;

    navigator.clipboard.writeText(emojiList[i]);
  });
  document.body.appendChild(emojiButtonList[i]);
}
