import { Magra, Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["300", "400"] });

export const magraFontForHeading = Magra({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "GH SHOP || ghazna shop",
  description:
    "Welcome to GH SHOP - your ultimate destination for all things trendy and stylish! Explore our vast collection of fashion-forward clothing, accessories, and more, all curated to elevate your shopping experience. Shop with confidence and convenience on our sleek and user-friendly ecommerce platform powered by Next.js. Discover the latest trends, unbeatable deals, and exceptional customer service at GH SHOP today!",
  keywords:
    "Fashion, online shopping, trendy clothing, accessories, Next.js, GH SHOP, ecommerce, style, fashion-forward, deals",
  author: "mhgkhan",
  url: "ghshop.vercel.app",
  image: "https://avatars.githubusercontent.com/u/128809509?v=4",
  type: "website",
  site_name: "gh shop",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={robotoFlex.className}>{children}</body>
    </html>
  );
}
