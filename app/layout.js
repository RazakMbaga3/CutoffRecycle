import { Mulish } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/history";
import StyledJsxRegistry from './registry'

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "CutOff Recycle | Recycling Hair Waste into Organic Fertilizers",
  description: "We collect and recycle human hair waste into organic fertilizers that support agricultural development and environmental conservation.",
  keywords: "hair recycling, organic fertilizer, sustainable agriculture, Tanzania farming, eco-friendly fertilizer, hair waste management",
  openGraph: {
    title: "CutOff Recycle | Transforming Hair Waste into Agricultural Gold",
    description: "Join our sustainable journey in transforming hair waste into organic fertilizers for better agriculture.",
    images: ['/path-to-your-og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CutOff Recycle | Sustainable Hair Recycling',
    description: 'Innovative hair waste recycling for sustainable agriculture',
    images: ['/path-to-your-twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
