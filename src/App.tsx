import { ethers, providers } from 'ethers';
import { useEffect, useState } from 'react';
import './App.css';
import { Web3ReactProvider } from '@web3-react/core'
import Wallet from './components/Wallet';

const getLibrary = (provider: any) => new providers.Web3Provider(provider);

declare let window: {
  ethereum: any
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className='main-app'>
        <h1>World's Best NFT</h1>
        <Wallet />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
