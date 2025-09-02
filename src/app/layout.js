
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from './providers';

export const metadata = { 
  title: 'CoinToss - Fair Coin Toss', 
  description: 'Interactive coin toss with history, auth and leaderboard.' 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Navbar */}
          <Navbar />

          {/* Full yellow background */}
          <main className="py-10 bg-teal-200 min-h-screen">
            {/* Keep content centered */}
            <div className="container-app">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
