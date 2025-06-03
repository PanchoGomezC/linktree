
import React from 'https://esm.sh/react'
import ReactDOM from 'https://esm.sh/react-dom/client'
import { motion, AnimatePresence } from 'https://esm.sh/framer-motion'
import { MousePointerClick, Globe, Youtube, Instagram, Linkedin, MessageCircle } from 'https://esm.sh/lucide-react'

const links = [
  { label: "Venta de Garage", url: "https://precious-gumdrop-185e5b.netlify.app/", icon: React.createElement(Globe, { className: "w-4 h-4 text-cyan-400" }) },
  { label: "Sitio 2nodos", url: "https://2nodos.cl", icon: React.createElement("img", { src: "https://i.imgur.com/8gEXk5I.png", className: "w-4 h-4", alt: "2nodos" }) },
  { label: "Instagram", url: "https://www.instagram.com/panchoppp/", icon: React.createElement(Instagram, { className: "w-4 h-4 text-cyan-400" }) },
  { label: "TikTok", url: "https://www.tiktok.com/@panchogomezc?is_from_webapp=1&sender_device=pc", icon: React.createElement(Youtube, { className: "w-4 h-4 text-cyan-400" }) },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/francisco-g%C3%B3mez-7544a1b/", icon: React.createElement(Linkedin, { className: "w-4 h-4 text-cyan-400" }) },
  { label: "Facebook", url: "https://www.facebook.com/panchogomezc", icon: React.createElement(Globe, { className: "w-4 h-4 text-cyan-400" }) },
];

const gpts = [
  { label: "Pepe Código", url: "https://chatgpt.com/g/g-6809503e54e48191920f37b3300e4de9-pepe-codigo" },
  { label: "Pancho Publicista", url: "https://chatgpt.com/g/g-cA0HtCW2a-pancho-publicista" },
  { label: "Johny Brief", url: "https://chatgpt.com/g/g-68064fa594d88191a991e26f02c6cef1-johny-brief" },
  { label: "Rolando Insights", url: "https://chatgpt.com/g/g-6808d9ba723c8191a1922c9ae4791b5a-rolando-insights" },
  { label: "Juan Llamados", url: "https://chatgpt.com/g/g-68064e8864108191a5e7143c78a07083-juan-llamados" },
  { label: "Prompt Engineering", url: "https://chatgpt.com/g/g-uFkuz8b3T-prompt-engineering" },
];

function App() {
  const [showMenu, setShowMenu] = React.useState(false)
  const [showGpts, setShowGpts] = React.useState(false)

  return React.createElement("div", { className: "relative min-h-screen bg-white text-black flex flex-col items-center justify-center p-4 sm:px-6 md:px-8" }, [
    React.createElement("img", {
      src: "https://i.imgur.com/y3bIwih.jpg",
      alt: "Fondo escritorio",
      className: "hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
    }),
    React.createElement("img", {
      src: "https://i.imgur.com/klfLzjO.png",
      alt: "Fondo móvil",
      className: "block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
    }),
    React.createElement("div", { className: "relative z-10 w-full sm:w-[80%] md:w-[60%] max-w-sm" }, [
      React.createElement("div", { className: "flex flex-col items-center mt-[-10%] md:mt-0" }, [
        React.createElement(motion.div, {
          whileHover: { scale: 1.05 },
          className: "flex items-center gap-2 text-xl font-medium bg-black/70 text-white px-4 py-2 rounded-lg cursor-pointer shadow-sm backdrop-blur-sm w-full",
          onClick: () => setShowMenu(!showMenu)
        }, [
          React.createElement(MousePointerClick, { className: "w-5 h-5 text-cyan-400" }),
          " Qué quieres hacer..."
        ]),
        React.createElement(AnimatePresence, {}, showMenu && React.createElement(motion.div, {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3, ease: "easeInOut" },
          className: "overflow-hidden mt-2 w-full"
        }, React.createElement("div", {
          className: "bg-black/80 text-white rounded-lg w-full shadow-md p-4 backdrop-blur-sm space-y-2"
        }, [
          ...links.map(({ label, url, icon }) =>
            React.createElement("a", {
              key: label,
              href: url,
              target: "_blank",
              className: "flex items-center gap-2 px-4 py-2 text-sm rounded hover:bg-black/60 transition-colors"
            }, [icon, label])
          ),
          React.createElement("div", {
            className: "cursor-pointer px-4 py-2 text-sm flex items-center gap-2 rounded hover:bg-black/60 transition-colors",
            onClick: () => setShowGpts(!showGpts)
          }, [
            React.createElement(MessageCircle, { className: "w-4 h-4 text-cyan-400" }),
            " GPTs Personalizados"
          ]),
          showGpts && React.createElement(motion.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: "mt-2 space-y-1 pl-2 border-l border-white/30"
          }, gpts.map(gpt =>
            React.createElement("a", {
              key: gpt.label,
              href: gpt.url,
              target: "_blank",
              className: "flex items-center gap-2 px-4 py-1 text-sm text-white rounded hover:bg-black/60 transition-colors"
            }, [
              React.createElement(MessageCircle, { className: "w-4 h-4 text-cyan-400" }),
              gpt.label
            ])
          ))
        ])))
      ])
    ])
  ])
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(React.createElement(App))
