import type { Metadata } from "next";
import { Inter, Roboto, Sacramento } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-roboto",
});
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

const baseURL = process.env.MY_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
  title: "Next App Boilerplate",
  description: "My Nextjs boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${sacramento.variable}`}>
        <div className="w-screen h-screen">
          {/* Navbar */}
          {children}
          {/* Footer */}
        </div>
      </body>
    </html>
  );
}
