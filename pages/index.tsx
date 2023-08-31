import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Homepage from '@/components/Homepage'
import HomepageMob from '@/components/HomepageMob'
import Work from '@/components/Work'
import WorkMob from '@/components/WorkMob'
import Hobby from '@/components/Hobbies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ishmam Ahmed</title>
        <link rel="icon" href="/prototypelogo.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Caladea:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/bluu-next" rel="stylesheet"/>
        
      </Head>

      <header>
        <Navigation />
      </header>

      <main>
        <Homepage />
        <HomepageMob />
        <Work />
        <WorkMob />
        <Hobby />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}