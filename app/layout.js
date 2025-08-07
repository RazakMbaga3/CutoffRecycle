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
