import Image from "next/image";

export default function GalleryGrid() {
    return(
        <div className="w-full grid grid-cols-3 grid-rows-4 grid-flow-dense gap-4">
            <div className="gridSquare gridSquare__small !rounded-full !shadow-inner !shadow-neutral-400 border border-neutral-200 flex">
                <Image
                    src="/plants__compressed/peony-1__compressed.jpg"
                    width={200}
                    height={200}
                    alt="a leaf"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                />
            </div>
            <div className="gridSquare gridSquare__big !rounded-full !rounded-bl-none flex">
                <Image
                    src="/plants__compressed/chrysanthemum-1__compressed.jpg"
                    width={300}
                    height={300}
                    alt="a leaf"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                />
            </div>
            <div className="gridSquare gridSquare__tall !rounded-tr-full !rounded-bl-full bg-secondary-red"></div>
            <div className="gridSquare gridSquare__small bg-neutral-800"></div>
            <div className="gridSquare gridSquare__small !rounded-bl-full flex">
                <Image
                    src="/plants__compressed/flowers-1__compressed.jpg"
                    width={200}
                    height={200}
                    alt="a leaf"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                />
            </div>
            <div className="gridSquare gridSquare__long !rounded-full !rounded-bl-none flex justify-center items-center relative">
                <Image
                    src="/plants__compressed/blue-1__compressed.jpg"
                    width={300}
                    height={100}
                    alt="a leaf"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                    className="absolute top-0 left-0"
                />
            </div>
            <div className="gridSquare gridSquare__small !rounded-full !rounded-tr-none bg-secondary-red"></div>
        </div>
    )
}