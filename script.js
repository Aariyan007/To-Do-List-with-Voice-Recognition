if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
    let taskInput = document.querySelector('#Taskinput');
    let taskList = document.querySelector('#Tasklst');

    taskInput.addEventListener("focus", () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        let translate = event.results[0][0].transcript;
        taskInput.value = translate;
        addTask();
    };

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText !== '') {
            let taskItem = document.createElement("li");
            taskItem.innerHTML = `
            <span>${taskText}</span><button>Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }
} else {
    alert("Your browser does not support speech recognition.");
}
