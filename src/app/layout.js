"use client";

import { useTranslation } from "react-i18next";
import "../lib/i18n";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import BottomHeader from "@/components/BottomHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <title>Sector Technology</title>
      </head>
      <body>
        <header className="sticky top-0 z-10 bg-[#fff] shadow-[0_5px_30px_0_#00000026]">
          <TopHeader />
          <MainHeader />
          <hr />
          <BottomHeader />
        </header>
        <main>{children}</main>
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
