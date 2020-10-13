// sound-player.js
export class SoundPlayer {
  foo: string
  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName);
  }

  playSoundFile2 = (fileName) => {
    console.log('Playing sound file ' + fileName);
  }
}