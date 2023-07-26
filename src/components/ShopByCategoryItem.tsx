import React from 'react';
import {ActionIcon, Image} from "@mantine/core";
import {IconHeart, IconShoppingCart} from "@tabler/icons-react";

const ShopByCategoryItem = () => {
    return (
        <div className='w-[272px] h-[372px] relative'>
            <Image src='https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg' height={372}/>
            <div
                className='absolute w-full py-2.5 bottom-0 text-white text-center bg-gradient-to-t from-neutral-400 to-transparent pl-8 pb-3 flex flex-row items-end'>
                <div className='flex flex-row justify-start'>
                    <div className='flex flex-col items-start'>
                        <div className="text-white text-[18px] font-bold tracking-wider">Racing Jersey-3</div>
                        <div className="text-white text-[14px] font-bold tracking-wider">Rs.1800</div>
                        <div className='h-4'/>
                        <div
                            className="px-4 py-[16.50px] bg-zinc-800 rounded-sm justify-start items-start gap-2.5 inline-flex">
                            <div className="text-white text-[12px] font-semibold leading-loose">Go to Jersey Section</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryItem;