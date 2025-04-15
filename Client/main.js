const socket = new WebSocket("ws://localhost:3000");

function sendMessage(e) {
  e.preventDefault();
  const val = document.querySelector("input").value;
  if (val) {
    socket.send(val);
    document.querySelector("input").value = "";
  }
  document.querySelector("input").focus();
}

document.querySelector("form").addEventListener("submit", sendMessage);

//LISTENING FOR A MESSAGE

socket.addEventListener("message", ({ data }) => {
  const li = document.createElement("li");
  li.textContent = data;
  document.querySelector("ul").appendChild(li);
});
