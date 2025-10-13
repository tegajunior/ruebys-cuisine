import type { Metadata } from 'next'
import Head from 'next/head'

import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Rueby's Cuisine",
  description:
    'Meals delivered to your door; Fresh Nigerian Soups & Stews; Abuja food delivery; We are accepting orders from Abuja customers only for now.',
  openGraph: {
    type: 'website',
    description:
      'Meals delivered to your door; Fresh Nigerian Soups & Stews; Abuja food delivery; We are accepting orders from Abuja customers only for now.',
    url: 'https://www.ruebyscuisine.food/',
    images: [
      {
        url: 'https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/RuebysCuisineFlyer.jpg',
        width: 800,
        height: 600,
        alt: "Rueby's Cuisine Abuja Food Delivery",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Head>
                {/* Open Graph Metadata for Facebook */}
                <meta
                  property="og:title"
                  content="Rueby's Cuisine"
                />
                <meta
                  property="og:description"
                  content="Meals delivered to your door; Fresh Nigerian Soups & Stews; Abuja food delivery; We are accepting orders from Abuja customers only for now."
                />
                <meta
                  property="og:image"
                  content="https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/RuebysCuisineFlyer.jpg"
                />
                <meta
                  property="og:url"
                  content="https://www.ruebyscuisine.food/"
                />
                <meta
                  property="og:site_name"
                  content="Rueby's Cuisine"
                />
                <meta
                  property="og:type"
                  content="website"
                />
                <meta
                  property="og:locale"
                  content="en_US"
                />
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Restaurant',
                      name: "Rueby's Cuisine",
                      description:
                        'Meals delivered to your door; Fresh Nigerian Soups & Stews; Abuja food delivery; We are accepting orders from Abuja customers only for now.',
                      logo: 'https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/site-logo.png',
                      url: 'https://www.ruebyscuisine.food/',
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'Abuja',
                        addressLocality: 'Abuja',
                        addressRegion: 'FCT',
                        postalCode: '901101',
                        addressCountry: 'NG',
                      },
                      contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+2348149493000',
                        contactType: 'Customer Service',
                        areaServed: 'NG',
                        availableLanguage: 'English',
                      },
                    }),
                  }}
                />
              </Head>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
