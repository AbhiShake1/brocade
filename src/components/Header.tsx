import React from 'react';
import type {NextComponentType} from "next";
import Image from "next/image";
import {
    IconHeadphonesFilled,
    IconHeartFilled,
    IconMenu2,
    IconSearch,
    IconShoppingCart,
    IconUser
} from "@tabler/icons-react";

const Header: NextComponentType = () => {
    return (
        <header className='w-full flex flex-row items-center justify-between px-4 pt-9 pb-8'>
            <div className='flex flex-row space-x-4'>
                <Image
                    src='data:image/jpeg;base64,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'
                    alt='' height={64} width={64}/>
                <h1 className='font-kablammo text-3xl'>BROCADE OFFICIAL</h1>
            </div>
            <div className='flex flex-row space-x-4'>
                <IconSearch className='w-12 h-12'/>
                <IconHeartFilled className='w-12 h-12'/>
                <IconShoppingCart className='w-12 h-12'/>
                <IconUser className='w-12 h-12'/>
                <IconHeadphonesFilled className='w-12 h-12'/>
                <IconMenu2 className='w-12 h-12'/>
            </div>
        </header>
    );
};

export default Header;