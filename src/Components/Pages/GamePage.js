import Phaser from 'phaser';
import GameScene from '../Game/GameScene';
import cookieMgt from '../../utils/cookieMgt'

let game;

const GamePage = () => {

  const phaserGame = `
  height: 90%;
<div id="gameDiv" class="d-flex justify-content-center my-3">
</div>`;

  const main = document.querySelector('main');

  main.id = 'GamePage';

  main.innerHTML = phaserGame;

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: true,
      },
    },
    scene: [GameScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: 'gameDiv',
  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
  cookieMgt(main.id);
};

export default GamePage;
