'use client'

import Link from 'next/link'
import Image from 'next/image'
import avatar from "@/public/avatar.jpg"

import { motion } from "motion/react"

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { classNames } from '@/app/_lib/general'

import {
  HomeIcon as HomeSolidIcon,
  HeartIcon as HeartSolidIcon,
  PaintBrushIcon as PaintBrushSolidIcon,
} from '@heroicons/react/20/solid'

import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar({ dict }) {
  const [position, setPosition] = useState({ left: 0 })
  const buttonRefs = useRef([])

  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  function isActivePath(pathname, targetPath) {
    const normalizedPath = `/${locale}${targetPath === '/' ? '' : targetPath}`
    return pathname === normalizedPath
  }

  const pages = [
    {
      name: dict.home,
      path: '/',
      icon: HomeSolidIcon,
    },
    {
      name: dict.favourite,
      path: '/favourite',
      icon: HeartSolidIcon,
    },
    {
      name: dict.about,
      path: '/about',
      icon: PaintBrushSolidIcon,
    },
  ]

  useEffect(() => {
    const activeIndex = pages.findIndex(p => isActivePath(pathname, p.path))
    const el = buttonRefs.current[activeIndex]
    if (el) {
      setPosition({ left: el.offsetLeft })
    }
  }, [pathname])

  return (
    <>
      <div className={classNames(
        isActivePath(pathname, '/about') && 'hidden',
        "flex items-center justify-between bg-white sticky top-0 h-14 px-4 lg:px-20 z-40"
      )}
      >
        <div className="flex items-center justify-start text-xs w-20">
          <LanguageSwitcher />
        </div>
        <div className='flex items-center justify-center h-full aspect-square'>
          <svg width="100" viewBox="0 0 100 80" fontFamily="serif">
            <text x="50%" y="45" fontSize="55" textAnchor="middle" dominantBaseline="middle">R</text>
            <rect x="20" y="34.5" width="60" height="14" fill="white" />
            <text x="50%" y="43" fontSize="5" textAnchor="middle" fill="black" letterSpacing="0.05em">REYHUN ATELIER</text>
          </svg>
          {/* <div className='relative flex items-center justify-center font-serif mb-px select-none'>
            <p className='text-[50px]'>R</p>
            <p className='absolute text-[5px] py-1 tracking-wider mt-[3px] bg-white whitespace-nowrap'>REYHUN ATELIER</p>
          </div> */}
        </div>
        <div className="flex items-center justify-end text-xs w-20">
          <Image
            alt=""
            width={80}
            height={80}
            src={avatar}
            placeholder="blur"
            className="w-10 rounded-full aspect-square bg-gray-100 object-cover"
          />
        </div>
      </div>

      <div className="md:hidden fixed flex items-center justify-around bottom-0 h-12 w-full text-white bg-sky-700 z-40">
        {position?.left !== 0 && (
          <motion.svg
            viewBox="0 0 200 100"
            initial={false}
            animate={position}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute w-28 mt-2 rotate-180 -translate-x-9"
          >
            <path
              d="
            M 0 100
            C 30 100, 50 30, 100 30
            C 150 30, 170 100, 200 100
            L 200 100 
            L 0 100 
            Z
            "
              fill="white"
              stroke="none"
            />
          </motion.svg>
        )}
        {pages.map((n, index) => (
          <Link
            key={n.name || index}
            href={n.path}
            ref={el => (buttonRefs.current[index] = el)}
            onClick={() => {
              const el = buttonRefs.current[index]
              if (el) {
                setPosition({ left: el.offsetLeft })
              }
            }}
            className={classNames(
              isActivePath(pathname, n.path) && '-translate-y-3 shadow-xld',
              'flex items-center justify-center transition-all size-10 relative z-10 rounded-full bg-sky-700',
            )}
          >
            <n.icon className='size-6 origin-center' />
          </Link>
        ))}
      </div>
    </>
  )
}