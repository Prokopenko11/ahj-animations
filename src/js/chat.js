export default class Chat {
  constructor() {
    this.addChat();

    this.form = document.querySelector('.chat-container-form');

    this.chatButton = document.querySelector('.chat-container-button');
    this.chatButtonOnClick = this.chatButtonOnClick.bind(this);
    this.chatButton.addEventListener('click', this.chatButtonOnClick);

    this.closeButton = document.querySelector('.form-close-button');
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.closeButton.addEventListener('click', this.closeButtonOnClick);
  }

  chatButtonOnClick() {
    this.form.classList.add('open');
    this.chatButton.classList.add('click');
  }

  closeButtonOnClick() {
    this.form.classList.remove('open');
    setTimeout(() => {
      this.chatButton.classList.remove('click');
    }, 100);
  }

  addChat() {
    const chat = `
      <button class="chat-container-button"></button>
      <form class="chat-container-form">
        <span class="form-close-button">&times;</span>
        <h2 class="chat-container-form-title">Напишите нам</h2>
        <textarea class="chat-container-form-textarea"></textarea>
        <button class="chat-container-form-button">Отправить</button>
      </form>
    `;

    const chatContainer = document.querySelector('.chat-container');
    chatContainer.insertAdjacentHTML('afterbegin', chat);
  }
}
