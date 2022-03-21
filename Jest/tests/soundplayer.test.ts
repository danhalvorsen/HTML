import { mocked } from 'ts-jest/utils';
import { SoundPlayer } from '../src/soundplayer';

jest.mock('./sound-player', () => {
  return {
    SoundPlayer: jest.fn().mockImplementation(() => {
      return {
        playSoundFile: () => {},
      };
    })
  };
});

describe('SoundPlayerConsumer', () => {
  const MockedSoundPlayer = mocked(SoundPlayer, true);

  beforeEach(() => {
   // Clears the record of calls to the mock constructor function and its methods
   MockedSoundPlayer.mockClear();

  });

  it('We can check if the consumer called the class constructor', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(MockedSoundPlayer).toHaveBeenCalledTimes(1);
  });

}