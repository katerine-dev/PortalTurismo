import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Portal de Turismo',
  description: 'Descubra destinos incríveis ao redor do mundo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <header className="header">
            <h1>Portal de Turismo</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/destinos">Destinos</Link>
            </nav>
          </header>
          
          <main className="main">{children}</main>
          
        </div>
      </body>
    </html>
  )
}