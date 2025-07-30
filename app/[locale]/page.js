import { getDictionary } from "@/app/[locale]/dictionaries"
import SearchInput from "../_ui/form/search"

export default async function Page({ params }) {
  const lang = (await params)?.locale
  const dict = await getDictionary(lang)

  return (
    <>
      <SearchInput />
    </>
  )
}