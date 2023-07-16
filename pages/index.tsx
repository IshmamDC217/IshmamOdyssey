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
        <link rel="icon" href="/favicon.ico" />
        <link href="https://db.onlinewebfonts.com/c/dcf30970234b82fe7443bb097ed25a55?family=istanbul+Regular" rel="stylesheet"/>

      </Head>

      <header>
        <Navigation/>
      </header>

      <main>
        <Homepage/>
        <HomepageMob/>
        <Work />
        <WorkMob />
        <Hobby />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}