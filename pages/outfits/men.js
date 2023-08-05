import Layout from "@/components/Layout";
import outfits from "@/data/outfits";
import Image from "next/image";
import Link from "next/link";

export default function MenOutfits({ outfits }) {
    return (
        <Layout title="Men" description="Get ready to dive into the fabulous world of fashion with our featured collection which contains the best looking outfits for both men and women.">
            <hr className="bg-light-green h-[1px] border-none" />
            <section className="bg-dark-green text-creme px-4 md:px-10 pt-28 pb-12 lg:py-20 lg:pt-36">
                <h1 className="font-viaoda text-center text-5xl mb-14">Outfits for Men</h1>
                {outfits.length === 0 ? (
                    <h1 className="text-center text-2xl">No outfits were found :(</h1>
                ) : (
                    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {outfits.map((outfit, i) => (
                            <div key={outfit.slug}>
                                <Link href={`/outfits/${outfit.gender}/${outfit.slug}`} className="hover:brightness-75 duration-300">
                                    <Image width={485} height={727} alt={outfit.images[0].alt} src={outfit.images[0].src} />
                                </Link>
                                <h3 className="text-3xl font-viaoda mt-4"><Link className="hover:underline underline-offset-4" href={`/outfits/${outfit.gender}/${outfit.slug}`}>{outfit.name}</Link></h3>
                                <h3 className="text-2xl text-light-creme">${outfit.price}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const menOutfits = outfits.filter(outfit => outfit.gender === "men")

    return {
        props: {
            outfits: menOutfits,
        },
        revalidate: 900, 
    };
}
