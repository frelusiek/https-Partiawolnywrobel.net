function addChannel() {
  const name = document.getElementById("channelName").value;
  if (!name) return;
  const list = document.getElementById("channelList");
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
  saveToLocal("channels", name);
}

function addUser() {
  const name = document.getElementById("userName").value;
  const role = document.getElementById("userRole").value;
  if (!name || !role) return;
  const list = document.getElementById("userList");
  const li = document.createElement("li");
  li.textContent = name + " – " + role;
  list.appendChild(li);
  saveToLocal("users", { name, role });
}

function sendMessage() {
  const text = document.getElementById("messageText").value;
  if (!text) return;
  const list = document.getElementById("messageList");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  saveToLocal("messages", text);
}

function saveToLocal(key, value) {
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push(value);
  localStorage.setItem(key, JSON.stringify(existing));
}
