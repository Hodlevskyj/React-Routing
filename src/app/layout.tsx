import AuthProvider from './context/AuthProvider'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadataa = {
  title: 'React Routing Oleh Hodlevskyj',
  description: 'Create nextjs app with routing ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
