import { getDictionary } from "@/app/[locale]/dictionaries"

import Image from "next/image"
import avatar from "@/public/avatar.jpg"
import { ChevronRightIcon, CreditCardIcon, GiftIcon, HeartIcon } from "@heroicons/react/24/outline"
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
    <div className="min-h-screen -mb-14" dir="auto">
      <div className="relative z-10">
        <div className="absolute top-10 left-16 w-40 h-40 bg-sky-500 opacity-40 rounded-full blur-2xl rotate-[20deg]"></div>
        <div className="absolute top-40 right-10 w-28 h-28 bg-sky-300 opacity-30 rounded-full blur-xl rotate-[60deg]"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-400 opacity-25 rounded-full blur-2xl rotate-[150deg]"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-600 opacity-40 rounded-full blur-[60px]"></div>
      </div>

      <div className="bg-sky-700 flex items-center justify-between text-white px-8 lg:px-20 pt-10 lg:pt-20 pb-28 lg:pb-32" dir="ltr">
        <div className="flex items-center justify-start text-sm w-20">
          <LanguageSwitcher />
        </div>
        <h1 className="font-semibold text-2xl">{dict.AboutText}</h1>
        <div className="flex items-center justify-start text-xs w-20" />
      </div>

      {/* Card */}
      <div className="bg-white rounded-t-4xl px-6 lg:px-20 pt-10 pb-12 -mt-10">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center text-center mb-6">
          <Image
            alt=""
            width={80}
            height={80}
            src={avatar}
            placeholder="blur"
            className="w-20 lg:w-40 rounded-full aspect-square bg-gray-100 object-cover -mt-20"
          />
          <h2 className="font-semibold text-lg mt-3">{dict.artistName}</h2>
          <p className="text-xs text-gray-500 mt-1">263 N Circular Rd, Dublin</p>
        </div>

        {/* Menu Items */}
        <div className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 active:bg-gray-50"
            >
              <div className="flex items-center gap-x-3">
                <item.icon className="size-4" />
                <span className="text-xs">{item.label}</span>
              </div>
              <ChevronRightIcon className="text-gray-400 size-3.5" />
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid gap-y-5 my-16 text-xs text-gray-500" dir="ltr">
          <div className="flex justify-between items-center">
            <span>+353 0404 46477</span>
            <button className="text-sky-600 text-xs">{dict.callText}</button>
          </div>
          <div className="flex justify-between items-center">
            <span>violetsavage@gmail.com</span>
            <button className="text-sky-600 text-xs">{dict.emailText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}