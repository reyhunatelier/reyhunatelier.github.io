import { getDictionary } from "@/app/[locale]/dictionaries"

import Image from "next/image"
import avatar from "@/public/avatar.jpg"
import {
  ChevronRightIcon,
  CreditCardIcon,
  HeartIcon,
  GiftIcon
} from "@heroicons/react/24/outline"

import { classNames } from "@/app/_lib/general"

import LocalizedLink from "@/app/_ui/localizedLink"
import LanguageSwitcher from "@/app/_ui/LanguageSwitcher"

export default async function About({ params }) {
  const lang = (await params).locale
  const dict = await getDictionary(lang)

  const items = [
    { icon: HeartIcon, label: dict.favouriteText },
    { icon: CreditCardIcon, label: dict.paymentText },
    { icon: GiftIcon, label: dict.rewardsText },
  ]

  return (
    <div className="relative min-h-screen -mb-14" dir="auto">
      <div className="bg-sky-700 flex items-center justify-between text-white px-8 lg:px-20 pt-10 lg:pt-20 pb-28 lg:pb-32" dir="ltr">
        <div className="flex items-center justify-start text-sm w-20">
          <LanguageSwitcher />
        </div>
        <h1 className="font-semibold text-2xl">{dict.aboutText}</h1>
        <div className="items-center justify-start text-sm w-20">
          <LocalizedLink href="/" className="whitespace-nowrap hidden lg:flex ">
            {dict.returnToHomePageText}
          </LocalizedLink>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-t-4xl px-6 lg:px-20 pt-10 pb-12 -mt-10 z-20">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center text-center mb-6">
          <Image
            alt=""
            width={80}
            height={80}
            src={avatar}
            placeholder="blur"
            className="w-20 lg:w-40 rounded-full aspect-square bg-gray-100 object-cover -mt-20 lg:-mt-28"
          />
          <h2 className="font-semibold text-lg mt-3">{dict.artistName}</h2>
          <p className="text-xs text-gray-500 mt-1">263 N Circular Rd, Dublin</p>
        </div>

        {/* Menu Items */}
        <div className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 active:bg-gray-100"
            >
              <div className="flex items-center gap-x-3">
                <item.icon className="size-4" />
                <span className="text-xs">{item.label}</span>
              </div>
              <ChevronRightIcon
                className={classNames(
                  lang == 'fa' && 'rotate-180',
                  "text-gray-400 size-3.5"
                )}
              />
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid gap-y-5 mt-16 text-xs text-gray-500" dir="ltr">
          {[
            {
              type: 'call',
              label: dict.callText,
              href: 'tel:+989123456789',
              address: '+989123456789',
            },
            {
              type: 'email',
              label: dict.emailText,
              href: 'mailto:infoMe@gmail.com?subject=درخواست محصول&body=سلام...',
              address: 'infome@gmail.com',
            }].map(a => (
              <div key={a.label} className="flex justify-between items-center">
                <span>{a.address}</span>
                <a href={a.href} className="text-sky-600 text-xs">{a.label}</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}