import { Viaoda_Libre, Cairo } from 'next/font/google'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from 'next/head';

const viaodaFont = Viaoda_Libre({ 
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-viaoda'
})

const cairoFont = Cairo({ 
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-cairo'
})

function Layout({ children, title, description }) {
    return (
        <main className={`${viaodaFont.variable} ${cairoFont}`}>
            <Head>
                <title>{`${title} | MatchingFits`}</title>
                <meta name="description" content={description} />
            </Head>

            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

export default Layout;
