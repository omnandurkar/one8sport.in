import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One8sport Academy",
  description: "One8sport Academy: Excellence in Sports Training and Development in Pune.",
  keywords: "sports academy, sports training, athlete development, One8 Sports, Football, Badminton, one8sport, Pune sports academy, one8sport pune, one8sport.in, one8sport academy",
  author: "Pranav Borade",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <title>{metadata.title}</title>

        {/* <link rel="icon" href="/favicon.ico" /> */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": metadata.title,
            "url": "https://www.one8sport.in",
            "logo": "https://www.one8sport.in/logo.png",
            "description": metadata.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9028119773",
              "contactType": "customer service"
            }
          })}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
