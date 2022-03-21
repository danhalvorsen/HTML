import {SoundPlayer} from '../src/soundplayer';

export class SoundPlayerConsumer {
  soundPlayer: any;
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}