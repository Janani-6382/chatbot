const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const emotions = {
    "happy": ["I'm glad to hear that!", "That's great!", "I'm happy for you!"],
    "sad": ["Sorry to hear that.", "That's tough.", "I'm here for you."],
    "angry": ["I understand why you're upset.", "That's frustrating.", "Let's talk about it."],
    "excited": ["That's awesome!", "I'm excited for you!", "Let's celebrate!"],
    "bored": ["Let's find something to do.", "I'm here to chat.", "What's on your mind?"]
};

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${message}`;
        chatLog.appendChild(userMessage);

        const chatbotResponse = getChatbotResponse(message);
        const chatbotMessage = document.createElement('div');
        chatbotMessage.textContent = `Chatbot: ${chatbotResponse}`;
        chatLog.appendChild(chatbotMessage);

        userInput.value = '';
    }
});

function getChatbotResponse(message) {
    message = message.toLowerCase();
    for (const emotion in emotions) {
        if (message.includes(emotion)) {
            return emotions[emotion][Math.floor(Math.random() * emotions[emotion].length)];
        }
    }
    return "I'm not sure I understand. Can you tell me more?";
}
