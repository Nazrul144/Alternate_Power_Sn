import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/providers/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Roboto
const roboto = Roboto({
  variable: "--font-roboto", // Define a CSS variable for Roboto
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata = {
  title: {
    default: "Alternate Power Solutions",
    template: "%s | Alternate Power Solutions",
  },
  description: "Alternate Power Solutions Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
        <div>
          <Navbar />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          />
          {children}
          <Footer />
        </div>
        <ToastContainer position="top-center" />

      </body>

    </html>
  );
}

