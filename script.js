const btn = document.querySelector("#button"); // document.queryselector(아이디)는 그 아이디의 태그를 가져온다

btn.addEventListener("click", () => {
  const wordTag = document.querySelector("#word");
  const word = wordTag.textContent; // input은 value 나머지는 textContent
  const inputTag = document.querySelector("#input");
  const errorTag = document.querySelector("#error");
  const input = inputTag.value;

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
});

// "신'지운" 따옴표 안에 따옴표를 적어야 할 때 --> 서로 다른 따옴표를 써야한다.
