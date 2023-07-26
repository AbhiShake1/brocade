import React, {FunctionComponent} from 'react';
import {Image} from "@mantine/core";
import {useRouter} from "next/router";

interface Props {
    imageUrl: string
    category: string
    id: string
}

const ShopByCategoryItem: FunctionComponent<Props> = ({imageUrl, category, id}) => {
    const {push} = useRouter()
    return (
        <div className='w-[272px] h-[372px] relative'>
            <Image
                src={imageUrl}
                height={372}/>
            <div
                className='absolute w-full py-2.5 bottom-0 text-white text-center bg-gradient-to-t from-neutral-400 to-transparent pl-8 pb-3 flex flex-row items-end'>
                <div className='flex flex-row justify-start'>
                    <div className='flex flex-col items-start'>
                        <button onClick={() => void push(`product/${id}`)}
                                className="px-4 py-[16.50px] bg-zinc-800 rounded-sm justify-start items-start gap-2.5 inline-flex">
                            <div className="text-white text-[12px] font-semibold leading-loose">Go
                                to {category} Section
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryItem;