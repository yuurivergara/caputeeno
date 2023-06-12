"use client"
import Image from 'next/image'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import styles from './page.module.css'
import { FilterBar } from '@/Components/filter-bar'
import { ProductsList } from '@/Components/products-list'

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>

    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
    </QueryClientProvider>
  )
}
