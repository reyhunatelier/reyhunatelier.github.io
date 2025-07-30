'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function LocalizedLink({ href, locale, children, ...props }) {
  const params = useParams()
  const currentLocale = params?.locale || 'fa'

  const usedLocale = locale || currentLocale

  const path = href.startsWith('/') ? href : `/${href}`

  const localizedHref = `/${usedLocale}${path}`

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  )
}