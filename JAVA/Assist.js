document.getElementById('work-together-button').addEventListener('click', function() {
    var chatSection = document.getElementById('chat-section');
    var button = document.getElementById('work-together-button');

    if (chatSection.classList.contains('hidden')) {
        chatSection.classList.remove('hidden');
        button.textContent = 'Close the AI chat';
    } else {
        chatSection.classList.add('hidden');
        button.textContent = "Let's Work Together";
    }
});

document.getElementById('send-button').addEventListener('click', function() {
    var userMessage = document.getElementById('user-input').value;
    var messagesContainer = document.getElementById('chat-box');

    if (userMessage.trim()) {
        var userMessageElement = document.createElement('div');
        userMessageElement.textContent = "You: " + userMessage;
        messagesContainer.appendChild(userMessageElement);

        document.getElementById('user-input').value = '';

        var aiMessageElement = document.createElement('div');

        if (userMessage.toLowerCase().includes('support')) {
            aiMessageElement.textContent = "AI: I'm here to provide support. What do you need help with?";
            var options = document.createElement('div');
            options.classList.add('chat-options');
            options.innerHTML = `
                <div class="chat-option" onclick="selectOption('technicalSupport')">Technical Support</div>
                <div class="chat-option" onclick="selectOption('accountSupport')">Account Support</div>
            `;
            messagesContainer.appendChild(options);
        } else if (userMessage.toLowerCase().includes('project')) {
            aiMessageElement.textContent = "AI: Sure! What help do you need with your project?";
            var options = document.createElement('div');
            options.classList.add('chat-options');
            options.innerHTML = `
                <div class="chat-option" onclick="selectOption('projectDetails')">Project Details</div>
                <div class="chat-option" onclick="selectOption('projectSupport')">Project Support</div>
            `;
            messagesContainer.appendChild(options);
        } else {
            aiMessageElement.textContent = "AI: I'm here to assist you! Can you please specify your request?";
        }

        messagesContainer.appendChild(aiMessageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

function selectOption(option) {
    var messagesContainer = document.getElementById('chat-box');
    var response = document.createElement('div');

    switch (option) {
        case 'technicalSupport':
            response.textContent = "AI: For technical support, please describe your issue.";
            messagesContainer.appendChild(response);

            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = 'Describe your issue...';
            inputField.id = 'technical-support-input';
            messagesContainer.appendChild(inputField);

            var submitButton = document.createElement('button');
            submitButton.textContent = 'Send';
            submitButton.onclick = function() {
                var issueDescription = document.getElementById('technical-support-input').value;
                if (issueDescription.trim()) {
                    var userMessageElement = document.createElement('div');
                    userMessageElement.textContent = "You: " + issueDescription;
                    messagesContainer.appendChild(userMessageElement);
                    document.getElementById('technical-support-input').value = '';

                    var aiMessageElement = document.createElement('div');
                    aiMessageElement.textContent = "AI: Thank you for providing the details. We will assist you shortly.";
                    messagesContainer.appendChild(aiMessageElement);
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
            };
            messagesContainer.appendChild(submitButton);
            break;

        case 'accountSupport':
            response.textContent = "AI: For account support, please provide your account details.";
            break;
        case 'projectDetails':
            response.textContent = "AI: Let's dive into your project details! What would you like to discuss?";
            messagesContainer.appendChild(response);

            var options = document.createElement('div');
            options.innerHTML = `
                <button onclick="selectOption('projectPlanning')">Project Planning</button>
                <button onclick="selectOption('development')">Development</button>
                <button onclick="selectOption('design')">Design</button>
                <button onclick="selectOption('testing')">Testing</button>
            `;
            messagesContainer.appendChild(options);
            break;
        case 'projectSupport':
            response.textContent = "AI: I can assist with project support. What part of the project do you need help with?";
            messagesContainer.appendChild(response);

            var options = document.createElement('div');
            options.innerHTML = `
                <button onclick="selectOption('projectPlanning')">Project Planning</button>
                <button onclick="selectOption('development')">Development</button>
                <button onclick="selectOption('design')">Design</button>
                <button onclick="selectOption('testing')">Testing</button>
            `;
            messagesContainer.appendChild(options);
            break;
        default:
            response.textContent = "AI: I'm here to assist you further!";
            break;
    }

    messagesContainer.appendChild(response);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
