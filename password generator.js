updateHtml();

function updateHtml() {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "h1");
  h1.textContent = "Password Generator";
  document.body.appendChild(h1);
  const div = document.createElement("div");
  div.setAttribute("id", "div");
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h2");
  h2.textContent = "Generate a Password";
  div.appendChild(h2);
  const hr = document.createElement("hr");
  div.appendChild(hr);
  const textarea = document.createElement("textarea");
  textarea.readOnly = true;
  textarea.setAttribute("id", "textarea");
  textarea.setAttribute("placeholder", "Your Secure Password");
  div.appendChild(textarea);
  const hr2 = document.createElement("hr");
  div.appendChild(hr2);
  const button = document.createElement("button");
  button.setAttribute("id", "generate");
  button.textContent = "Generate Password";
  div.appendChild(button);
  const button2 = document.createElement("button");
  button2.disabled = true;
  button2.setAttribute("id", "copy");
  button2.textContent = "Copy to Clipboard";
  div.appendChild(button2);
  document.body.appendChild(div);
}

const generateButton = document.querySelector("#generate");
const copyButton = document.querySelector("#copy");

generateButton.addEventListener("click", function() {
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter password length between 8 and 128");
  }

  var [includeSpecialChars, includeUppercaseChars, includeLowercaseChars, includeDigits] = [false, false, false, false];
  while (!includeSpecialChars && !includeUppercaseChars && !includeLowercaseChars && !includeDigits) {
    includeSpecialChars = confirm("Include special characters?");
    includeUppercaseChars = confirm("Include UPPERCASE?");
    includeLowercaseChars = confirm("Include lowercase?");
    includeDigits = confirm("Include digits?");
  }

  var charSet = "";
  if (includeUppercaseChars) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercaseChars) charSet += "abcdefghijklmnopqrstuvwxyz";
  if (includeSpecialChars) charSet += "!#$%&'()*+,-./:;<=>?@{|}~";
  if (includeDigits) charSet += "0123456789";

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = (Math.random() * 100) % charSet.length;
    password += charSet.charAt(randomIndex);
  }
  const textAreaElement = document.querySelector("textarea");
  textAreaElement.textContent = password;
  copyButton.disabled = false;
});

copyButton.addEventListener("click", function() {
  const password = document.querySelector("textarea");
  password.select();
  password.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied:\n" + password.value);
  password.textContent = "";
  this.disabled = true;
});
