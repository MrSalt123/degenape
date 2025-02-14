import React, { useState, useEffect } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Card from 'react-bootstrap/Card';
import phantom from './assets/images/phantom.svg';
import solana from './assets/images/solana.avif';
import swap from './assets/images/swap.svg';
import layer1 from './assets/images/layer1.png';
import layer2 from './assets/images/layer2.png';
import layer3 from './assets/images/layer3.png';
import bg2 from './assets/images/degenapebg2.png';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    console.log(isMobile);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Parallax pages={isMobile ? 3 : 2} style={{ top: 0, left: 0 }}>
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
                onClick={() => window.open("https://x.com/degenape420", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>X</p>
                <p>』</p>
              </div>
              <div
                className="flex gap-1 text-white text-xl hover:scale-110 hover:cursor-pointer transition-transform duration-200"
                onClick={() => window.open("https://t.me/degenape_portal", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>TG</p>
                <p>』</p>
              </div>
              <div
                className="flex gap-1 text-white text-xl hover:scale-110 hover:cursor-pointer transition-transform duration-200"
                onClick={() => window.open("https://dexscreener.com/solana/eltnkcceyqcd1dpwy8jnm13funcdmquqxc9qe3oomoon", "_blank")}
              >
                <p>『</p>
                <p className='drop-shadow-[2px_2px_0px_black]'>MOON</p>
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

{/*
        <ParallaxLayer offset={1} speed={0.3}>
          <div className="flex justify-center items-center h-screen w-screen">
            <img className="w-full h-full p-5 rounded-2xl" src={bg2} alt="Background" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.15}>
          <div className='flex flex-col h-full w-full items-start justify-center ml-5 p-5 gap-5 text-white'>
            <p className='text-6xl definition'>DEGENAPE</p>
            <p className='definition-text text-4xl'>/dəˈjenāp/</p>
            <p className='definition-text text-4xl drop-shadow-[2px_2px_0px_black]'>The inner spirit animal of a degen crypto trader, symbolizing an embrace of volatility, meme culture, and unrelenting diamond-handedness.</p>
          </div>
        </ParallaxLayer>

 */}
        {/* PIXEL MONKEY LAYERS */}
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="w-full h-full flex flex-col justify-center">
            {!isMobile && (
              <>
                <img className="w-full h-1/3" src={layer1} />
                <img className="w-full h-1/3" src={layer2} />
                <img className="w-full h-1/3" src={layer3} />
              </>
            )}
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.15}>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center">
            <p className="mt-5 buy-text text-4xl font-bold">How to Buy</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile? 1.1 : 1} speed={.35}>
          <div className={`h-full w-full flex ${isMobile ? 'flex-col' : 'justify-center'} items-center gap-5 p-5`}>
            <Card style={{ width: '18rem', boxShadow: '10px 10px 5px' }} className="d-flex flex-column">
              <Card.Img variant="top" src={phantom} />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title className="card-title text-center">Set up a wallet</Card.Title>
                <Card.Text className="flex-grow-1 text-center card-text">
                  Download a Solana-compatible wallet (Phantom, Solflare, Sollet, etc.).
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', boxShadow: '10px 10px 5px' }} className="d-flex flex-column">
              <Card.Img variant="top" src={solana} />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title className="card-title text-center">Buy SOL</Card.Title>
                <Card.Text className="flex-grow-1 text-center card-text">
                  Acquire SOL from a supported exchange and send SOL to your wallet.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', boxShadow: '10px 10px 5px' }} className="d-flex flex-column">
              <Card.Img variant="top" src={swap} />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title className="card-title text-center">Swap SOL for DAPE</Card.Title>
                <Card.Text className="flex-grow-1 text-center card-text">
                  Copy the CA below and then swap SOL for DAPE either through a DEX or directly in your wallet.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 2.8 : 1.8} speed={.5}>
          <div className='flex justify-center items-center p-5 w-full'>
            <p className='ca-text drop-shadow-[2px_2px_0px_white]'>CA: ELtNkccEyqCD1dPWY8jnM13FUNcdMQUQxc9qE3oomoon</p>
          </div>
        </ParallaxLayer>



      </Parallax>
    </div>
  );
}

export default App;
