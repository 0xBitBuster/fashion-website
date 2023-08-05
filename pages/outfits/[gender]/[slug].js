import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import outfits from "@/data/outfits";
import Image from "next/image";
import Link from "next/link";

export default function SpecificOutfit({ outfit, otherOutfits }) {
    return (
        <Layout title={outfit.name} description={outfit.description}>
            <hr className="bg-light-green h-[1px] border-none" />
            <section className="bg-creme text-dark-green px-4 md:px-10 pt-28 pb-12 lg:py-20 lg:pt-36 container mx-auto">
                {!outfit ? (
                    <h1 className="font-viaoda text-center text-5xl mb-14">404 - Outfit not found</h1>
                ) : (
                    <div className="flex flex-col md:flex-row text-center md:text-left gap-10 lg:gap-20">
                        <div className="mx-auto md:mx-0 max-w-sm md:max-w-lg">
                            <Carousel>
                                {outfit.images.map((image, i) => (
                                    <Image key={i} className="w-full rounded-sm" width={485} height={727} alt={image.alt} priority src={image.src} />
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <p>Outfits &gt; <Link className="capitalize" href={`/outfits/${outfit.gender}`}>{outfit.gender}</Link> <Link className="capitalize" href={`/outfits/${outfit.gender}`}>({outfit.style})</Link></p>
                            <h1 className="font-viaoda text-5xl mt-4 mb-2">{outfit.name}</h1>
                            <div className="flex gap-1 mb-4">
                                <p className="font-medium text-2xl">${outfit.price}</p>
                            </div>
                            <p className="text-light-green italic mb-8 text-lg">{outfit.description}</p>
                            <div className="space-y-5">
                                {Object.keys(outfit.links).map((key) => (
                                    <div key={key}>
                                        <h3 className="text-lg">{key}</h3>
                                        <div className="flex gap-2">
                                            {outfit.links[key].map((link, i) => 
                                                i % 2 != 0 ? (
                                                    <Link href={link.link} key={link.name} target="_blank" rel="nofollow noopener" className="flex-1 bg-creme text-dark-green whitespace-nowrap px-4 py-2.5 hover:brightness-105 border border-dark-green duration-300 text-center">{link.name}</Link>
                                                ) : (
                                                    <Link href={link.link} key={link.name} target="_blank" rel="nofollow noopener" className="flex-1 bg-dark-green text-creme whitespace-nowrap px-4 py-2.5 hover:brightness-105 duration-300 text-center">{link.name}</Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <section className="bg-dark-green text-creme py-12 md:py-24 px-4 md:px-8 text-center md:text-left" id="featured">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-baseline md:gap-28">
                        <h1 className="font-viaoda text-4xl md:text-6xl md:mb-16">
                            Outfits you may like
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-0 md:gap-10">
                        {otherOutfits.map((outfit, i) => (
                            <div key={outfit.slug} className={`flex-1 mx-auto md:mx-0 max-w-sm md:max-w-full ${i == 0 || i == 2 ? "md:mt-16" : ""}`}>
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

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    const outfit = outfits.filter(outfit => outfit.gender === params.gender && outfit.slug === params.slug) || null
    const otherOutfits = outfits.filter(outfit => outfit.gender === params.gender && outfit.slug !== params.slug)

    return {
        props: {
            outfit: outfit[0],
            otherOutfits: otherOutfits ? otherOutfits.slice(0, 3) : []
        },
        revalidate: 900, 
    }; 
}