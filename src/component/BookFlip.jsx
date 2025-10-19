"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";


// Load only on client side to avoid SSR errors
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { 
  ssr: false,
  loading: () => <div className="w-[550px] h-[800px] bg-gray-200 animate-pulse rounded"></div>
});

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
        "pages/01.webp", // Cover
        "pages/02.webp",
        "pages/03.webp",
        "pages/04.webp",
        "pages/05.webp",
        "pages/06.webp",
        "pages/07.webp",
        "pages/08.webp",
        "pages/09.webp",
        "pages/10.webp",
        "pages/11.webp",
        "pages/12.webp",
        "pages/13.webp",
        "pages/14.webp",
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
                        height={800}
                        size="stretch"
                        minWidth={315}
                        maxWidth={1000}
                        minHeight={500}
                        maxHeight={1600}
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

                    <div className="mt-8 space-x-6">
                        <button
                            onClick={prev}
                            className="px-4 py-3 bg-black text-white border rounded disabled:opacity-30"
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
