import React, {type FunctionComponent, useState} from 'react';
import Image from "next/image";

interface Props {
    imageUrls: string[]
}

const ProductPreview: FunctionComponent<Props> = ({imageUrls}) => {
    const [activeUrl, setActiveUrl] = useState(imageUrls[0] || '')
    return (
        <>
            <div className="flex flex-col justify-start gap-1 relative w-1/6 items-center">
                {imageUrls.map(url => (
                    <button key={url} onClick={() => setActiveUrl(url)}>
                        <img
                            src={url}
                            className="min-h-0 min-w-0 mb-6 relative hover:scale-150 transition-transform duration-200"
                        />
                    </button>
                ))}
            </div>
            <Image
                src={activeUrl}
                alt={''}
                height={1080}
                width={1080}
                className="min-h-0 min-w-0 mr-3 relative w-[618px] h-[629px] object-cover rounded-lg"
            />
        </>
    )
};

export default ProductPreview;