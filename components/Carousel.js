import { useState } from "react";

function Carousel({ children }) {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent(current => current === 0 ? children.length - 1 : current - 1)
    const next = () => setCurrent(current => current === children.length - 1 ? 0 : current + 1)
    
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>{children}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="w-9 h-9 rounded-full shadow-md bg-white/80 text-dark-green hover:bg-white">
                    🡰
                </button>
                <button onClick={next} className="w-9 h-9 rounded-full shadow-md bg-white/80 text-dark-green hover:bg-white">
                    🡲
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {children.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
