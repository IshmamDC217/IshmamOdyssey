import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Homepage from '@/components/Homepage' 
import Work from '@/components/Work' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ishmam Ahmed</title>
        <link rel="icon" href="/" />

      </Head>

      <header>
        <Navigation/>
      </header>

      <main>
        <Homepage/>
        <Work />
      </main>

    </div>
  )
}