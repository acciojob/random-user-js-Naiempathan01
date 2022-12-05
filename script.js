//your code here
function renderText(domElt, text) {
    domElt.innerText = text;
  }
  
  function handleWord(text) {
    const textArr = text.split(" ");
    let wordCount = 0;
  
    for (word of textArr) {
      if (/[a-zA-Z0-9]/.test(word)) {
        wordCount += 1;
      }
    }
  
    return wordCount;
  }
  
  function handleChar(text) {
    return text.length;
  }
  
  function init() {
    const textArea = document.querySelector("textarea");
    const charDOM = document.querySelector("#letterCount");
    const wordDOM = document.querySelector("#wordCount");
  
    textArea.addEventListener("input", (event) => {
      const text = event.target.value.trim();
  
      renderText(wordDOM, handleWord(text));
      renderText(charDOM, handleChar(text));
    });
  }
  
  init();
