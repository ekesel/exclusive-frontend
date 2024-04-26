"use client";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { useEffect, useState } from "react";
import TopBanner from "./components/TopBanner";
import { loginConfig } from "./api/login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [topBanner, setTopBanner] = useState({});
  const [siteName, setSiteName] = useState('');
  const [supportDetails, setSupportDetails] = useState([]);
  const [appDetails, setAppDetails] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(()=> {
    loginConfig({}).then((response) => {
      setTopBanner(response?.data?.top_banner);
      setSiteName(response?.data?.site_name)
      setSupportDetails(response?.data?.support_details)
      setAppDetails(response?.data?.app_details)
      setSocialLinks(response?.data?.social_links)
    });
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner data={topBanner} />
        <NavBar site_name={siteName} active={'login'} />
        {children}
        <Footer supportDetails={supportDetails} appDetails={appDetails} socialLinks={socialLinks} /></body>
    </html>
  );
}
