import { getDictionary } from "@/app/[locale]/dictionaries"
import Card from "@/app/_ui/form/card"


export default async function Favourite({ params }) {
  const lang = (await params).locale
  const dict = await getDictionary(lang)

  return (
    <div className="py-12 px-4" dir="auto">
      <h1 className="px-6 font-semibold" >{dict.favouriteText}</h1>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-20 my-5">
        {Array(4).fill().map((_, i) => (
          <Card dict={dict} key={i} />
        ))}
      </div>
    </div>
  )
}