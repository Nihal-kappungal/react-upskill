import { useId, useState } from "react";

export const colorMap = {
  blue: {
    front: "from-[#70c9ff] via-[#3da9f5] to-[#1685dc]",
    back: "from-[#8ed5ff] via-[#54b6f7] to-[#2695e5]",
    edge: "bg-[#117dca]",
    glow: "shadow-[0_18px_45px_rgba(25,145,225,0.28)]",
  },
  purple: {
    front: "from-[#b98cff] via-[#9361ee] to-[#7441d5]",
    back: "from-[#c9a8ff] via-[#a978f5] to-[#8752e8]",
    edge: "bg-[#6c38c9]",
    glow: "shadow-[0_18px_45px_rgba(130,75,220,0.25)]",
  },
  green: {
    front: "from-[#78e5a1] via-[#45c97b] to-[#28aa5e]",
    back: "from-[#96efb7] via-[#64d992] to-[#39bc70]",
    edge: "bg-[#209b52]",
    glow: "shadow-[0_18px_45px_rgba(45,190,105,0.25)]",
  },
  orange: {
    front: "from-[#ffd27c] via-[#ffb632] to-[#f39413]",
    back: "from-[#ffe09b] via-[#ffc85d] to-[#ffa52a]",
    edge: "bg-[#e88b0b]",
    glow: "shadow-[0_18px_45px_rgba(245,160,30,0.25)]",
  },
  red: {
    front: "from-[#ff9a8a] via-[#fa5a4a] to-[#dd3224]",
    back: "from-[#ffb3a6] via-[#ff7a68] to-[#ea4a37]",
    edge: "bg-[#c22a1d]",
    glow: "",
  },
  yellow: {
    front: "from-[#ffe58a] via-[#ffcb3d] to-[#f0a91c]",
    back: "from-[#fff0ad] via-[#ffdb66] to-[#ffbb3a]",
    edge: "bg-[#d4900f]",
    glow: "",
  },
  gray: {
    front: "from-[#d4d7db] via-[#aeb2b8] to-[#8b8f96]",
    back: "from-[#e4e6e9] via-[#c3c6cb] to-[#9ea2a9]",
    edge: "bg-[#75787f]",
    glow: "",
  },
  pink: {
    front: "from-[#ffa8c5] via-[#ff6f9c] to-[#e84c80]",
    back: "from-[#ffc2d8] via-[#ff92b3] to-[#f06a95]",
    edge: "bg-[#d13868]",
    glow: "",
  },
  classic: {
    front: "bg-[#e8c17a]",
    back: "bg-[#f0cf96]",
    edge: "bg-[#c99a4f]",
    glow: "",
  },
  classicBlue: {
    front: "bg-[#5a9fd4]",
    back: "bg-[#7cb8e0]",
    edge: "bg-[#3d7fb5]",
    glow: "",
  },
  classicGray: {
    front: "bg-[#b8bcc2]",
    back: "bg-[#cdd0d5]",
    edge: "bg-[#9a9ea5]",
    glow: "",
  },
  sunset: {
    front: "from-[#ff6ec7] via-[#ff9a56] to-[#ffd452]",
    back: "from-[#ffa0dd] via-[#ffb87d] to-[#ffe185]",
    edge: "bg-[#e5457f]",
    glow: "shadow-[0_18px_45px_rgba(255,120,140,0.3)]",
  },
  holographic: {
    front: "from-[#a0e9ff] via-[#c9b6ff] to-[#ffb3ec]",
    back: "from-[#c5f3ff] via-[#e0d4ff] to-[#ffd6f5]",
    edge: "bg-[#9b7fd9]",
    glow: "shadow-[0_18px_45px_rgba(190,150,255,0.25)]",
  },
  galaxy: {
    front: "from-[#4a3f8f] via-[#2d2266] to-[#120a30]",
    back: "from-[#6a5cb0] via-[#453a85] to-[#241850]",
    edge: "bg-[#1a0f42]",
    glow: "shadow-[0_18px_45px_rgba(90,60,200,0.35)]",
  },
  aurora: {
    front: "from-[#6effc4] via-[#5ecbff] to-[#a985ff]",
    back: "from-[#9bffdb] via-[#8adfff] to-[#c7abff]",
    edge: "bg-[#3a9fb5]",
    glow: "shadow-[0_18px_45px_rgba(90,210,190,0.28)]",
  },
  prism: {
    front:
      "from-[#ff8a8a] via-[#ffd166] via-[#7ee787] via-[#66c7ff] to-[#c48bff]",
    back: "from-[#ffb3b3] via-[#ffe19c] via-[#a8f0ae] via-[#9ddcff] to-[#dcbaff]",
    edge: "bg-[#8a6bd9]",
    glow: "shadow-[0_18px_45px_rgba(160,140,255,0.28)]",
  },
  cyberpunk: {
    front: "from-[#ff2ec4] via-[#8b2fff] to-[#00e5ff]",
    back: "from-[#ff6ede] via-[#b06bff] to-[#5ff2ff]",
    edge: "bg-[#170a2e]",
    glow: "shadow-[0_18px_45px_rgba(255,20,200,0.45)]",
  },
  retro: {
    front: "from-[#f2c14e] via-[#e0793c] to-[#a94a2b]",
    back: "from-[#f6d67c] via-[#ec9a63] to-[#c46b46]",
    edge: "bg-[#7a3420]",
    glow: "",
  },
  anime: {
    front: "from-[#00e5ff] via-[#8a7dff] to-[#ff4fd8]",
    back: "from-[#7cf1ff] via-[#b4a9ff] to-[#ff9be8]",
    edge: "bg-[#4b2fae]",
    glow: "shadow-[0_18px_45px_rgba(138,125,255,0.4)]",
  },
  cartoon2d: {
    front: "bg-[#ff3b3b]",
    back: "bg-[#ff6b57]",
    edge: "bg-[#c41e1e]",
    glow: "",
  },
  outline: {
    front: "bg-[#fbfbfb]",
    back: "bg-[#e8e8e8]",
    edge: "bg-[#0a0a0a]",
    glow: "",
  },
  doodle: {
    front: "bg-[#fff4d6]",
    back: "bg-[#ffe9b3]",
    edge: "bg-[#ff6b4a]",
    glow: "",
  },
  mint: {
    front: "bg-[#7ee8c4]",
    back: "bg-[#a0f0d6]",
    edge: "bg-[#4fc99a]",
    glow: "",
  },
  lava: {
    front: "from-[#ff5e3a] via-[#c81e3a] to-[#3a0d0d]",
    back: "from-[#ff8a63] via-[#e0455a] to-[#5c1a1a]",
    edge: "bg-[#1f0505]",
    glow: "shadow-[0_18px_45px_rgba(255,60,30,0.4)]",
  },
  frost: {
    front: "from-[#e0f7ff] via-[#a8dfff] to-[#6cb8ec]",
    back: "from-[#f0fcff] via-[#c8ecff] to-[#8fceff]",
    edge: "bg-[#4a90c2]",
    glow: "shadow-[0_18px_45px_rgba(120,200,255,0.2)]",
  },
  neonlime: {
    front: "from-[#d4ff3f] via-[#a6ff00] to-[#5ecc00]",
    back: "from-[#e6ff8a] via-[#c4ff4d] to-[#8ce62a]",
    edge: "bg-[#3d8c00]",
    glow: "shadow-[0_18px_45px_rgba(170,255,0,0.4)]",
  },
  rosegold: {
    front: "from-[#f7cfc6] via-[#e8a798] to-[#c97b68]",
    back: "from-[#fce0da] via-[#f0c2b5] to-[#dba08e]",
    edge: "bg-[#b06a56]",
    glow: "shadow-[0_18px_45px_rgba(220,150,130,0.2)]",
  },
  midnight: {
    front: "from-[#2c3e6b] via-[#16213e] to-[#0a0f24]",
    back: "from-[#3f5285] via-[#243258] to-[#141b38]",
    edge: "bg-[#050811]",
    glow: "shadow-[0_18px_45px_rgba(30,50,120,0.3)]",
  },
  candy: {
    front: "from-[#ff6ec7] via-[#ffd93d] to-[#5ecbff]",
    back: "from-[#ff9adb] via-[#ffe985] to-[#8fdcff]",
    edge: "bg-[#d1409e]",
    glow: "shadow-[0_18px_45px_rgba(255,110,199,0.3)]",
  },
  forest: {
    front: "from-[#5a7d4a] via-[#3d5c30] to-[#243a1c]",
    back: "from-[#7a9c67] via-[#587a48] to-[#3a5230]",
    edge: "bg-[#1a2b13]",
    glow: "",
  },
  desert: {
    front: "from-[#e8c088] via-[#d9a05f] to-[#b87840]",
    back: "from-[#f0d3a8] via-[#e5b880] to-[#c9925a]",
    edge: "bg-[#9c6535]",
    glow: "",
  },
  ocean: {
    front: "from-[#4fd1e8] via-[#2596c9] to-[#0d5a8a]",
    back: "from-[#7de3f2] via-[#4fb3dd] to-[#2680b0]",
    edge: "bg-[#083f61]",
    glow: "shadow-[0_18px_45px_rgba(30,150,200,0.25)]",
  },
  cottonCandy: {
    front: "from-[#ffc2e2] via-[#d9b8ff] to-[#a8e0ff]",
    back: "from-[#ffdcee] via-[#e6d3ff] to-[#c5edff]",
    edge: "bg-[#c48fd9]",
    glow: "shadow-[0_18px_45px_rgba(220,180,255,0.25)]",
  },
  copper: {
    front: "from-[#e0925a] via-[#b8622f] to-[#8a4420]",
    back: "from-[#eeb082] via-[#d0824f] to-[#a85e30]",
    edge: "bg-[#6b3216]",
    glow: "",
  },
  matrix: {
    front: "from-[#3fff6b] via-[#0acc3a] to-[#003d0f]",
    back: "from-[#7dffa0] via-[#3ce065] to-[#0a5c22]",
    edge: "bg-[#001f08]",
    glow: "shadow-[0_18px_45px_rgba(30,255,80,0.35)]",
  },
  vaporwave: {
    front: "from-[#ff71ce] via-[#b967ff] to-[#01cdfe]",
    back: "from-[#ffa3e0] via-[#d3a0ff] to-[#7de3fc]",
    edge: "bg-[#7a2fb5]",
    glow: "shadow-[0_18px_45px_rgba(180,100,255,0.35)]",
  },
  unicorn: {
    front: "from-[#ffb3e6] via-[#c9b3ff] to-[#b3f0ff]",
    back: "from-[#ffd6f2] via-[#e0d6ff] to-[#d6f7ff]",
    edge: "bg-[#d98fd0]",
    glow: "shadow-[0_18px_45px_rgba(255,180,230,0.3)]",
  },
  plasma: {
    front: "from-[#ff6bff] via-[#c026ff] to-[#6a0dad]",
    back: "from-[#ffa3ff] via-[#dc6bff] to-[#9333ea]",
    edge: "bg-[#3b0764]",
    glow: "shadow-[0_18px_45px_rgba(200,50,255,0.5)]",
  },
  inferno: {
    front: "from-[#fff176] via-[#ff6b35] to-[#c81d11]",
    back: "from-[#fff9b0] via-[#ff9a66] to-[#e5453a]",
    edge: "bg-[#4a0a05]",
    glow: "shadow-[0_18px_45px_rgba(255,100,30,0.5)]",
  },
  electric: {
    front: "from-[#eafcff] via-[#4fd8ff] to-[#0080ff]",
    back: "from-[#ffffff] via-[#8ee8ff] to-[#4fb0ff]",
    edge: "bg-[#003d80]",
    glow: "shadow-[0_18px_45px_rgba(80,200,255,0.5)]",
  },
  supernova: {
    front: "from-[#ffffff] via-[#ffe066] to-[#ff8c00]",
    back: "from-[#ffffff] via-[#fff0a8] to-[#ffb347]",
    edge: "bg-[#b35400]",
    glow: "shadow-[0_18px_45px_rgba(255,200,80,0.55)]",
  },
  laser: {
    front: "from-[#ff0000] via-[#ff3366] to-[#8b0000]",
    back: "from-[#ff6b6b] via-[#ff6b8f] to-[#c0392b]",
    edge: "bg-[#3d0000]",
    glow: "shadow-[0_18px_45px_rgba(255,30,60,0.5)]",
  },
  voltage: {
    front: "from-[#fff700] via-[#ffd700] to-[#ff9900]",
    back: "from-[#fffde0] via-[#ffe866] to-[#ffb84d]",
    edge: "bg-[#7a5200]",
    glow: "shadow-[0_18px_45px_rgba(255,220,0,0.5)]",
  },
  blacklight: {
    front: "from-[#f0abfc] via-[#a855f7] to-[#4c1d95]",
    back: "from-[#f5d0fe] via-[#c084fc] to-[#7c3aed]",
    edge: "bg-[#2e1065]",
    glow: "shadow-[0_18px_45px_rgba(216,70,239,0.5)]",
  },
  quantum: {
    front: "from-[#5eead4] via-[#14b8a6] to-[#0e7490]",
    back: "from-[#99f6e4] via-[#5cd9c9] to-[#22a5c4]",
    edge: "bg-[#083344]",
    glow: "shadow-[0_18px_45px_rgba(45,210,200,0.5)]",
  },
  toxic: {
    front: "from-[#ccff00] via-[#7fff00] to-[#2e8b00]",
    back: "from-[#e0ff66] via-[#a6ff33] to-[#5cb800]",
    edge: "bg-[#123a00]",
    glow: "shadow-[0_18px_45px_rgba(150,255,0,0.5)]",
  },
  solarflare: {
    front: "from-[#ffd93d] via-[#ff9500] to-[#ff3d00]",
    back: "from-[#ffe98a] via-[#ffb84d] to-[#ff6a3d]",
    edge: "bg-[#8a2600]",
    glow: "shadow-[0_18px_45px_rgba(255,140,30,0.5)]",
  },
  oilSlick: {
    front: "from-[#0a3d3d] via-[#1a4d7a] via-[#4a2d7a] to-[#0d1a0d]",
    back: "from-[#1a5c5c] via-[#3a6ca0] via-[#6a4ca0] to-[#2a3a2a]",
    edge: "bg-[#0a0f1a]",
    glow: "shadow-[0_18px_45px_rgba(60,90,140,0.3)]",
  },
  pearl: {
    front: "from-[#fff8f0] via-[#ffe8f0] via-[#f0e8ff] to-[#e8f4ff]",
    back: "from-[#ffffff] via-[#fff0f5] via-[#f5f0ff] to-[#f0f8ff]",
    edge: "bg-[#d8c8e0]",
    glow: "shadow-[0_18px_45px_rgba(230,210,240,0.3)]",
  },
  opal: {
    front: "from-[#e8f9ff] via-[#ffd6f0] via-[#d9ffe0] to-[#d6e8ff]",
    back: "from-[#f5fdff] via-[#ffe8f7] via-[#e8ffed] to-[#e8f2ff]",
    edge: "bg-[#a8c8d8]",
    glow: "shadow-[0_18px_45px_rgba(200,220,255,0.3)]",
  },
  soapBubble: {
    front: "from-[#f0fff4] via-[#e0f0ff] via-[#ffe8f5] to-[#fff9e0]",
    back: "from-[#f8fffa] via-[#f0f8ff] via-[#fff0f8] to-[#fffdf0]",
    edge: "bg-[#b8c8d0]",
    glow: "shadow-[0_18px_45px_rgba(210,230,255,0.25)]",
  },
  butterflyWing: {
    front: "from-[#3a7bd5] via-[#4a2d9e] to-[#0d0a2e]",
    back: "from-[#5a9bf5] via-[#6a4dc0] to-[#241a4e]",
    edge: "bg-[#0a0620]",
    glow: "shadow-[0_18px_45px_rgba(70,90,220,0.35)]",
  },
  beetleShell: {
    front: "from-[#3ecf8e] via-[#2d9e5f] to-[#8a6a1a]",
    back: "from-[#6ee8ae] via-[#5cc98a] to-[#c99a3a]",
    edge: "bg-[#1a4a2a]",
    glow: "shadow-[0_18px_45px_rgba(60,200,140,0.3)]",
  },
  mermaidScale: {
    front: "from-[#4fd9d9] via-[#3a9ecf] to-[#8a6ad9]",
    back: "from-[#8ef0f0] via-[#6ec5ec] to-[#b09af0]",
    edge: "bg-[#2a5a6a]",
    glow: "shadow-[0_18px_45px_rgba(80,200,210,0.3)]",
  },
  chromeHolo: {
    front: "from-[#e0e0e0] via-[#b0d4ff] via-[#e0b0ff] to-[#d0d0d0]",
    back: "from-[#f5f5f5] via-[#d0e8ff] via-[#f0d0ff] to-[#eaeaea]",
    edge: "bg-[#8a8a95]",
    glow: "shadow-[0_18px_45px_rgba(180,190,210,0.3)]",
  },
  duskPrism: {
    front: "from-[#ff9a7a] via-[#d97ac9] to-[#7a5ad9]",
    back: "from-[#ffc0a8] via-[#eda3e0] to-[#a68af0]",
    edge: "bg-[#5a3a8a]",
    glow: "shadow-[0_18px_45px_rgba(220,130,200,0.3)]",
  },
  iceCrystal: {
    front: "from-[#f0fbff] via-[#c8ebff] to-[#a8d0ff]",
    back: "from-[#ffffff] via-[#e0f5ff] to-[#d0e8ff]",
    edge: "bg-[#7ab0e0]",
    glow: "shadow-[0_18px_45px_rgba(180,220,255,0.3)]",
  },
  fireOpal: {
    front: "from-[#ffcf7a] via-[#ff8a5a] to-[#e04a7a]",
    back: "from-[#ffe0a8] via-[#ffab8a] to-[#f07aa0]",
    edge: "bg-[#a8305a]",
    glow: "shadow-[0_18px_45px_rgba(255,140,110,0.35)]",
  },
  peacockFeather: {
    front: "from-[#1a9e8a] via-[#1a6ab5] via-[#5a2d9e] to-[#c9a52a]",
    back: "from-[#4ec9b0] via-[#4a95d9] via-[#8a5ac9] to-[#e0c25a]",
    edge: "bg-[#0d3a4a]",
    glow: "shadow-[0_18px_45px_rgba(30,140,160,0.3)]",
  },
  hologramBlue: {
    front: "from-[#bff5ff] via-[#4fd4ff] to-[#0a7acf]",
    back: "from-[#e0fbff] via-[#8ee8ff] to-[#4fa8e5]",
    edge: "bg-[#0a3a5c]",
    glow: "shadow-[0_18px_45px_rgba(80,210,255,0.35)]",
  },
  auroraHolo: {
    front: "from-[#a8ffd9] via-[#8ad9ff] to-[#c9a8ff]",
    back: "from-[#d0ffea] via-[#c0ecff] to-[#e0d0ff]",
    edge: "bg-[#4a8aa0]",
    glow: "shadow-[0_18px_45px_rgba(150,220,220,0.3)]",
  },
  moonstone: {
    front: "from-[#eef4ff] via-[#dce8ff] to-[#c0d0f0]",
    back: "from-[#ffffff] via-[#eef2ff] to-[#dde5f5]",
    edge: "bg-[#9aa8c9]",
    glow: "shadow-[0_18px_45px_rgba(200,215,240,0.3)]",
  },
  dragonScale: {
    front: "from-[#3a9e5a] via-[#4a3a9e] to-[#0d0a1a]",
    back: "from-[#6ec98a] via-[#7a6ac9] to-[#241a3a]",
    edge: "bg-[#0a1a10]",
    glow: "shadow-[0_18px_45px_rgba(60,160,100,0.3)]",
  },
  starlight: {
    front: "from-[#ffffff] via-[#d8e8ff] to-[#a8c0e8]",
    back: "from-[#ffffff] via-[#eef4ff] to-[#c8d8f5]",
    edge: "bg-[#6a7fa0]",
    glow: "shadow-[0_18px_45px_rgba(210,225,255,0.35)]",
  },
  shellNacre: {
    front: "from-[#fff0e8] via-[#ffe0ec] to-[#ede0ff]",
    back: "from-[#fff8f4] via-[#fff0f5] to-[#f5eeff]",
    edge: "bg-[#d0b8c9]",
    glow: "shadow-[0_18px_45px_rgba(240,215,225,0.3)]",
  },
  glacier: {
    front: "from-[#e0f9ff] via-[#a8e8f0] to-[#6ab5cf]",
    back: "from-[#f0fdff] via-[#c8f0f5] to-[#8fcfe0]",
    edge: "bg-[#3a7a90]",
    glow: "shadow-[0_18px_45px_rgba(140,220,235,0.3)]",
  },
  prismMist: {
    front: "from-[#ffe8e8] via-[#e8f0ff] via-[#f0ffe8] to-[#fff0ff]",
    back: "from-[#fff4f4] via-[#f4f8ff] via-[#f8fff4] to-[#fff8ff]",
    edge: "bg-[#c9c0d0]",
    glow: "shadow-[0_18px_45px_rgba(230,225,240,0.25)]",
  },
  //   chatgpt color
  nebula: {
    front: "from-[#e7a7ff] via-[#b65cff] to-[#7227d9]",
    back: "from-[#f0c4ff] via-[#cc82ff] to-[#8a3fea]",
    edge: "bg-[#6920c4]",
    glow: "shadow-[0_18px_45px_rgba(165,75,240,0.3)]",
  },

  aurora: {
    front: "from-[#72fff0] via-[#20d9c5] to-[#089b9b]",
    back: "from-[#a0fff5] via-[#55e9d9] to-[#19b9b1]",
    edge: "bg-[#078b8b]",
    glow: "shadow-[0_18px_45px_rgba(15,210,190,0.3)]",
  },

  starlight: {
    front: "from-[#d9e6ff] via-[#91b5f5] to-[#5779d8]",
    back: "from-[#eef4ff] via-[#b5cdfb] to-[#7295e8]",
    edge: "bg-[#4c6dcc]",
    glow: "shadow-[0_18px_45px_rgba(90,130,225,0.3)]",
  },

  plasma: {
    front: "from-[#ff9ce8] via-[#f34ac5] to-[#c51b91]",
    back: "from-[#ffc0ef] via-[#fa70d5] to-[#d92baa]",
    edge: "bg-[#b51683]",
    glow: "shadow-[0_18px_45px_rgba(235,45,175,0.3)]",
  },

  eclipse: {
    front: "from-[#77758f] via-[#46445f] to-[#29273d]",
    back: "from-[#9997ad] via-[#5d5b78] to-[#38364e]",
    edge: "bg-[#252338]",
    glow: "shadow-[0_18px_45px_rgba(55,50,85,0.32)]",
  },

  comet: {
    front: "from-[#ffcf8b] via-[#ff8d5c] to-[#e94d38]",
    back: "from-[#ffe0a9] via-[#ffa47d] to-[#f26349]",
    edge: "bg-[#d84331]",
    glow: "shadow-[0_18px_45px_rgba(240,95,60,0.3)]",
  },

  moonlight: {
    front: "from-[#d7dcff] via-[#a3a9e8] to-[#7479c5]",
    back: "from-[#ebeeff] via-[#bfc4f5] to-[#8e94d8]",
    edge: "bg-[#686db5]",
    glow: "shadow-[0_18px_45px_rgba(125,130,205,0.27)]",
  },

  solar: {
    front: "from-[#fff18a] via-[#ffc83d] to-[#f39a13]",
    back: "from-[#fff6b3] via-[#ffda69] to-[#ffad2c]",
    edge: "bg-[#e18b0b]",
    glow: "shadow-[0_18px_45px_rgba(250,180,35,0.3)]",
  },

  void: {
    front: "from-[#626277] via-[#303044] to-[#171725]",
    back: "from-[#828298] via-[#44445c] to-[#232334]",
    edge: "bg-[#141421]",
    glow: "shadow-[0_18px_45px_rgba(35,35,60,0.35)]",
  },

  electric: {
    front: "from-[#8be8ff] via-[#3bc5ff] to-[#1684ed]",
    back: "from-[#b7f0ff] via-[#69d6ff] to-[#2b9df2]",
    edge: "bg-[#0879d5]",
    glow: "shadow-[0_18px_45px_rgba(30,165,240,0.34)]",
  },
  bubblegum: {
    front: "from-[#ffb6d9] via-[#ff79b4] to-[#ec478d]",
    back: "from-[#ffd0e6] via-[#ff9dca] to-[#f765a2]",
    edge: "bg-[#dc3c82]",
    glow: "shadow-[0_18px_45px_rgba(245,90,155,0.3)]",
  },

  lemonade: {
    front: "from-[#fff6a3] via-[#ffe66b] to-[#f8c92e]",
    back: "from-[#fff9c7] via-[#ffef91] to-[#ffd84e]",
    edge: "bg-[#e4b817]",
    glow: "shadow-[0_18px_45px_rgba(245,205,55,0.3)]",
  },

  watermelon: {
    front: "from-[#ff9caa] via-[#ff5f72] to-[#e93650]",
    back: "from-[#ffbdc6] via-[#ff7889] to-[#f04a60]",
    edge: "bg-[#d72d47]",
    glow: "shadow-[0_18px_45px_rgba(240,65,85,0.3)]",
  },

  grape: {
    front: "from-[#d3a5ff] via-[#aa72f4] to-[#7941d1]",
    back: "from-[#e2c0ff] via-[#bd8df8] to-[#8d55df]",
    edge: "bg-[#7138c4]",
    glow: "shadow-[0_18px_45px_rgba(140,75,220,0.29)]",
  },

  peach: {
    front: "from-[#ffd0a1] via-[#ffab72] to-[#f27b4e]",
    back: "from-[#ffe2bd] via-[#ffc28f] to-[#fb9465]",
    edge: "bg-[#df6941]",
    glow: "shadow-[0_18px_45px_rgba(245,135,80,0.28)]",
  },

  mint: {
    front: "from-[#b5f8d4] via-[#6ee8ae] to-[#36c987]",
    back: "from-[#d0fbe3] via-[#91f0c2] to-[#52d99a]",
    edge: "bg-[#2eb879]",
    glow: "shadow-[0_18px_45px_rgba(65,205,140,0.28)]",
  },

  cottonCandy: {
    front: "from-[#a9dcff] via-[#8db5ff] to-[#b47cf3]",
    back: "from-[#c8eaff] via-[#adcaff] to-[#ca9df8]",
    edge: "bg-[#9569db]",
    glow: "shadow-[0_18px_45px_rgba(145,145,240,0.28)]",
  },

  strawberry: {
    front: "from-[#ff9a9a] via-[#ff5757] to-[#d9283d]",
    back: "from-[#ffbaba] via-[#ff7777] to-[#e84254]",
    edge: "bg-[#c92339]",
    glow: "shadow-[0_18px_45px_rgba(235,55,75,0.3)]",
  },

  blueberry: {
    front: "from-[#9cbcff] via-[#688ff0] to-[#4563cb]",
    back: "from-[#bed3ff] via-[#88a8f8] to-[#5f7bd9]",
    edge: "bg-[#3e58b5]",
    glow: "shadow-[0_18px_45px_rgba(80,115,220,0.3)]",
  },

  sherbet: {
    front: "from-[#ffd6a5] via-[#ff9f9f] to-[#d98cff]",
    back: "from-[#ffe8c5] via-[#ffb8b8] to-[#e5a8ff]",
    edge: "bg-[#c879dc]",
    glow: "shadow-[0_18px_45px_rgba(225,135,210,0.3)]",
  },
  forest: {
    front: "from-[#8bd49b] via-[#3c9b58] to-[#226b39]",
    back: "from-[#aee4b7] via-[#65b978] to-[#32874a]",
    edge: "bg-[#1e6032]",
    glow: "shadow-[0_18px_45px_rgba(50,140,75,0.27)]",
  },

  moss: {
    front: "from-[#c4d58b] via-[#94ad52] to-[#687d32]",
    back: "from-[#d9e5a9] via-[#adc56b] to-[#7f963f]",
    edge: "bg-[#5e702c]",
    glow: "shadow-[0_18px_45px_rgba(125,150,65,0.27)]",
  },

  ocean: {
    front: "from-[#75e4e8] via-[#32b9c4] to-[#167e96]",
    back: "from-[#9ef0f1] via-[#5fd3da] to-[#299caf]",
    edge: "bg-[#116f86]",
    glow: "shadow-[0_18px_45px_rgba(35,175,190,0.28)]",
  },

  clay: {
    front: "from-[#e8ae87] via-[#c87955] to-[#9b4e38]",
    back: "from-[#f0c29f] via-[#d9936d] to-[#b76147]",
    edge: "bg-[#873e2f]",
    glow: "shadow-[0_18px_45px_rgba(175,95,65,0.27)]",
  },

  sage: {
    front: "from-[#c9d9b8] via-[#9caf87] to-[#70815f]",
    back: "from-[#dce8cf] via-[#b2c49e] to-[#829473]",
    edge: "bg-[#647653]",
    glow: "shadow-[0_18px_45px_rgba(120,145,100,0.25)]",
  },

  lavender: {
    front: "from-[#ddd0ef] via-[#b89ed5] to-[#8d70b5]",
    back: "from-[#eee5f8] via-[#cdb9e3] to-[#a384c8]",
    edge: "bg-[#8062a5]",
    glow: "shadow-[0_18px_45px_rgba(155,125,190,0.25)]",
  },

  desert: {
    front: "from-[#f3c98d] via-[#d89b5c] to-[#b76d39]",
    back: "from-[#f8dcae] via-[#e5b275] to-[#c8844e]",
    edge: "bg-[#a85f32]",
    glow: "shadow-[0_18px_45px_rgba(205,145,75,0.27)]",
  },

  pine: {
    front: "from-[#77c4a0] via-[#348566] to-[#205a49]",
    back: "from-[#9ed8ba] via-[#55a57f] to-[#2b7059]",
    edge: "bg-[#194d3e]",
    glow: "shadow-[0_18px_45px_rgba(45,125,95,0.27)]",
  },

  sky: {
    front: "from-[#b5e5ff] via-[#75c7f3] to-[#439bd4]",
    back: "from-[#d2f0ff] via-[#9bd9fa] to-[#62b0e2]",
    edge: "bg-[#398dca]",
    glow: "shadow-[0_18px_45px_rgba(75,170,225,0.27)]",
  },

  rosewood: {
    front: "from-[#d99a9d] via-[#a95d65] to-[#753c48]",
    back: "from-[#e8b7b8] via-[#bf737a] to-[#894b57]",
    edge: "bg-[#683440]",
    glow: "shadow-[0_18px_45px_rgba(150,75,85,0.28)]",
  },
  synthwave: {
    front: "from-[#ff9df2] via-[#ec43d1] to-[#a51aa9]",
    back: "from-[#ffc1f6] via-[#f66fe1] to-[#bd31bd]",
    edge: "bg-[#94139a]",
    glow: "shadow-[0_18px_45px_rgba(225,45,210,0.35)]",
  },

  cyberRed: {
    front: "from-[#ff8d8d] via-[#ff3e52] to-[#c51632]",
    back: "from-[#ffb0b0] via-[#ff6573] to-[#df2942]",
    edge: "bg-[#b6102a]",
    glow: "shadow-[0_18px_45px_rgba(235,45,65,0.35)]",
  },

  neonLime: {
    front: "from-[#d6ff79] via-[#9af52d] to-[#58bd18]",
    back: "from-[#e5ff9d] via-[#b6fa58] to-[#70d82c]",
    edge: "bg-[#4da914]",
    glow: "shadow-[0_18px_45px_rgba(135,225,35,0.35)]",
  },

  arcade: {
    front: "from-[#ffdd70] via-[#ff9f26] to-[#f04e20]",
    back: "from-[#ffe99b] via-[#ffb951] to-[#f7653a]",
    edge: "bg-[#db4219]",
    glow: "shadow-[0_18px_45px_rgba(245,125,35,0.35)]",
  },

  terminal: {
    front: "from-[#7dffb2] via-[#24d66e] to-[#0b9345]",
    back: "from-[#a5ffc9] via-[#50e88a] to-[#18b45a]",
    edge: "bg-[#087c39]",
    glow: "shadow-[0_18px_45px_rgba(25,210,100,0.32)]",
  },

  laser: {
    front: "from-[#ff8fff] via-[#ff35e8] to-[#c700c7]",
    back: "from-[#ffbaff] via-[#ff68f2] to-[#dd20dd]",
    edge: "bg-[#b000b0]",
    glow: "shadow-[0_18px_45px_rgba(240,35,230,0.38)]",
  },

  tron: {
    front: "from-[#71f4ff] via-[#18c9dc] to-[#087b9c]",
    back: "from-[#a0f8ff] via-[#4de0ed] to-[#1599b8]",
    edge: "bg-[#066d89]",
    glow: "shadow-[0_18px_45px_rgba(20,200,225,0.38)]",
  },

  vapor: {
    front: "from-[#9bbcff] via-[#786df2] to-[#493bb9]",
    back: "from-[#bfd4ff] via-[#9c91fa] to-[#6556d1]",
    edge: "bg-[#3f32a6]",
    glow: "shadow-[0_18px_45px_rgba(90,75,220,0.36)]",
  },

  pixel: {
    front: "from-[#ffca67] via-[#f27d38] to-[#b83b32]",
    back: "from-[#ffdd8f] via-[#fa9a58] to-[#d35343]",
    edge: "bg-[#a9362d]",
    glow: "shadow-[0_18px_45px_rgba(205,85,50,0.34)]",
  },

  glitch: {
    front: "from-[#b7fffb] via-[#42e5d5] to-[#0ca5a0]",
    back: "from-[#d0fffd] via-[#72f0e5] to-[#25bdb7]",
    edge: "bg-[#078d89]",
    glow: "shadow-[0_18px_45px_rgba(25,210,195,0.38)]",
  },
  champagne: {
    front: "from-[#fff0c2] via-[#e4c47b] to-[#b38b3e]",
    back: "from-[#fff7d9] via-[#edd597] to-[#c6a653]",
    edge: "bg-[#9d792f]",
    glow: "shadow-[0_18px_45px_rgba(190,150,65,0.27)]",
  },

  sapphire: {
    front: "from-[#80baff] via-[#397be0] to-[#1749a8]",
    back: "from-[#acd2ff] via-[#6299ed] to-[#2c5fc4]",
    edge: "bg-[#123f95]",
    glow: "shadow-[0_18px_45px_rgba(45,105,215,0.3)]",
  },

  ruby: {
    front: "from-[#ff9a9f] via-[#d94450] to-[#8f182d]",
    back: "from-[#ffbabe] via-[#eb6670] to-[#a82a3e]",
    edge: "bg-[#7c1226]",
    glow: "shadow-[0_18px_45px_rgba(190,40,60,0.3)]",
  },

  emerald: {
    front: "from-[#83e7b1] via-[#35a875] to-[#176347]",
    back: "from-[#a9f0c9] via-[#5ac38f] to-[#26805b]",
    edge: "bg-[#12563d]",
    glow: "shadow-[0_18px_45px_rgba(35,145,95,0.3)]",
  },

  amethyst: {
    front: "from-[#d7b1ff] via-[#9a5fce] to-[#62338f]",
    back: "from-[#e6caff] via-[#b77fe5] to-[#7948aa]",
    edge: "bg-[#542a7e]",
    glow: "shadow-[0_18px_45px_rgba(120,65,175,0.3)]",
  },

  onyx: {
    front: "from-[#85858e] via-[#4e4e57] to-[#292930]",
    back: "from-[#a5a5ad] via-[#67676f] to-[#393940]",
    edge: "bg-[#222228]",
    glow: "shadow-[0_18px_45px_rgba(55,55,65,0.32)]",
  },

  copper: {
    front: "from-[#f0b184] via-[#c8754a] to-[#88452f]",
    back: "from-[#f6c59f] via-[#da9163] to-[#a95739]",
    edge: "bg-[#793b29]",
    glow: "shadow-[0_18px_45px_rgba(190,100,60,0.3)]",
  },

  platinum: {
    front: "from-[#f5f6f8] via-[#c8ccd3] to-[#9298a3]",
    back: "from-[#ffffff] via-[#dfe2e7] to-[#aeb3bd]",
    edge: "bg-[#7e848f]",
    glow: "shadow-[0_18px_45px_rgba(145,150,165,0.25)]",
  },

  midnight: {
    front: "from-[#61749a] via-[#344566] to-[#1d2942]",
    back: "from-[#8192b2] via-[#4b5e82] to-[#283653]",
    edge: "bg-[#172238]",
    glow: "shadow-[0_18px_45px_rgba(45,65,100,0.34)]",
  },

  pearl: {
    front: "from-[#fffafa] via-[#e9dfe3] to-[#c9bcc4]",
    back: "from-[#ffffff] via-[#f4ebef] to-[#d9ccd2]",
    edge: "bg-[#b7a8b0]",
    glow: "shadow-[0_18px_45px_rgba(190,175,185,0.25)]",
  },
};

