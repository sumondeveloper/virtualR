
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],  // Include the font weights you need
  subsets: ['latin'],      // Include necessary subsets (e.g., latin)
});

export const metadata = {
  title: "virtualR company",
  description: "VirtualR company is the most popular software company for build web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar/>
        {children}
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer/>
          </div>
      </body>
    </html>
  );
}
