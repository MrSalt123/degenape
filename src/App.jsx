import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hotbox from './assets/images/hotbox.jpg';
import phantom from './assets/images/phantom.svg';
import solana from './assets/images/solana.avif';
import swap from './assets/images/swap.svg';

function App() {
  return (
    <div>
      <Parallax pages={2} style={{ top: 0, left: 0 }}>
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <div className='landing-page h-full w-full'></div>
        </ParallaxLayer>


        <ParallaxLayer
          offset={0}
          speed={.5}
        >
          <div className="landing-page-text h-full w-full flex flex-col justify-center items-center">

            {/* Top Left Social Links */}
            <div className="top-left-text absolute top-5 left-5 flex flex-col">
              <div
                className="flex gap-1 text-white text-xl hover:scale-110 hover:cursor-pointer transition-transform duration-200"
                onClick={() => window.open("https://x.com/", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>X</p>
                <p>』</p>
              </div>
              <div
                className="flex gap-1 text-white text-xl hover:scale-110 hover:cursor-pointer transition-transform duration-200"
                onClick={() => window.open("https://t.me/", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>TG</p>
                <p>』</p>
              </div>
              <div
                className="flex gap-1 text-white text-xl hover:scale-110 hover:cursor-pointer transition-transform duration-200"
                onClick={() => window.open("https://pump.fun", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>PUMP</p>
                <p>』</p>
              </div>
              <div
                className="flex gap-1 text-white text-xl hover:scale-110 hover:cursor-pointer transition-transform duration-200"
                onClick={() => window.open("https://dexscreener.com", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>DEX</p>
                <p>』</p>
              </div>
            </div>

            {/* Centered Main Text */}
            <p className="text-white text-4xl font-bold drop-shadow-[2px_2px_0px_black]">
              DEGENAPE
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div className="bg-[rgb(241,241,241)] h-full w-full"></div>
        </ParallaxLayer>

        {/* White Section */}
        <ParallaxLayer 
          offset={1}
          speed={.25}>
          <div className='buy-text h-10 w-full flex justify-center mt-5'>
            <p className='text-4xl drop-shadow-[2px_2px_0px_gray]'>HOW TO BUY</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={.3}
        >
          <div className="h-full w-full flex justify-center items-center gap-5">
            <Card style={{ width: '18rem', boxShadow: '10px 10px 5px'  }}>
              <Card.Img variant="top" src={phantom} />
              <Card.Body>
                <Card.Title>Set up a wallet</Card.Title>
                <Card.Text>
                  Download a solana compatible wallet (Phantom, Solflare, Sollet, etc.)
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', boxShadow: '10px 10px 5px' }}>
              <Card.Img variant="top" src={solana} />
              <Card.Body>
                <Card.Title>Fund your wallet with SOL</Card.Title>
                <Card.Text>
                  Acquire SOL from a supported exchange (Coinbase, Binance, etc.)
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', boxShadow: '10px 10px 5px'  }}>
              <Card.Img variant="top" src={swap} />
              <Card.Body>
                <Card.Title>Swap SOL for DAPE</Card.Title>
                <Card.Text>
                  Copy the CA below and then swap SOL for DAPE either through a DEX or directly in your wallet
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
