import BookReader from "@/component/BookFlip";
import ClientOnly from "@/component/ClientOnly";

export default function Home() {
  return (
    <div>
      <ClientOnly fallback={<div className="min-h-screen overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-8"><div className="w-[550px] h-[800px] bg-gray-200 animate-pulse rounded shadow-xl border border-gray-300"></div></div>}>
        <BookReader />
      </ClientOnly>
    </div>
  );
}
