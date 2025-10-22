(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/component/BookFlip.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Load only on client side to avoid SSR errors
const HTMLFlipBook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-pageflip/build/index.es.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-pageflip/build/index.es.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[550px] h-[800px] bg-gray-200 animate-pulse rounded"
        }, void 0, false, {
            fileName: "[project]/src/component/BookFlip.jsx",
            lineNumber: 10,
            columnNumber: 18
        }, this)
});
_c = HTMLFlipBook;
// Image-based page component
const ImagePage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ src, index }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: `Page ${index + 1}`,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/component/BookFlip.jsx",
            lineNumber: 16,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/BookFlip.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this));
_c1 = ImagePage;
const BookReader = ()=>{
    _s();
    const book = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isBookOpen, setIsBookOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New state for open logic
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookReader.useEffect": ()=>{
            setIsMounted(true);
        }
    }["BookReader.useEffect"], []);
    // Prevent hydration mismatch by not rendering until mounted
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Your demo image pages
    const images = [
        "pages/01.webp",
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
        "pages/14.webp"
    ];
    const bookCover = "/bookcover/online cover.png";
    const onFlip = (e)=>{
        setPage(e.data);
    };
    // useEffect(() => {
    //     if (book.current) {
    //         const pf = book.current.pageFlip();
    //         setTotalPages(pf.getPageCount());
    //     }
    // }, []);
    const next = ()=>book.current.pageFlip().flipNext();
    const prev = ()=>book.current.pageFlip().flipPrev();
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[550px] h-[800px] bg-gray-200 animate-pulse rounded shadow-xl border border-gray-300"
            }, void 0, false, {
                fileName: "[project]/src/component/BookFlip.jsx",
                lineNumber: 71,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/BookFlip.jsx",
            lineNumber: 70,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-8",
        children: !isBookOpen ? // 👈 Show cover only if book is not open
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>setIsBookOpen(true),
            className: "cursor-pointer shadow-xl border border-gray-300   overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: bookCover,
                alt: "Cover",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/component/BookFlip.jsx",
                lineNumber: 84,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/BookFlip.jsx",
            lineNumber: 80,
            columnNumber: 17
        }, this) : // 👈 Show FlipBook after click
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HTMLFlipBook, {
                    width: 550,
                    height: 800,
                    size: "stretch",
                    minWidth: 315,
                    maxWidth: 1000,
                    minHeight: 500,
                    maxHeight: 1600,
                    drawShadow: true,
                    showCover: true,
                    mobileScrollSupport: true,
                    onFlip: onFlip,
                    className: "shadow-2xl border border-gray-300",
                    ref: book,
                    children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImagePage, {
                            src: src,
                            index: i
                        }, i, false, {
                            fileName: "[project]/src/component/BookFlip.jsx",
                            lineNumber: 109,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/component/BookFlip.jsx",
                    lineNumber: 93,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 space-x-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            className: "px-4 py-3 bg-black text-white border rounded disabled:opacity-30",
                            disabled: page === 0,
                            children: "Prev"
                        }, void 0, false, {
                            fileName: "[project]/src/component/BookFlip.jsx",
                            lineNumber: 114,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Page ",
                                page + 1,
                                " of ",
                                images.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/BookFlip.jsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: next,
                            className: "px-4 py-2 bg-black text-white border rounded disabled:opacity-30",
                            disabled: page === images.length - 1,
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/src/component/BookFlip.jsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/BookFlip.jsx",
                    lineNumber: 113,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/component/BookFlip.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
};
_s(BookReader, "C63Y1L/kA+nki0nbmILvTAbz4IU=");
_c2 = BookReader;
const __TURBOPACK__default__export__ = BookReader;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HTMLFlipBook");
__turbopack_context__.k.register(_c1, "ImagePage");
__turbopack_context__.k.register(_c2, "BookReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_component_BookFlip_jsx_fc6a2b42._.js.map