import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Functions from "../components/Functions";
import Product from "../components/Product";
import Pricing from "../components/Pricing";
import About from "../components/About";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "258847529665"; // replace with your real WhatsApp number

const whatsappMessage = encodeURIComponent(
  "Olá, vim pelo site Loja.Sale e gostaria de saber mais sobre como criar a minha loja online."
);

function FloatingWhatsApp() {
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
        gap: "10px",
        padding: "12px 16px",
        borderRadius: "999px",
        background: "#25D366",
        color: "#fff",
        fontWeight: 700,
        fontSize: "14px",
        textDecoration: "none",
        boxShadow: "0 14px 35px rgba(37, 211, 102, 0.35)",
      }}
    >
      <FaWhatsapp size={24} />
      <span>Fale connosco</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Functions />
      <About />
      {/* <Features /> */}
      <Functions />
      {/* <Audience /> */}
      {/* <Product /> */}
      <Features />
      <Pricing />

      <FloatingWhatsApp />
    </main>
  );
}