export default function MacFolder({
  label = "Projects",
  count,
  files = [],
  color = "blue",
  size = "md",
  onClick,
}) {
  const [active, setActive] = useState(false);
  const folderClipId = `folderClip-${useId().replaceAll(":", "")}`;

  const theme = colorMap[color] || colorMap.blue;

  const sizes = {
    sm: {
      folder: "h-28 w-36",
      label: "text-sm",
      tab: "h-6 w-16",
    },
    md: {
      folder: "h-40 w-52",
      label: "text-base",
      tab: "h-8 w-24",
    },
    lg: {
      folder: "h-52 w-72",
      label: "text-xl",
      tab: "h-10 w-32",
    },
  };

  const currentSize = sizes[size] || sizes.md;

  const handleClick = () => {
    setActive((prev) => !prev);
    onClick?.();
  };

  return (
    <div className="group inline-flex flex-col items-center select-none">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Open ${label} folder`}
        className={`
          relative
          ${currentSize.folder}
          cursor-pointer
          outline-none
          [perspective:900px]
        `}
      >
        {/* Back folder */}
        <div
          className={`
            absolute
            left-0 top-0
            h-full w-full
            rounded-[22px]
            bg-linear-to-br
            ${theme.back}
            ${theme.glow}
            transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
            group-hover:-translate-y-3.5
            group-hover:scale-95
            group-hover:rotate-x-10
            ${active ? "-translate-y-1 scale-[0.98]" : ""}
          `}
        />

        {/* Single masked folder face with the tab built into its top edge */}
        <div
          className={`
            absolute
            inset-x-0 bottom-0
            h-[88%]
            overflow-hidden
            rounded-[20px]
            border border-white/30
            bg-linear-to-br
            ${theme.front}
            shadow-[inset_0_1px_1px_rgba(255,255,255,.65),inset_0_-8px_20px_rgba(0,0,0,.08)]
            transition-all
            duration-500
            ease-[cubic-bezier(.2,.8,.2,1)]
            group-hover:-translate-y-2
            group-hover:rotate-x-[-20deg]
            ${active ? "scale-[0.98]" : ""}
          `}
          style={{
            clipPath: `url(#${folderClipId})`,
          }}
        >
          {/* Glass highlight */}
          {/* <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-br
              from-white/30
              via-transparent
              to-black/10
            "
          /> */}
          {/* Bottom edge */}
          <div
            className={`
              absolute bottom-0 left-0 right-0
              h-2
              ${theme.edge}
              opacity-10
            `}
          />

          {/* Label */}
          {/* <div
            className="
              absolute inset-x-0 bottom-5
              flex flex-col items-center
              text-white
              drop-shadow-[0_1px_2px_rgba(0,0,0,.25)]
            "
          >
            <span className={`${currentSize.label} font-semibold`}>
              {label}
            </span>

            {count !== undefined && (
              <span className="mt-0.5 text-xs font-medium text-white/75">
                {count} {count === 1 ? "item" : "items"}
              </span>
            )}
          </div> */}
        </div>

        <svg width="0" height="0" aria-hidden="true" className="absolute">
          <defs>
            <clipPath id={folderClipId} clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 0.15,0 L 0.47,0 L 0.54,0.14 L 0.97,0.14 A 0.03,0.045 0 0 1 1,0.185 L 1,1 L 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* 3D bottom shadow */}
        <div
          className="
            absolute
            -bottom-2 left-5 right-5
            h-4
            rounded-full
            bg-black/15
            blur-xl
            transition-all duration-500
            group-hover:scale-90
            group-hover:opacity-70
          "
        />
      </button>
    </div>
  );
}
