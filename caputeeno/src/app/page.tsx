import Image from 'next/image'
"use client"

import styles from './page.module.css'
import { FilterBar } from '@/Components/filter-bar'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  )
}
