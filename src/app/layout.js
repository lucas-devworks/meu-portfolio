import "./globals.css";
import Arrow from "@/componentes/Arrow";
import Head from "next/head";

export const metadata = {
  title: "Lucas T. Santos | Portfólio",
  description: "Meu Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        {children}
        <Arrow />
      </body>
    </html>
  );
};