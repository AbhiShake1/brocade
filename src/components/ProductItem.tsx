import React, {type FunctionComponent} from 'react';
import Image from "next/image";
import {IconHeart, IconShoppingCart} from "@tabler/icons-react";
import {useRouter} from "next/router";

const ProductItem: FunctionComponent = () => {
    const {push} = useRouter()
    return <button onClick={()=>void push(`product/1`)}>
        <div className="w-[269px] h-[331px] relative">
            <div
                className="w-[269px] h-[331px] left-0 top-0 absolute bg-zinc-300 bg-opacity-30 rounded-3xl shadow backdrop-blur-[15px]"></div>
            <Image alt='' width={1080} height={1080} className="w-[230px] h-[236px] left-[20px] top-[19px] absolute rounded-3xl object-cover"
                   src="https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg"/>
            <div className="w-9 h-9 left-[214px] top-[272px] absolute bg-slate-700 rounded-full text-white">
                <IconShoppingCart/>
            </div>
            <div className="w-9 h-9 left-[171px] top-[272px] absolute bg-slate-700 rounded-full text-white">
                <IconHeart/>
            </div>
            <div className="right-[156px] top-[272px] absolute text-white text-[20px] font-normal">
                <div className='flex flex-col space-y-2'>
                    <h6 className='text-sm'>Racing Pullover</h6>
                    <h6 className='text-sm'>Rs.2500</h6>
                </div>
            </div>
            <div className="w-5 h-5 left-[179px] top-[281px] absolute"></div>
            <div className="w-[19px] h-[19px] left-[222px] top-[281px] absolute"></div>
        </div>
    </button>
};

export default ProductItem;