import localFont from "next/font/local";

export const fonts = localFont({
  src: [
    {
      path: "./ChivoMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ChivoMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
