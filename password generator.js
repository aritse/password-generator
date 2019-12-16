updateHtml();

function updateHtml() {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "h1");
  h1.textContent = "Password Generator";
  const div = document.createElement("div");
  div.setAttribute("id", "div");
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h2");
  h2.textContent = "Generate a Password";
  div.append(h2);
  const hr = document.createElement("hr");
  div.append(hr);
  const input = document.createElement("input");
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Your Secure Password");
  div.append(input);
  const hr2 = document.createElement("hr");
  div.append(hr2);
  const button = document.createElement("button");
  button.setAttribute("class", "button");
  button.textContent = "Generate Password";
  div.append(button);
  const button2 = document.createElement("button");
  button2.setAttribute("class", "button");
  button2.textContent = "Copy to Clipboard";
  div.append(button2);
  document.body.append(h1);
  document.body.append(div);
}
