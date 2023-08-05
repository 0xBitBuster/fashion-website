import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function debounce(func, timeout) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

function Navbar() {
    const [isToggled, setIsToggled] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [search, setSearch] = useState("");
    const [active, setActive] = useState(false);
    const router = useRouter();

    const toggleSearch = (e) => {
        e.preventDefault();

        if (search.length >= 3) {
            router.push("/search?query=" + encodeURIComponent(search));
            return;
        }

        setIsSearching(!isSearching);
    };

    useEffect(() => {
        document.body.style.overflowY = isToggled ? "hidden" : "auto";
    }, [isToggled]);

    useEffect(() => {
        const handleScroll = debounce(() => setActive(window.scrollY > 100), 50);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${active ? "bg-creme shadow-sm" : "bg-dark-green"} duration-300 bg-opacity-95 fixed w-full z-20`}>
            <div className="flex items-center justify-between px-10 py-4 mx-auto container">
                <h3 className={`ml-3 text-4xl ${active ? "bg-darkgreen" : "text-[#f8f7f1]"} duration-300 font-viaoda`}>
                    <Link href="/">MatchingFits</Link>
                </h3>
                <div className={`hidden lg:flex space-x-7 ${active ? "bg-darkgreen" : "text-light-creme"} duration-300 font-medium underline-offset-8`}>
                    <Link className="cursor-pointer hover:underline" href="/outfits/men">
                        Men
                    </Link>
                    <Link className="cursor-pointer hover:underline" href="/outfits/women">
                        Women
                    </Link>
                </div>

                <div>
                    <form className="hidden lg:flex">
                        <input
                            placeholder="White Blazer"
                            spellCheck="false"
                            onChange={(e) => setSearch(e.currentTarget.value?.trim())}
                            className={`outline-none bg-transparent ${isSearching ? "" : "opacity-0 invisible scale-x-75"} duration-200 border-b border-light-green placeholder:text-light-green ${active ? "text-dark-green" : "text-light-creme"} font-medium`}
                        />
                        <button type="submit" className="cursor-pointer hover:underline underline-offset-8 font-medium ml-2" onClick={toggleSearch}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.2rem"
                                viewBox="0 0 512 512"
                                className={active ? "fill-dark-green" : "fill-light-creme"}
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                    </form>

                    <div className="lg:hidden relative z-30">
                        <button className="flex flex-col space-y-1.5" onClick={() => setIsToggled(!isToggled)}>
                            <span className={`w-8 h-1 rounded duration-300 origin-top-left ${isToggled ? "rotate-45 bg-dark-green" : active ? "bg-dark-green" : "bg-light-creme"}`}></span>
                            <span className={`w-6 h-1 rounded duration-300 block ml-auto ${isToggled ? "opacity-0 bg-dark-green" : active ? "bg-dark-green" : "bg-light-creme"}`}></span>
                            <span className={`w-8 h-1 rounded duration-300 origin-bottom-left ${isToggled ? "-rotate-45 bg-dark-green" : active ? "bg-dark-green" : "bg-light-creme"}`}></span>
                        </button>
                    </div>
                    <div
                        className={`z-20 fixed top-0 h-screen w-screen bg-creme flex flex-col items-center justify-center space-y-10 text-2xl font-medium underline-offset-8 ${
                            isToggled ? "left-0" : "left-full"
                        } duration-500`}
                    >
                        <Link className="cursor-pointer hover:underline" href="/outfits/men" onClick={() => setIsToggled(!isToggled)}>
                            Men
                        </Link>
                        <Link className="cursor-pointer hover:underline" href="/outfits/women" onClick={() => setIsToggled(!isToggled)}>
                            Women
                        </Link>
                        <form>
                            <input
                                placeholder="White Blazer"
                                spellCheck="false"
                                autoSave="false"
                                onChange={(e) => setSearch(e.currentTarget.value?.trim())}
                                className={`text-dark-green outline-none bg-transparent ${isSearching ? "" : "hidden"} duration-200 border-b border-light-green placeholder:text-light-green ${active ? "text-dark-green" : "text-light-creme"} font-medium`}
                            />
                            <button type="submit" className="cursor-pointer hover:underline underline-offset-8 font-medium ml-2" onClick={toggleSearch}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.2rem"
                                    viewBox="0 0 512 512"
                                    className={active ? "fill-dark-green" : "fill-light-creme"}
                                >
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className={`${active ? "" : "bg-light-green"} h-[1px] border-none`} />
        </nav>
    );
}

export default Navbar;
