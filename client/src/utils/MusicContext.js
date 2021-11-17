import React, { useContext } from 'react';

// Create our music context using React.CreateContext()
export const MusicContext = React.createContext();

// Create a custom hook that allows easy access to our MusicContext values
export const use Music = () => Context(MusicContext);

const randomNum = () => Math.floor(Math.random() * 20000);

// Creating our music provider. Accepts an argument of `props`
export default function MusicProvider(props) {
  const musics = [
    {
      id: randomNum(),
      singer: 'Elvis Presley',
      songwriter: 'Classic Rock',
      year: '1960',
      isRunning: false,
    },
    {
      id: randomNum(),
      singer: 'BTS',
      songwriter: 'K-POP',
      year: '2020',
      isRunning: false,
    },
  ];

  // The provider component will wrap all other components inside of it that need access to our global state
  return <MusicContext.Provider value={{ musics }} {...props} />;
}
