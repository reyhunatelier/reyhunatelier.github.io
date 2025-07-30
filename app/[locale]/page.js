import { getDictionary } from "@/app/[locale]/dictionaries"
import SearchInput from "@/app/_ui/form/search"
import Image from "next/image"

import LocalizedLink from "@/app/_ui/localizedLink"

import pic1 from '@/public/pic (1).jpg'
import pic2 from '@/public/pic (2).jpg'
import pic3 from '@/public/pic (3).jpg'
import pic4 from '@/public/pic (4).jpg'
import pic5 from '@/public/pic (5).jpg'
import pic6 from '@/public/pic (6).jpg'
import pic7 from '@/public/pic (7).jpg'
import pic8 from '@/public/pic (8).jpg'

const categories = [
  {
    name: '',
    imageSrc: pic1
  },
  {
    name: '',
    imageSrc: pic2
  },
  {
    name: '',
    imageSrc: pic3
  },
  {
    name: "",
    imageSrc: pic4
  },
  {
    name: "",
    imageSrc: pic5
  },
  {
    name: "",
    imageSrc: pic6
  },
]

export default async function Page({ params }) {
  const lang = (await params)?.locale
  const dict = await getDictionary(lang)

  return (
    <>
      <SearchInput />

      <section aria-labelledby="category-heading" className="pb-20 xl:mx-auto xl:px-8" dir="auto">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 id="category-heading" className="text-xl font-bold tracking-tight">
            {dict.categoriesText}
          </h2>
          <LocalizedLink href='/favourite' className="hidden text-sm font-semibold text-gray-600 active:text-gray-500 lg:hover:text-gray-500 sm:block">
            <span aria-hidden="true">{dict.allCategoriesText}</span>
          </LocalizedLink>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto snap-x snap-mandatory no-scrollbar py-2 xl:overflow-visible">
              <div className="absolute flex items-center gap-x-4 px-4 cursor-pointer sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-6 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="relative snap-center flex h-72 w-56 active:pb-10 lg:hover:pb-10 transition-all flex-col overflow-hidden rounded-lg p-6 active:opacity-75 lg:hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <Image
                        fill
                        src={category.imageSrc}
                        alt={category.name}
                        placeholder="blur"
                        unoptimized
                        className="size-full object-cover object-center"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black opacity-80"
                    />
                    {/* <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:hidden">
          <LocalizedLink href='/favourite' className="block text-sm font-semibold active:text-gray-500 lg:hover:text-gray-500">
            <span aria-hidden="true">{dict.allCategoriesText}</span>
          </LocalizedLink>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4 lg:gap-x-8 px-4 lg:px-8 pb-10">
        <div className="relative w-full aspect-square transition-all flex-col overflow-hidden rounded-lg">
          <Image
            fill
            src={pic7}
            alt=''
            placeholder="blur"
            unoptimized
            className="size-full object-cover object-center"
          />
        </div>
        <div className="relative w-full aspect-square transition-all flex-col overflow-hidden rounded-lg">
          <Image
            fill
            src={pic8}
            alt=''
            placeholder="blur"
            unoptimized
            className="size-full object-cover object-center"
          />
        </div>
      </div>
    </>
  )
}