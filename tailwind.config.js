module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030712",
          card: "rgba(15, 23, 42, 0.75)",
          cyan: "#38bdf8",
          blue: "#0070f3",
          purple: "#8b5cf6",
          neon: "#00f0ff",
        },
      },
      fontFamily: {
        mono: ["var(--font-fira-code)", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(56, 189, 248, 0.4)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.4)",
        "glow-blue": "0 0 20px rgba(0, 112, 243, 0.4)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: 0.6, filter: "drop-shadow(0 0 8px #38bdf8)" },
          "50%": { opacity: 1, filter: "drop-shadow(0 0 16px #00f0ff)" },
        },
      },
    },
  },
  plugins: [],
};
