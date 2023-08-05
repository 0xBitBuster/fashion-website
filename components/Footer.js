import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="py-20 px-4 md:px-8 flex flex-col items-center">
            <h2 className="text-5xl font-viaoda">MatchingFits</h2>
            <p className="text-xl text-center my-5">Your go-to fashion website for the best matching clothes and accessories <br /> with curated styles from established and emerging designers.</p>
            <div className="flex gap-6 mb-7 font-bold text-lg">
                <Link href="/legal/privacy-policy" className="hover:underline underline-offset-4">Privacy Policy</Link>
                <Link href="/legal/imprint" className="hover:underline underline-offset-4">Imprint</Link>
            </div>
            <div className="flex gap-4">
                <Link href="https://tiktok.com" target="_blank" rel="noopener" className="shadow-md hover:shadow-xl duration-300 p-2 rounded-xl">
                    <Image src="/tiktok.svg" className="w-8 h-8" width={32} height={32} alt="TikTok" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener" className="shadow-md hover:shadow-xl duration-300 p-2 rounded-xl">
                    <Image src="/instagram.svg" className="w-8 h-8" width={32} height={32} alt="TikTok" />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;