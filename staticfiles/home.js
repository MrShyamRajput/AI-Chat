const websocket = new WebSocket("wss://ai-chat-vscs.onrender.com/ws/chat/");
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

websocket.onopen = () => {
  console.log("connected ho gaya bro");
};

websocket.onmessage = (e) => {
  
  data = JSON.parse(e.data);
  mesg = data.message;
  chatBox.scrollTop = chatBox.scrollHeight;
  chatBox.innerHTML += `<div class="server message">
       ${mesg}
      </div>`;
  console.log(mesg);
};

const sendMessage = () => {
  if (input.value === "") return;
  websocket.send(JSON.stringify({ message: input.value }));
  chatBox.innerHTML += `<div class="user message">
        ${input.value}
      </div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
  input.focus();
};

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
})
