import { Inter } from 'next/font/google'
import './globals.css'
import MotionProvider from './Components/MotionProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoFlow AI - Custom AI Automation Solutions',
  description: 'Transform your business with custom AI automation solutions. We create intelligent workflows, chatbots, and process automation tailored to your needs.',
  keywords: 'AI automation, custom automation, business automation, AI solutions, workflow automation, chatbots, process automation',
  authors: [{ name: 'AutoFlow AI' }],
  creator: 'AutoFlow AI',
  publisher: 'AutoFlow AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://autoflowai.com',
    siteName: 'AutoFlow AI',
    title: 'AutoFlow AI - Custom AI Automation Solutions',
    description: 'Transform your business with custom AI automation solutions. We create intelligent workflows, chatbots, and process automation tailored to your needs.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoFlow AI - Custom AI Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoFlow AI - Custom AI Automation Solutions',
    description: 'Transform your business with custom AI automation solutions.',
    images: ['/og-image.jpg'],
    creator: '@autoflowai',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MotionProvider>
          {children}
        </MotionProvider>
        
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              
              ga('create', 'UA-XXXXXXXXX-X', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AutoFlow AI",
              "url": "https://autoflowai.com",
              "logo": "https://autoflowai.com/logo.png",
              "description": "Custom AI automation solutions for businesses",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@autoflowai.com"
              },
              "sameAs": [
                "https://twitter.com/autoflowai",
                "https://linkedin.com/company/autoflowai"
              ],
              "service": {
                "@type": "Service",
                "name": "AI Automation Solutions",
                "description": "Custom AI automation, chatbots, workflow automation, and process optimization"
              }
            })
          }}
        />
      </body>
    </html>
  )
}