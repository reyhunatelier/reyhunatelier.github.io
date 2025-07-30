'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const SUPPORTED_LOCALES = ['en', 'fa']

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const currentLocale = params.locale

  const switchTo = currentLocale === 'fa' ? 'en' : 'fa'

  const switchLanguage = () => {
    const segments = pathname.split('/')
    segments[1] = switchTo
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <button
      className='cursor-pointer'
      onClick={switchLanguage}
    >
      {switchTo === 'fa' ? 'فارسی' : 'English'}
    </button>
  )
}