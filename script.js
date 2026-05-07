const chatBox =
    document.getElementById("chatBox");

const messageInput =
    document.getElementById("messageInput");

const sendBtn =
    document.getElementById("sendBtn");



function sendMessage() {

    const message =
        messageInput.value.trim();

    if (message === "") {
        return;
    }

    // User Message

    const userMessage =
        document.createElement("div");

    userMessage.classList.add(
        "message",
        "right"
    );

    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    // Auto Reply

    setTimeout(() => {

        const botMessage =
            document.createElement("div");

        botMessage.classList.add(
            "message",
            "left"
        );

        botMessage.innerText =
            "Message received successfully ✅";

        chatBox.appendChild(botMessage);

        chatBox.scrollTop =
            chatBox.scrollHeight;

    }, 1000);

    messageInput.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}



sendBtn.addEventListener(
    "click",
    sendMessage
);



messageInput.addEventListener(
    "keypress",
    function (e) {

        if (e.key === "Enter") {

            sendMessage();

        }

    }
);