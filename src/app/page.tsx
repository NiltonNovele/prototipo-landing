"use client";

import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Functions from "../components/Functions";
import Product from "../components/Product";
import Pricing from "../components/Pricing";
import About from "../components/About";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "258847529665";

const whatsappMessage = encodeURIComponent(
  "Olá, vim pelo site Loja.Sale e gostaria de saber mais sobre como criar a minha loja online."
);

function FloatingWhatsApp() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const collapseButton = () => {
      setExpanded(false);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setExpanded(true);
      }, 1600);
    };

    window.addEventListener("scroll", collapseButton);
    window.addEventListener("touchstart", collapseButton);
    window.addEventListener("mousemove", collapseButton);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", collapseButton);
      window.removeEventListener("touchstart", collapseButton);
      window.removeEventListener("mousemove", collapseButton);
    };
  }, []);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "18px",
        bottom: "22px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: expanded ? "10px" : "0px",
        width: expanded ? "auto" : "56px",
        height: "56px",
        padding: expanded ? "0 18px" : "0",
        borderRadius: "999px",
        background: "#25D366",
        color: "#fff",
        fontWeight: 700,
        fontSize: "14px",
        textDecoration: "none",
        boxShadow: "0 14px 35px rgba(37, 211, 102, 0.35)",
        transition: "all 0.28s ease",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <FaWhatsapp size={24} />

      <span
        style={{
          maxWidth: expanded ? "140px" : "0px",
          opacity: expanded ? 1 : 0,
          transition: "all 0.25s ease",
          overflow: "hidden",
        }}
      >
        Fale connosco
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Functions />
      <About />
      <Functions />
      <Features />
      <Pricing />

      <FloatingWhatsApp />
    </main>
  );
}