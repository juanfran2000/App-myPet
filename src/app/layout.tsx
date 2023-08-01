import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>myPet App</title>
      </head>
      <header>
        {/* Contenido del encabezado */}
        <a href="/paginas">Pagina Ejemplo</a>
        <br />
        <a href="/">Home</a>
      </header>
      <main>{children}</main>
      <footer>{/* Contenido del footer */}</footer>
    </html>
  );
}
