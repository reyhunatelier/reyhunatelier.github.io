import Image from "next/image"
import planet from "@/public/planet.webp"

export default function Card({ dict }) {
  return (
    <div className="bg-white shadow-2xl/10 border border-gray-50 rounded-xl w-full p-4 md:p-8 active:scale-105 transition-all">
      <div className="grid grid-cols-3 items-center gap-x-4 md:gap-x-8">
        <div
          className="relative flex justify-center w-full mx-auto aspect-square bg-gray-50 rounded-xl"
        >
          <Image
            alt=""
            fill
            src={planet}
            placeholder="blur"
            className="absolute bottom-5 size-60 object-cover"
          />
        </div>
        <div className="col-span-2 text-black">
          <h1 className="text-xs">{dict.cardTitleText}</h1>
          <p className="text-[10px]/3 py-1.5">
            {dict.cardDiscText}
          </p>
          <p className="text-xs">$ 29</p>
        </div>
      </div>
    </div>
  )
}