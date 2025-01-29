export default class LikeButton {
  constructor() {
    this.likeButton = document.querySelector('.like-button');
    this.likeButtonOnClick = this.likeButtonOnClick.bind(this);
    this.likeButton.addEventListener('click', this.likeButtonOnClick);

    this.likeContainer = document.querySelector('.like-container');
  }

  likeButtonOnClick() {
    const like = this.createLike();
    this.likeContainer.append(like);

    like.addEventListener('animationend', () => {
      like.remove();
    });
  }

  createLike() {
    const like = document.createElement('img');
    like.classList.add('like');

    const endPositionY = 200;
    const endPositionX = this.getRandomInt(-50, 50);
    const trajectory = this.getRandomTrajectory();

    like.style.animation = `likeAnimation 500ms ease-out forwards, ${trajectory} 500ms ease-out forwards`;

    like.style.setProperty('--endPosX', `${endPositionX}%`);
    like.style.setProperty('--endPosY', `${endPositionY}px`);

    return like;
  }

  getRandomTrajectory() {
    const trajectories = ['trajectory1', 'trajectory2', 'trajectory3', 'trajectory4'];
    return trajectories[Math.floor(Math.random() * trajectories.length)];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
