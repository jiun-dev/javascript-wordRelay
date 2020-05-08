const btn = document.querySelector("#button"); // document.queryselector(아이디)는 그 아이디의 태그를 가져온다

const dictionary = [];
btn.addEventListener("click", () => {
  const wordTag = document.querySelector("#word");
  const word = wordTag.textContent; // input은 value 나머지는 textContent
  const inputTag = document.querySelector("#input");
  const errorTag = document.querySelector("#error");
  const input = inputTag.value;
  if (dictionary.includes(input)) {
    errorTag.textContent = "중복입니다.";
  } else {
    if (word[word.length - 1] === input[0]) {
      wordTag.textContent = input;
      errorTag.textContent = "";
      inputTag.value = "";
      inputTag.focus();
    } else {
      errorTag.textContent = "땡";
      inputTag.value = "";
      inputTag.focus();
    }
  }
});
