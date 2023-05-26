import NavbarComponent from '@/components/NavbarComponent'
import './globals.css'
import { Inter } from 'next/font/google'
import FooterComponent from '@/components/FooterComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SUJU Shop',
  description: 'When engaging in online shopping, customers can browse through a wide range of products offered by various online retailers. These products can span across multiple categories, including fashion, electronics, home and kitchen appliances, beauty and personal care, books, and much more. The online marketplace provides a virtually endless selection of items, catering to diverse needs, preferences, and budgets.One of the key benefits of online shopping is the convenience it provides. Shoppers no longer have to physically visit multiple stores, spend time navigating through crowded aisles, or wait in long queues at the checkout counters. With just a few clicks, customers can easily search for specific products, compare prices, read product descriptions, and even access customer reviews to make informed purchasing decisions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NavbarComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  )
}
