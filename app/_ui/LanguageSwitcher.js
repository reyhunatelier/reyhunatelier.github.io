'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const SUPPORTED_LOCALES = ['en', 'fa']

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const currentLocale = params?.locale || 'fa'

  const switchTo = currentLocale === 'fa' ? 'en' : 'fa'

  const switchLanguage = () => {
    const segments = pathname.split('/').filter(Boolean)

    if (segments.length === 0) {
      router.push(`/${switchTo}`)
      return
    }

    if (SUPPORTED_LOCALES.includes(segments[0])) {
      segments[0] = switchTo
    } else {
      segments.unshift(switchTo)
    }

    const newPath = '/' + segments.join('/')
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