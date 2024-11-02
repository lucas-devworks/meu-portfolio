import "./globals.css";
import Arrow from "@/componentes/Arrow";

export const metadata = {
  title: "Lucas T. Santos | Portfólio",
  description: "Meu Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Arrow/>
      </body>
    </html>
  );
}
