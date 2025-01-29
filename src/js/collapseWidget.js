export default class CollapseWidget {
  constructor() {
    this.collapseButton = document.querySelector('.collapse-button');
    this.collapseButtonOnClick = this.collapseButtonOnClick.bind(this);
    this.collapseButton.addEventListener('click', this.collapseButtonOnClick);
  }

  collapseButtonOnClick() {
    const collapseText = document.querySelector('.collapse-text');

    if (collapseText.style.height === '' || collapseText.style.height === '0px') {
      collapseText.style.height = collapseText.scrollHeight + 'px';
    } else {
      collapseText.style.height = '0';
    }
  }
}
