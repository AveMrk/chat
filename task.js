const button = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
let chatInput = document.querySelector('.chat-widget__input');
let messages = document.querySelector( '.chat-widget__messages' );
let robotVocabulary = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'Кто тут?', 'Где ваша совесть??', 'Мы ничего не будем вам продавать'];

function arrayRandElement(arr){
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return hours + ':' + minutes;
}

button.addEventListener('click', (e) => {
    chat.classList.add('chat-widget_active');
})

chatInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        let text = chatInput.value.trim();
        if(text != ''){
            messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">
                ${text}
                </div>
            </div>
            `;
            chatInput.value = '';
                messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${getTime()}</div>
                    <div class="message__text">
                    ${arrayRandElement(robotVocabulary)}
                    </div>
                </div>
                `;
            if(document.querySelector('.chat-widget__messages-container').clientHeight < messages.scrollHeight){
                let messagesContainer = Array.from(document.querySelectorAll('.message'));
                messagesContainer[messagesContainer.length - 1].scrollIntoView(false);
            }
        }
    }
})

