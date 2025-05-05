import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const YosikaWeb = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-8" style={{ fontFamily: 'Helvetica, sans-serif' }}>
      <style jsx global>{`
        @font-face {
          font-family: 'Monument Extended';
          src: url('/fonts/MonumentExtended-Regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Monument Extended';
          src: url('/fonts/MonumentExtended-Ultrabold.otf') format('opentype');
          font-weight: bold;
          font-style: normal;
        }
        @font-face {
          font-family: 'Helvetica';
          src: url('/fonts/Helvetica.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Helvetica';
          src: url('/fonts/Helvetica-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }
      `}</style>

      <header className="text-center mb-12">
        <div className="bg-white/50 backdrop-blur-sm rounded-full p-4 inline-block shadow-lg">
          <h1 className="text-5xl font-bold text-pink-400" style={{ fontFamily: 'Monument Extended, sans-serif' }}>Welcome to Yosika's Page</h1>
        </div>
        <p className="text-xl text-pink-300 mt-4">A special space just for you ❤️</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Chat Pacar */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl hover:scale-105 transition-all duration-300 border-2 border-pink-200">
          <CardContent className="p-8 text-center">
            <div className="bg-pink-100 rounded-full p-4 inline-block mb-4">
              <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-pink-400" style={{ fontFamily: 'Monument Extended, sans-serif' }}>Chat Pacar</h2>
            <p className="mt-2 text-pink-300">Send sweet messages and keep in touch.</p>
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
              <Button className="mt-6 bg-pink-300 text-white hover:bg-pink-400 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">Open Chat</Button>
            </a>
          </CardContent>
        </Card>

        {/* Galery */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl hover:scale-105 transition-all duration-300 border-2 border-pink-200">
          <CardContent className="p-8 text-center">
            <div className="bg-pink-100 rounded-full p-4 inline-block mb-4">
              <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-pink-400" style={{ fontFamily: 'Monument Extended, sans-serif' }}>Galery</h2>
            <p className="mt-2 text-pink-300">Browse through our special moments.</p>
            <Button className="mt-6 bg-pink-300 text-white hover:bg-pink-400 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">View Galery</Button>
          </CardContent>
        </Card>

        {/* Photobox */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl hover:scale-105 transition-all duration-300 border-2 border-pink-200">
          <CardContent className="p-8 text-center">
            <div className="bg-pink-100 rounded-full p-4 inline-block mb-4">
              <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-pink-400" style={{ fontFamily: 'Monument Extended, sans-serif' }}>Photobox</h2>
            <p className="mt-2 text-pink-300">Capture memories and fun moments.</p>
            <Button className="mt-6 bg-pink-300 text-white hover:bg-pink-400 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">Enter Photobox</Button>
          </CardContent>
        </Card>

        {/* Playlist */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl hover:scale-105 transition-all duration-300 border-2 border-pink-200">
          <CardContent className="p-8 text-center">
            <div className="bg-pink-100 rounded-full p-4 inline-block mb-4">
              <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-pink-400" style={{ fontFamily: 'Monument Extended, sans-serif' }}>Playlist</h2>
            <p className="mt-2 text-pink-300">Listen to your favorite songs.</p>
            <Button className="mt-6 bg-pink-300 text-white hover:bg-pink-400 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">Open Playlist</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default YosikaWeb; 