import localFont from "next/font/local";

// Configuração da fonte Satoshi-Variable.woff2 como fonte principal
// Usando next/font/local para fontes customizadas
export const satoshi = localFont({
  src: "../../Satoshi-Variable.woff2",
  display: "swap", // Melhor performance - evita flash de texto não estilizado
  adjustFontFallback: "Arial", // Fallback otimizado para reduzir CLS
  variable: "--font-satoshi", // Variável CSS para uso com Tailwind
  weight: "100 900", // Range completo para fonte variável
  style: "normal", // Apenas estilo normal por enquanto
});

// Export para uso em outros componentes se necessário
export const fonts = {
  satoshi,
} as const;
