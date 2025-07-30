import { Amiri } from "next/font/google"

import "@/app/_ui/globals.css"
import Navbar from "@/app/_ui/navbar"

import { getDictionary } from "@/app/[locale]/dictionaries"

const amiri = Amiri({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-amiri",
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
      <body
        className={`${amiri.variable} pb-14 antialiased`}
      >
        <Navbar dict={dict} />
        {children}
      </body>
    </html>
  )
}
