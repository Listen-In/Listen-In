import { render } from '@testing-library/react';
import MusicComponent from '../components/MusicComponent';
import MusicProvider from '../utils/CarContext';

test('MusicComponent renders', () => {
  render(
    <MusicProvider>
      <MusicComponent />
    </MusicProvider>
  );
});
