"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";


// Load only on client side to avoid SSR errors
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

// Image-based page component
const ImagePage = React.forwardRef(({ src, index }, ref) => (
    <div ref={ref} className="page">
        <img src={src} alt={`Page ${index + 1}`} className="w-full h-full object-cover" />
    </div>
));

const BookReader = () => {
    const book = useRef();
    const [page, setPage] = useState(0);
    const [isBookOpen, setIsBookOpen] = useState(false); // New state for open logic

    // Your demo image pages
    const images = [
        "/pages/1.webp", // Cover
        "/pages/2.webp",
        "/pages/3.webp",
        "/pages/4.webp",
        "/pages/5.webp",
        "/pages/6.webp",
        "/pages/7.webp",
        "/pages/8.webp",
        "/pages/9.webp",
        "/pages/10.webp",
        "/pages/11.webp",
        "/pages/12.webp",
        "/pages/13.webp",
        "/pages/14.webp",
        "/pages/15.webp",
        "/pages/16.webp",
        
    ];
    const bookCover = "/bookcover/online cover.png"

    const onFlip = (e) => {
        setPage(e.data);
    };

    // useEffect(() => {
    //     if (book.current) {
    //         const pf = book.current.pageFlip();
    //         setTotalPages(pf.getPageCount());
    //     }
    // }, []);

    const next = () => book.current.pageFlip().flipNext();
    const prev = () => book.current.pageFlip().flipPrev();

    return (
        <div className="min-h-screen overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-8">
            {!isBookOpen ? (
                // 👈 Show cover only if book is not open
                <div
                    onClick={() => setIsBookOpen(true)}
                    className="cursor-pointer shadow-xl border border-gray-300   overflow-hidden"
                >
                    <img
                        src={bookCover}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                // 👈 Show FlipBook after click
                <>
                    <HTMLFlipBook
                        width={550}
                        height={760}
                        size="stretch"
                        minWidth={315}
                        maxWidth={1000}
                        minHeight={400}
                        maxHeight={1536}
                        drawShadow={true}
                        showCover={true}
                        mobileScrollSupport={true}
                        onFlip={onFlip}
                        className="shadow-2xl border border-gray-300"
                        ref={book}
                    >
                        {images.map((src, i) => (
                            <ImagePage key={i} src={src} index={i} />
                        ))}
                    </HTMLFlipBook>

                    <div className="mt-6 space-x-4">
                        <button
                            onClick={prev}
                            className="px-4 py-2 bg-black text-white border rounded disabled:opacity-30"
                            disabled={page === 0}
                        >
                            Prev
                        </button>
                        <span className="text-sm text-gray-600">
                            Page {page + 1} of {images.length}
                        </span>
                        <button
                            onClick={next}
                            className="px-4 py-2 bg-black text-white border rounded disabled:opacity-30"
                            disabled={page === images.length - 1}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookReader;