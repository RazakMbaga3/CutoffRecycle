import { Mulish } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/history";
import StyledJsxRegistry from './registry'
import Script from 'next/script'

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "CutOff Recycle | Recycling Hair Waste into Organic Fertilizers",
  description: "We collect and recycle human hair waste into organic fertilizers that support agricultural development and environmental conservation.",
};

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased font-mulish`}>
        <AuthProvider>
          <StyledJsxRegistry>
            <div style={{position: 'fixed',top: '20px',right: '20px',zIndex: 9999}}>
  <div style={{background:'#735b27',color:'#ffffff',padding:'20px 20px 30px 20px',borderRadius:'10px',boxShadow:'0 8px 16px rgba(0,0,0,0.3)',width: '320px',animation: 'fadeInUp 0.5s ease-out',position: 'relative',overflow: 'hidden'}}>
    <button style={{position:'absolute',top:'8px',right:'8px',background:'transparent',border:'none',color:'#ffffff',fontSize: '22px',cursor: 'pointer',lineHeight: 1}}>×</button>
    <div style={{fontSize: '40px',textAlign: 'center',marginBottom: '10px'}}>🛒</div>
    <h2 style={{margin: '0 0 10px',fontSize: '22px',textAlign: 'center'}}>Order Faster on WhatsApp</h2>
    <p style={{margin: '0 0 20px',fontSize: '16px',lineHeight: 1.4,textAlign: 'center'}}>Pata oda yako haraka kwa WhatsApp</p>
    <button style={{background:'#50AD32',color:'#ffffff',border:'none',padding:'12px 20px',fontSize:'18px',borderRadius: '5px',cursor: 'pointer',transition: 'background 0.3s, transform 0.3s',display: 'block',margin:' 0 auto'}}>Order Now</button>
  </div>
</div>
        <Navbar />
        <main className="overflow-x-hidden">
          {children}

        </main>
        <Footer />
        </StyledJsxRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
