import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import outfits from "@/data/outfits";
import shuffleArray from "@/utils/shuffleArray";

export default function Home({ featuredOutfits }) {
    return (
        <Layout title="Best Outfits for Men and Women" description="Get ready to dive into the fabulous world of fashion with our featured collection which contains the best looking outfits for both men and women.">
            <section className="bg-dark-green text-creme pt-28 pb-12 lg:py-20 lg:pt-36">
                <div className="flex flex-col lg:flex-row items-center justify-evenly px-10 py-3 mx-auto container">
                    <div className="mr-4">
                        <h1 className="font-viaoda text-center text-6xl leading-[4rem] lg:text-6xl lg:leading-[6rem] xl:text-[9rem] xl:leading-[9rem] mb-16">
                            Fashions <br />
                            <span className="inline-block ml-28"></span>fade, style <br />
                            is eternal.
                        </h1>
                        <div className="flex flex-col-reverse lg:flex-row items-center text-lg font-medium">
                            <div className="flex items-center">
                                <p className="mr-3 text-light-green">
                                    Scroll <br />
                                    Down
                                </p>
                                <Link className="bg-yellow-creme text-dark-green w-16 h-16 xl:w-20 xl:h-20 rounded-full text-2xl xl:text-4xl flex items-center justify-center" href="#collection">
                                    <span className="animate-bounce">🡫</span>
                                </Link>
                            </div>
                            <p className="mb-10 lg:mb-0 ml-20 text-light-creme text-2xl xl:text-3xl font-light font-viaoda">
                                Style is a way to say who you <br />
                                are without having to speak 
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 max-w-xs md:max-w-sm xl:max-w-md">
                        <Image src="/hero.jpg" width={450} height={670} priority alt="Men wearing a beautiful black outfit" className="rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row py-24 gap-8 px-4 md:px-8 container mx-auto" id="collection">
                <div className="relative group flex-1 cursor-pointer">
                    <Link href="/outfits/men">
                        <Image src="/men.jpg" width={720} height={480} alt="Men wearing a business suit" className="h-full brightness-[.6] group-hover:brightness-75 duration-300" />
                    </Link>
                    <div className="absolute right-0 bottom-0">
                        <div>
                            <Link href="/outfits/men" className="ml-auto bg-dark-green w-16 h-16 text-white text-3xl flex justify-center items-center">🡕</Link>
                            <h2 className="py-8 px-10 text-6xl text-white font-viaoda"><Link href="/outfits/men">Men</Link></h2>
                        </div>
                    </div>
                </div>
                <div className="relative group flex-1 cursor-pointer">
                    <Link href="/outfits/women">
                        <Image src="/women.jpg" width={720} height={480} alt="Women wearing a stunning summer outfit" className="h-full brightness-[.6] group-hover:brightness-75 duration-300" />
                    </Link>
                    <div className="absolute right-0 bottom-0">
                        <div>
                            <Link href="/outfits/women" className="ml-auto bg-dark-green w-16 h-16 text-white text-3xl flex justify-center items-center">🡕</Link>
                            <h2 className="py-8 px-10 text-6xl text-white font-viaoda"><Link href="/outfits/women">Women</Link></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark-green text-creme py-12 md:py-24 px-4 md:px-8 text-center md:text-left" id="featured">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-baseline mb-10 lg:mb-0 md:gap-28">
                        <h1 className="font-viaoda text-8xl mb-16">
                            Featured <br/>
                            Outfits
                        </h1>
                        <p className="text-2xl text-light-creme">
                            Get ready to dive into the fabulous world of fashion with our featured collection which contains the best looking outfits for both men and women.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row mt-10 md:mt-0 gap-8 md:gap-10">
                        {featuredOutfits.map((outfit, i) => (
                            <div className={`flex-1 mx-auto md:mx-0 ${i == 0 || i == 2 ? "md:mt-16" : ""}`} key={outfit.slug}>
                                <Link href={`/outfits/${outfit.gender}/${outfit.slug}`} className="hover:brightness-75 duration-300">
                                    <Image width={485} height={727} alt={outfit.images[0].alt} src={outfit.images[0].src} />
                                </Link>
                                <h3 className="text-3xl font-viaoda mt-4"><Link className="hover:underline underline-offset-4" href={`/outfits/${outfit.gender}/${outfit.slug}`}>{outfit.name}</Link></h3>
                                <h3 className="text-2xl text-light-creme">${outfit.price}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const featuredOutfits = shuffleArray(outfits).slice(0, 3)

    return {
        props: {
            featuredOutfits,
        },
        revalidate: 900, 
    };
}

