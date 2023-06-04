import Head from 'next/head'
import Navigation from "../components/Navigation"
import Contact from '../components/Contact'


export default function ContactPage() {

    return (
        <div>
            <Head>
                <meta name="description" content="Contact page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ishlogo.ico" />
            </Head>

            <header>
                <Navigation />
            </header>

            <main>
                <Contact />
                {/* <Footer /> */}
            </main>
        </div>
    )
}