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
