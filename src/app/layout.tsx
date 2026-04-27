import type { ReactNode } from "react";
import { Press_Start_2P } from "next/font/google";
import Header from "../components/header/header";
import "./globals.css";
import Footer from "../components/footer";

const pressStart: ReturnType<typeof Press_Start_2P> = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="es">
      <body className={`${pressStart.className} flex flex-col justify-between min-h-screen`} 
            style={{ margin: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
