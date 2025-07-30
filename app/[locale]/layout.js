import { Vazirmatn } from "next/font/google"

import "@/app/_ui/globals.css"
import Navbar from "@/app/_ui/navbar"

import { getDictionary } from "@/app/[locale]/dictionaries"

const vazirmatn = Vazirmatn({
  // weight: "400",
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
})

export const metadata = {
  title: "REYHUN ATELIER",
  description: "",
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fa' }]
}

export default async function RootLayout({ children, params }) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} dir="auto">
      <head>
        <title>{dict.websiteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${vazirmatn.variable} pb-14 antialiased`}
      >
        <Navbar dict={dict} />
        {children}
      </body>
    </html>
  )
}
